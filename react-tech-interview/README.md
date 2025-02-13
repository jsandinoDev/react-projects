## Create & Init vanilla project



npm create vite@latest

## Install Vite plugin
npm install @vitejs/plugin-react -E

## Install React and react dom

npm install react react-dom -E


### Create & config vite.config.js file

```js
import { defineConfig  } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig({  
    plugins: [react()],    
})

```


## Modify the main & add the entry point


```js
import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("app")).render(<App />);
const root = createRoot(document.getElementById("app"))
root.render(<h1>Hi</h1>)


```


### Install linter

npm install standard -D


### Config linter
```json

"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```