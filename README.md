# Parse React Sample app #

Todo app made with ReactJS and ParseReact

[*working example*](http://alley.parseapp.com)

## What's inside ?
- Webpack
- Babel
- [React transform boilerplate](https://github.com/gaearon/react-transform-boilerplate)
   - Hot reloading
   - Error catching
- [Parse React](https://github.com/ParsePlatform/ParseReact)
- Sass or Less
- [Eslint](http://eslint.org/)
- Unit testing (right now nothing but it will be the following):
  - [ ] [Mocha](http://mochajs.org/) - testing framework
  - [ ] [Chai](http://chaijs.com) - assertion library
  - [ ] [Sinon](http://sinonjs.org) - mocking library
  - [ ] [Karma](http://karma-runner.github.io/0.12/index.html) - test runner
  - [ ] [PhantomJS](http://phantomjs.org/) - headless WebKit
  - [ ] [Istanbul](http://gotwarlost.github.io/istanbul/) - code coverage
- [ ] Visual testing
  - _tbd_
- [React Router](https://github.com/rackt/react-router)

## Setup

### Install npm project dependencies
```
npm install
```

#### Run locally

```
npm run start
```

It will setup a server with live reload on `localhost:3000`. Live reloading is for both javascript and styles.

#### Run linter

```
npm run lint
```

Will output eventually code mistakes

#### Build the code

```
npm run build
```

This code will bundle both `javascript` and `styles` to `dist/` folder, generating an `index.html` which will point to a `bundle.js` and `bundle.css`.
