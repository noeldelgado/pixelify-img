(function() {
    "use strict";

    var internals = {
        getImageSource:  function getImageSource(imageObject) {
            return imageObject.currentSrc || imageObject.src;
        },
        setAbsoluteImageSources: function setAbsoluteImageSources(image) {
            var sourcesMap = new Map();

            image.setAttribute('src', internals.getAbsoluteURL(image.src, image, sourcesMap));
            image.srcset && image.setAttribute('srcset', internals.replaceSrcset(image, sourcesMap));

            if (image.parentElement.constructor === HTMLPictureElement) {
                var sources = [].slice.call(image.parentElement.querySelectorAll('source'), 0);
                for (var i = 0, len = sources.length; i < len; i++)
                    sources[i].setAttribute('srcset', internals.replaceSrcset(sources[i], sourcesMap));
            }

            return sourcesMap;
        },
        getAbsoluteURL: function getAbsoluteURL(imagePath, sourceElement, sourcesMap) {
            var url = new URL(imagePath, document.baseURI).href;
            var sources = sourcesMap.get(url) || [];
            sourcesMap.set(url, sources.concat(sourceElement));
            return url;
        },
        replaceSrcset: function replaceSrcset(source, result) {
            return source.srcset.split(',').map(function (str) {
                var imagePath = str.match(/([^\s]+)/)[0];
                return str.replace(imagePath, internals.getAbsoluteURL(imagePath, source, result));
            });
        }
    };

    function Pixelify(image, config) {
        if (!image) return

        this.image = (image.constructor === HTMLPictureElement) ? image.querySelector('img') : image;
        this.config = Object.assign({
            pixel: 10,
            x: 0,
            y: 0,
            alpha: 1,
            clean: false,
            resizeTimeout: 100
        }, config);

        this._canvas = document.createElement('canvas');
        this._context = this._canvas.getContext('2d');
        this._resizeTimeout = null;
        this._oldSrc = null;
        this._currentSrc = internals.getImageSource(this.image);
        this._sourcesMap = internals.setAbsoluteImageSources(this.image);

        if (this.config.clean) {
            this._canvasClean = document.createElement('canvas');
            this._contextClean = this._canvasClean.getContext('2d');
        }

        this._prePixelate(this.image);
        window.addEventListener('resize', this._resizeHandler.bind(this));
    };

    Pixelify.prototype.pixelate = function pixelate(image, naturalWidth, naturalHeight) {
        var nw = naturalWidth || image.naturalWidth;
        var nh = naturalHeight || image.naturalHeight;
        var w, h, hs, x, y, xx, yy, pp, data;

        w = this.config.w || nw;
        h = this.config.h || nh;
        hs = ~~(this.config.pixel / 2);

        this._canvas.width = nw;
        this._canvas.height = nh;

        if (this.config.clean) {
            this._canvasClean.width = this._canvas.width;
            this._canvasClean.height= this._canvas.height;
        }

        this._context.drawImage(image, 0, 0, nw, nh);
        data = this._context.getImageData(this.config.x, this.config.y, w, h).data;

        var ctx = this[this.config.clean ? '_contextClean' : '_context'];

        for (y = 0; y <= h + hs; y += this.config.pixel) { yy = y;
            if (yy >= h) yy = h - this.config.pixel + hs;

            for (x = 0; x <= w + hs; x += this.config.pixel) { xx = x;
                if (xx >= w) xx = w - this.config.pixel + hs;

                pp = (yy * (w * 4)) + (xx * 4);

                ctx.fillStyle = `rgba(${data[pp]}, ${data[pp+1]}, ${data[pp+2]}, ${(this.config.alpha * data[pp+3]) / 255})`;
                ctx.fillRect((this.config.x + x) - hs, (this.config.y + y) - hs, this.config.pixel, this.config.pixel);
            }
        }

        this._postPixelate(internals.getImageSource(image));

        return this;
    };

    Pixelify.prototype._prePixelate = function _prePixelate(image) {
        var img = new Image;
        var imageLoaded = function imageLoaded() {
            this._sourcesMap.has(internals.getImageSource(img)) && this.pixelate(image, img.naturalWidth, img.naturalHeight);
            img = img.onload = null;
        }.bind(this);
        img.onload = imageLoaded;
        img.src = internals.getImageSource(image);
    };

    Pixelify.prototype._postPixelate = function _postPixelate(imagePath) {
        var img = this._sourcesMap.get(imagePath);
        for (var i = 0, len = img.length; i < len; i++) {
            var source = img[i];
            var dataurl = this[(this.config.clean) ? "_canvasClean" : "_canvas"].toDataURL(source.type || 'image/png');
            source.srcset && source.setAttribute('srcset', source.srcset.replace(imagePath, dataurl));
            source.src && source.setAttribute('src', source.src.replace(imagePath, dataurl));
        }
        return this;
    };

    Pixelify.prototype._resizeHandler = function _resizeHandler() {
        if (this._resizeTimeout) clearTimeout(this._resizeTimeout);
        this._resizeTimeout = setTimeout(function _resizeTimeout() {
            this._oldSrc = this._currentSrc;
            this._currentSrc = internals.getImageSource(this.image);
            if (typeof this._oldSrc === 'undefined' || this._oldSrc !== this._currentSrc)
                this._sourcesMap.has(this._currentSrc) && this._prePixelate(this.image);
        }.bind(this), this.config.resizeTimeout);
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Pixelify;
    } else {window.Pixelify = Pixelify;}
}());
