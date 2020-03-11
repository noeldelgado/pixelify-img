# pixelify-img

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
| `x` | `Number` | 0 | x-axis pixel of the image effect stating point |
| `y` | `Number` | 0 | y-axis pixel of the image effect starting point |
| `w` | `Number` | `image.width` | x-axis pixel of the image effect ending point |
| `h` | `Number` | `image.height` | y-axis pixel of the image effect starting point |
| `alpha` | `Number` | 1 | Opacity applied to each pixel |
| `clean` | `Boolean` | false | Defines if the canvas used to generate the pixelated effect should be cleared. Useful for when the `pixelated` method is called with new options on the same instance. |

## License
MIT © [Noel Delgado](https://pixelia.me/)