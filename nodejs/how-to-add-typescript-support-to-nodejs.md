# How to add typescript support to nodejs

## Install typescript support libraries

```bash
npm i -D typescript # Typescript compiles to plain JS
npm i -D ts-node # ts-node to run typescript code without compiling to JS
npm i -D nodemon # Automatically restarts the application whenever file changes are detected
```

## Create a `tsconfig.json` file

```javascript
{
  "compilerOptions": {
  "target": "es6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "sourceMap": true,
    "resolveJsonModule": true,
    "lib": ["es6", "dom"],
    "esModuleInterop": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

## Add scripts in `package.json`

```json

{
  ...
 "scripts": {
    "start": "tsc && node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
 ...
}
```

## Add ESLint support

### Install ESLint

```bash
npm install eslint --save-dev
npm install @typescript-eslint/parser --save-dev
npm i @typescript-eslint/eslint-plugin --save-dev
```

### Add a ESLint configuration file `.eslintrc.yaml`

```yaml
env:
  node: true
parser: "@typescript-eslint/parser"
parserOptions:
  ecmaVersion: 9
  project: ./tsconfig.json
plugins:
  - "@typescript-eslint"
```

## Add prettier support

### Install prettier

```bash
npm install prettier --save-dev
npm install eslint-config-prettier --save-dev
npm install eslint-plugin-prettier --save-dev
```

### Create a `.prettierrc` file

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
```

[A full article that describes the setupt](https://dev.to/caelinsutch/setting-up-a-typescript-nodejs-application-with-prettier-and-eslint-53jc)
