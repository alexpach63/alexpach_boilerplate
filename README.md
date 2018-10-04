# Modern boilerplate - Mobx-state-tree - react - TypeScript - babel

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as ts loader.
  - [Babel Loader](https://github.com/babel/babel-loader) as js loader.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [Sass Loader](https://github.com/webpack-contrib/sass-loader)
  - [Mini Csss Text Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) for exporting bundled css.

## Installation

You can clone from this repository or [install the latest version](https://github.com/alexpach63/alexpach_boilerplate/releases) as a zip file.

```bash
$ git clone https://github.com/alexpach63/alexpach_boilerplate
$ cd alexpach_boilerplate
$ npm install
```

## Usage

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ npm run start:dev # This starts the app in development mode

# Building

$ npm dev # This builds the app in development mode
$ npm build # This builds the app in production mode

```