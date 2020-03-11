# pixelify-img
[![npm-badge](https://img.shields.io/npm/v/pixelify-img.svg)](https://www.npmjs.com/package/pixelify-img)
[![Known Vulnerabilities](https://snyk.io/test/npm/pixelify-img/0.1.1/badge.svg)](https://snyk.io/test/npm/pixelify-img/0.1.1)
![license-badge](https://img.shields.io/npm/l/pixelify-img.svg)

JS library for pixelating DOM images (or a portion of it).

It replaces the source of the given image with the modified version using Data URL, so any CSS applied to the original image will be keep, this method is even responsive right of the box.

**TIP:** Since the data is pixelated at runtime, saving the pixelated version of the image and using that instead will be a good option.

## Demo
http://codepen.io/noeldelgado/pen/EGxzu/

## Dependencies
None

## Installation
**NPM**

```js
npm intall pixelify-img --save
```

## Usage
```js
const image = document.querySelector('img.my_image');
const options = {
    pixel: 50,
    alpha : .5
};

new Pixelify(image, options);
```

## API
### Pixelify(image, options)
#### @param image
| value type | default value | description |
|:--|:--|:--|
| `HTMLImageElement` | `undefined` *required | Reference to the DOM image |

#### @param Object:options
| value name | value type | default value | description |
|:--|:--|:--|:--|
| `pixel` | `Number` | 10 | pixels size |
| `x` | `Number` | 0 | x-axis pixel of the image (in natural size) from which the effect will start |
| `y` | `Number` | 0 | y-axis pixel of the image (in natural size) from which the effect start |
| `w` | `Number` | `image.naturalWidth` | width from `x` where the effect will end |
| `h` | `Number` | `image.naturalHeight` | height from `y` where the effect will end |
| `alpha` | `Number` | 1 | Opacity applied to each pixel |
| `clean` | `Boolean` | false | Defines if the canvas should be clear when applying `alpha`. |

## License
MIT © [Noel Delgado](https://pixelia.me/)
