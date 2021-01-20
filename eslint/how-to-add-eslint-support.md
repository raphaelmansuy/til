# How to add ESLint support

## Install ESLint

`npm`

```bash
npm install eslint --save-dev
npm install @typescript-eslint/parser --save-dev
npm i @typescript-eslint/eslint-plugin --save-dev
```

`yarn`


```bash
yarn add eslint --save-dev
yarn add @typescript-eslint/parser --save-dev
yarn add @typescript-eslint/eslint-plugin --save-dev
```


## Create a ESLint configuration file name `.eslintrc.yaml`

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
