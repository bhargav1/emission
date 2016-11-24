# Reactions ⟶ Emissions

[React Native] Components used by [Eigen].

### Meta

* __State:__ production
* __Point People:__ [@sarahscott](https://github.com/sarahscott), [@alloy](https://github.com/alloy)

This is a core [Artsy Mobile](https://github.com/artsy/mobile) OSS project, along with [Energy](https://github.com/artsy/energy), [Eidolon](https://github.com/artsy/eidolon), [Eigen](https://github.com/artsy/eigen) and [Emergence](https://github.com/artsy/emergence).

Don't know what Artsy is? Check out [this overview](https://github.com/artsy/meta/blob/master/meta/what_is_artsy.md) and [more](https://github.com/artsy/meta/blob/master/README.md), or read our objc.io on [team culture](https://www.objc.io/issues/22-scale/artsy).

Want to know more about Emission? Read the [mobile](http://artsy.github.io/blog/categories/mobile/) blog posts, or [Emission's](http://artsy.github.io/blog/categories/emission/) / [React Native's](http://artsy.github.io/blog/categories/reactnative/) specifically.

### Installation

1. Install [Node.js][node], and [Yarn][yarn]: `$ brew install node yarn`
2. Install file watcher used by React Native:
   * `$ brew install pcre`
   * `$ brew link pcre`
   * `$ brew install watchman --HEAD`
3. Install NPM modules: `$ yarn install`
4. Install Pods: `$ cd Example && pod install`

Why Yarn? See [our JS glossary for Yarn][glossary-yarn],

### Development

### Using VS Code as an IDE

There is a comprehensive document covering [our setup here](docs/vscode.md).

### Vanilla Commands

1. Run `$ npm start` from the top directory, which will:
   * Clean the example app’s Xcode build dir.
   * Start the example app’s React Native packager.
   * Start the React Storybooks environment.

2. Now from Xcode you can run the app in `Example/Emission.xcworkspace`.

### Updating Dependencies

1. We vendor some data from other repositories that you will sometimes need to update. You can either update all of them
   with `$ npm run sync-externals` or individually:
   * The GraphQL schema of metaphysics that Relay uses to generate queries from: `$ npm run sync-schema`
   * The colors defined in Artsy’s style-guide: `$ npm run sync-colors`

### Using Relay

Some helpful Relay documentation is listed below, but the general workflow is:

1. Build a fragment for each child component that specifies only the attributes used by the component itself (no
   extraneous information).
2. Ensure the parent component calls `getFragment` for each child component that uses Relay.
3. Make sure to supply every child component’s `props` upon instantiation in the parent.

----

Another gotcha is around fragments that use variables. For this it is important to understand that whenever a Relay
backed hierarchy is used, 2 trees will be rendered.

1. A tree of all Relay query fragments is rendered into a single query.
2. Once the query has been performed, the view component tree is rendered.

What this means in practice, is that you will need to pass variables down _both_ those trees.
1. Once from the [Relay route](https://facebook.github.io/relay/docs/api-reference-relay-route.html) down through all
   `getFragment(name, variables)` calls.
2. Second down through the props of all components.

See:
* https://github.com/artsy/emission/commit/e84940b8360b8c5b838045a619be5b8558d5fad7
* https://github.com/facebook/relay/issues/309#issuecomment-140485321

----

Try quitting and restarting your node instance if you change something Relay-related and you run into this error:

```
Unhandled JS Exception: RelayQL: Unexpected invocation at runtime. Either the Babel transform was not set up, or it
failed to identify this call site. Make sure it is being used verbatim as `Relay.QL`
```

### Deployment

Currently deploying the emission example app to Testflight is done manually.

On the other hand, our JS is deployed from master to our dev build on Testflight [via AppHub](https://github.com/artsy/emission/pull/263).

### Resources

* React Native:
  - http://makeitopen.com
  - https://github.com/fbsamples/f8app/
  - http://facebook.github.io/react-native/docs/getting-started.html
  - http://beginning-mobile-app-development-with-react-native.com/book-preview.html

* Relay:
  - https://facebook.github.io/relay/docs/getting-started.html
  - https://github.com/facebook/relay/tree/master/examples
  - https://github.com/fbsamples/f8app/

* Testing:
  - https://facebook.github.io/jest/
  - https://facebook.github.io/jest/docs/api.html#content
  - https://facebook.github.io/jest/blog/2016/07/27/jest-14.html

* Flow:
  - http://flowtype.org/docs/type-annotations.html
  - http://flowtype.org/docs/react.html
  - http://flowtype.org/docs/quick-reference.html (and the rest of the language reference)

* Flexbox:
  - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  - http://blog.krawaller.se/posts/a-react-app-demonstrating-css3-flexbox/

* React Native Storybooks
  - https://github.com/kadirahq/react-native-storybook
  - https://github.com/kadirahq/react-storybook


[React Native]: http://facebook.github.io/react-native/
[Eigen]: https://github.com/artsy/eigen
[yarn]: https://yarnpkg.com
[flow]: http://flowtype.org
[node]: http://nodejs.org
[glossary-yarn]: http://artsy.github.io/blog/2016/11/14/JS-Glossary/#yarn