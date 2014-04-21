# Pixelify

Convert images (or portions of it) into a pixelated version.

It replaces the source of the given image with the altered version using DATA URL format. That mean that any css styles applied to the original image will not being lost.

Since the data is pixelated at runtime, one good option can be to save the pixelated version of the image and use that instead of running the script every time.

# Usage
```
var image, options;

image = document.querySelector('img.my_image');
optons = {
    pixel : 50,
    alpha : .5
};

new Pixelify(image, options);
```

# Parameters (image, options)
```
@image <required> [Object] the reference to the image on the DOM
@options <optional> [Object] the options to be applied to the image

new Pixelify(image, {
	/* Default Options */
	pixel	: 10,
	x 		: 0,
	y 		: 0,
	w 		: image.width,
	h 		: image.height,
	alpha : 1,
	clean : false
});
```

# Demo
[Codepen](http://codepen.io/noeldelgado/pen/EGxzu/)