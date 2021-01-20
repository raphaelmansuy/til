# How to install and configure prettier

## Add prettier support

### Install prettier

`npm`

```bash
npm install prettier --save-dev
npm install eslint-config-prettier --save-dev
npm install eslint-plugin-prettier --save-dev
```

`yarn`

```bash
yarn add prettier --save-dev
yarn add eslint-config-prettier --save-dev
yarn add eslint-plugin-prettier --save-dev
```


### Create a `.prettierrc` file in the root directory of the project

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
```
