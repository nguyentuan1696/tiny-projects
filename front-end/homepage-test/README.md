# homepage-test

Live: https://homepage-test-xi.vercel.app/

## To-Do 

- Fix aspect ratio main section when on mobile screen

## structure

```
├── assets
│   ├── favicon.ico
│   ├── icons
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── mstile-150x150.png
│   └── photos
│       ├── anh-header.png
│       ├── facebook.svg
│       ├── gallery-photo-1.png
│       ├── gallery-photo-2.png
│       ├── gallery-photo-3.png
│       ├── gallery-photo-4.png
│       ├── gallery-photo-5.png
│       ├── google.svg
│       ├── instagram.svg
│       ├── pinterest.svg
│       ├── sub-photo-1.png
│       ├── sub-photo-2.png
│       └── twitter.svg
├── components
│   ├── app.js
│   ├── Footer
│   │   ├── index.js
│   │   └── style.scss
│   ├── Header
│   │   ├── index.js
│   │   └── style.scss
│   ├── index.js
│   ├── Main
│   │   ├── index.js
│   │   └── style.scss
│   ├── Menu
│   │   ├── index.js
│   │   └── style.scss
│   ├── Services
│   │   ├── index.js
│   │   └── style.scss
│   └── Sub
│       ├── index.js
│       └── style.scss
├── index.js
├── manifest.json
├── style
│   ├── abstracts
│   │   ├── _typography.scss
│   │   └── _variables.scss
│   ├── base
│   │   ├── _base.scss
│   │   └── _reset.scss
│   ├── components
│   ├── fonts
│   │   ├── gothamhtf-bold-webfont.woff2
│   │   ├── GothamHTF-Bold.woff
│   │   ├── gothamhtf-book-webfont.woff2
│   │   └── GothamHTF-Book.woff
│   ├── layout
│   ├── main.scss
│   ├── utilities
│   └── utils
│       └── _custom-scrollbar.scss
├── sw.js
└── template.html

18 directories, 48 files

```
## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
