# Define the world as your Oyster

Welcome to this repo!

Here you will find the code associated to the presentation "define the world as your oyster". A basic introduction to TypeScript declaration files and what do you need to know to contribute your definitions to the open source community.

## Understanding the sample code?

The code is structured as follows:

- `external/` folder contains two modules relevant to JavaScript code we want to expose to TypeScript.
  - `external/calculator/` is a module called `calculator` (as defined in its `package.json`) meant to simulate an old JS library we had to reuse.
  - `external/geometry/` is a module called `awesome-geometry` (as defined in its `package.json`) meant to simulate an external library we have no control over.
- `index.js` sample JavaScript content we are trying to replicate in TypeScript to be sure the type definition matches our intended purpose.
- `src/` contains the TypeScript files used in this demo. This folder was configured in the `tsconfig.json` file (included) as part of our source code.
  - `src/types` folder configured to contain type definitions (as expressed in `tsconfig.json`)

Once you have `yarn`ed the code, you will notice the modules contained in the `extenal` folder will be copied into `node_modules` as configured in the `package.json` file. This is a way to host custom modules that aren't hosted or publically hosted (like github or npm packages).

Once the code has been compiled, you will end up with a `gen` folder, which is referenced in the `package.json` folder to execute your project.

## How do I run this sample code?

To run this code, you need to have `node` installed in your computer (as well as `yarn`, although you could rewrite the commands below to execute it via `npm`)

```sh
# Assuming you have `yarn` installed and you are running
# this code in a Mac (or bash terminal):
yarn # this will install dependencies

yarn run_js # this will output the execution of index.js

yarn run_ts # this will compile and execute index.ts
```

## Few questions

Here are a few questions raised during the presentation.

### Why define it as your oyster? Why did you call the presentation like this?

Because you will be in a position to take the opportunity life has to offer, reuse your code if that is what you want to do, write better code.

### If I want to write a declaration file for a public library/module, where do I start?

The best way to start is to look for an example, translate it to TypeScript and start implementing that interface. Otherwise, find the default export and every other export you will need to complete a working unit test and get that to work.

### Do I need to declare everything written in the JS file?

No, you just need to declare whatever is public and accessible to others. If there are private functions/variables or elements that have been repurposed (such as global constants that have been encapsulated in `enum` types) then don't declare it.
