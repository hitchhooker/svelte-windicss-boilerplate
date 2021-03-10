# svelte-windiss-boilerplate

## Installation

```bash
npx degit sveltejs/template svelte-windicss-app
cd svelte-windicss-app
npm install svelte-windicss-preprocess --save-dev
npm install
```

## Configuration

Add svelte-windicss-preprocess to your rollup.config.js.

### Svelte

Add `svelte-windicss-preprocess` to your `rollup.config.js`.

```js
// rollup.config.js
// ...
export default {
  // ...
  plugins: [
    svelte({
      // svelte-windicss-preprocess
      preprocess: require('svelte-windicss-preprocess').preprocess({
        config: 'tailwind.config.js', // tailwind config file path (optional)
        compile: true, // false: interpretation mode; true: compilation mode
        prefix: 'windi-', // set compilation mode style prefix
        globalPreflight: true, // set preflight style is global or scoped
        globalUtility: true, // set utility style is global or scoped
      }),
      // ...
    }),
  ],
  // ...
};
```

### Sveltekit

Add `svelte-windicss-preprocess` to your `svelte.config.cjs`.

> For now, sveltekit has an issue of setting the preprocessor. Make sure your `snowpack.config.cjs` is consistent with our [example](https://github.com/windicss/svelte-windicss-preprocess/blob/v2.1.0/example/svelte-next/snowpack.config.cjs) before setting.

```js
// svelte.config.cjs
module.exports = {
  preprocess: require('svelte-windicss-preprocess').preprocess({
    // uncomment this, if you need a config file
    // config: 'tailwind.config.js',
    compile: false,
    prefix: 'windi-',
    globalPreflight: true,
    globalUtility: true,
  }),
  kit: {
    adapter: '@sveltejs/adapter-node',
    target: '#svelte',
  },
};
```

with Typescript

```js
// svelte.config.cjs
const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: [
    sveltePreprocess.typescript(),
    require('svelte-windicss-preprocess').preprocess({
      // uncomment this, if you need a config file
      // config: 'tailwind.config.js',
      compile: false,
      prefix: 'windi-',
      globalPreflight: true,
      globalUtility: true,
    }),
  ],
  kit: {
    adapter: '@sveltejs/adapter-node',
    target: '#svelte',
  },
};
```

### Sapper(rollup)

Add `svelte-windicss-preprocess` to your `rollup.config.js`.

```js
// rollup.config.js
// ...
export default {
  // ...
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      // ...
      svelte({
        // svelte-windicss-preprocess
        preprocess: require('svelte-windicss-preprocess').preprocess({
          config: 'tailwind.config.js',     // tailwind config file path
          compile: true,                    // false: interpretation mode; true: compilation mode
          prefix: 'windi-',                 // set compilation mode style prefix
          globalPreflight: true,            // set preflight style is global or scoped
          globalUtility: true,              // set utility style is global or scoped
        }),
        compilerOptions: {
          // ...
        }
      }),
      // ...
    ]
  // ...
  }
  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      // ...
      svelte({
        // svelte-windicss-preprocess
        preprocess: require('svelte-windicss-preprocess').preprocess({
          config: 'tailwind.config.js',      // tailwind config file path
          compile: true,                     // false: interpretation mode; true: compilation mode
          prefix: 'windi-',                  // set compilation mode style prefix
          globalPreflight: true,             // set preflight style is global or scoped
          globalUtility: true,               // set utility style is global or scoped
        }),
        compilerOptions: {
          // ...
        },
      }),
      // ...
    ]
  }
  // ...
}
```

### Sapper(webpack)

Add `svelte-windicss-preprocess` to your `webpack.config.js`.

```js
// webpack.config.js
module.exports = {
  client: {
    // ...
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              // ... other options
              // svelte-windicss-preprocess
              preprocess: require('svelte-windicss-preprocess').preprocess({
                config: 'tailwind.config.js', // tailwind config file path
                compile: true, // false: interpretation mode; true: compilation mode
                prefix: 'windi-', // set compilation mode style prefix
                globalPreflight: true, // set preflight style is global or scoped
                globalUtility: true, // set utility style is global or scoped
              }),
            },
          },
        },
        // ...
      ],
    },
  },

  server: {
    // ...
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              // ... other options
              // svelte-windicss-preprocess
              preprocess: require('svelte-windicss-preprocess').preprocess({
                config: 'tailwind.config.js', // tailwind config file path
                compile: true, // false: interpretation mode; true: compilation mode
                prefix: 'windi-', // set compilation mode style prefix
                globalPreflight: true, // set preflight style is global or scoped
                globalUtility: true, // set utility style is global or scoped
              }),
            },
          },
        },
        // ...
      ],
    },
  },
};
```

### Create tailwind.config.js
nano tailwind.config.js and add windicss plugin requirements
```
module.exports = {
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/filters'),
    require('windicss/plugin/scroll-snap'),
  ],
}; 
```


# Run it

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
