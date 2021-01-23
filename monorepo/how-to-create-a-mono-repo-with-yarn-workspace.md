# How to create a mono-repository configuration with yarn workspace

## Step 1 - Creating the mono repository

- Create a new directory called `my-solution`
- Create a package.json file
- Create a directory called `./packages`

```bash
mkdir my-solution
cd ./my-solution
touch .package.json
mkdir ./packages
```

- Edit the file `package.jon`

```json
{
  "name": "my-solution",
  "private": "true",
  "version": "0.0.1",
  "workspaces": ["packages/*"],
  "dependencies": {},
  "devDependencies": {}
}
```

## Step2 - Add a client project (example a react project)

- Use react-create-app to create a new project under `package` directory

```bash
npx create-react-app packages/my-app
```

- Create new library under `package` directory

```bash
mkdir ./packages/my-library
cd ./my-library
touch ./package.json
touch ./index.js
```

- Edit `package.json` file

```json
{
  "name": "my-library",
  "version": "0.0.1",
  "dependencies": {},
  "devDependencies": {},
  "main": "./index.js"
}
```

- Edit `index.js` file

```javascript
const square = (x) => x * x

const getCurrentDate = () => new Date().toISOString()

module.exports = {
  square,
  getCurrentDate
}
```

## Step3 Add `my-library` dependencies to `my-app`

```bash
yarn workspace my-app add my-library0.0.1
```

## Use library `my-library`inside `my-app`

- Edit `./packages/my-app/src/App.js`

```javascript
import { getCurrentDate } from "my-library"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{getCurrentDate()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
```

- Modify the file `package.json` at the root of the `my-solution` directory
- Add a star command

```json
{
  "name": "my-solution",
  "private": "true",
  "version": "0.0.1",
  "workspaces": ["packages/*"],
  "dependencies": {},
  "devDependencies": {}
}
```

- Execute `yarn install`

```bash
yarn install
```

- Execute the application

```bash
yarn start
```

 A good article of [Sebastien Weber](https://doppelmutzi.github.io/) about [Multirepo vs Monorepo approach](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/#:~:text=yarn%20workspaces%20is%20the%20only,yarn%20as%20dependency%20management%20tools.)
