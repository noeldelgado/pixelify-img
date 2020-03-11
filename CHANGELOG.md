# Changelog

## [Unreleased]

## [0.1.1] - [#1](../../pull/1) 2020-03-11
## Changed
- Filter NPM distributed files [`c3ca472`](https://github.com/noeldelgado/pixelify-img/pull/1/commits/c3ca4728207a6f799ff7c5651133ac54838f8510)

## Fixed
- Wrong effect applied for scaled images (responsive) [`33818f3`](https://github.com/noeldelgado/pixelify-img/pull/1/commits/33818f37a8a2918a8078c359b1d026589e7929cc)
  - use the image.natural{Width, Height} instead of image.{width, height} to perform the calculations

## Removed
- `dist/pixelify.min.js` - it was never distributed this way, so it does not breaks anything [`1320756`](https://github.com/noeldelgado/pixelify-img/pull/1/commits/1320756099c0a813b9095a359af5656cbf564411)
- `Gruntfile.js` - not used anymore [`c9a50e2`](https://github.com/noeldelgado/pixelify-img/pull/1/commits/c9a50e2288afcf0b70fadcce12a50e5dae08def0)
- remove old dev-dependencies [`15ef271`](https://github.com/noeldelgado/pixelify-img/pull/1/commits/15ef27137d6df678f338250df41035aa46d6d09d)
  - grunt, grunt-contrib-watch, load-grunt-tasks, grunt-contrib-uglify

## [0.1.0] - 2020-03-11
## Added
- Published on NPM

[Unreleased]: https://github.com/noeldelgado/pixelify-img/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/noeldelgado/pixelify-img/compare/tag/v0.1.1...v0.1.1
[0.1.0]: https://github.com/noeldelgado/pixelify-img/releases/tag/v0.1.0
