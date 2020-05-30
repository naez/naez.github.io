// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "mqpacker": {
      sort: "sort-css-media-queries"
    },
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
