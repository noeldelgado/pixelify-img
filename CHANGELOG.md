# Changelog

## [Unreleased]

## [0.1.1] - 2020-03-11
## Changed
- Filter NPM distributed files [`c3ca472`]

## Fixed
- Wrong effect applied for scaled images (responsive) [`33818f3`]
  - use the image.natural{Width, Height} instead of image.{width, height} to perform the calculations

## Removed
- `dist/pixelify.min.js` - it was never distributed this way, so it does not breaks anything [`1320756`]
- `Gruntfile.js` - not used anymore [`c9a50e2`]
- remove old dev-dependencies [`15ef271`]
  - grunt, grunt-contrib-watch, load-grunt-tasks, grunt-contrib-uglify

## [0.1.0] - 2020-03-11
## Added
- Published on NPM

[Unreleased]: https://github.com/noeldelgado/pixelify-img/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/noeldelgado/pixelify-img/compare/tag/v0.1.1...v0.1.1
[0.1.0]: https://github.com/noeldelgado/pixelify-img/releases/tag/v0.1.0
