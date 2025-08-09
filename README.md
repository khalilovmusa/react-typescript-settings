<<<<<<< HEAD
<img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=khalilovmusa.eslint-prettier-react-ts" />

<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=30&center=true&vCenter=true&width=550&height=70&duration=4000&lines=ESLint+%2B+Prettier+Setup+for+React+%2B+TS" />
</h1>

<h3 align="center">Clean code, consistent formatting, and scalable linting—all in one repo ⚡</h3>

---

## 📸 Featured on Instagram

This config was shared in [Instagram page](https://www.instagram.com/justdevhints/)—check it out for a visual walkthrough and setup tips!

---

## 🚀 How to Use

### ✅ Step 1: 🔌 Fork the Repository  
Go to [`github.com/khalilovmusa/eslint-prettier-react-ts`](https://github.com/khalilovmusa/eslint-prettier-react-ts) and click **Fork** in the top-right corner.

---

### ✅ Step 2: 📄 Clone Your Fork Locally

```bash
git clone https://github.com/your-username/eslint-prettier-react-ts
cd eslint-prettier-react-ts
```
---

### ✅ Step 3: ⬇️ Install Dependencies
<br/>
📦 Using NPM:

```bash
npm install --save-dev eslint prettier typescript \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-import
```

<br/>
📦 Using Yarn:
<br/>

```bash
yarn add --dev eslint prettier typescript \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-import
```

---

### ✅ Step 4: 🧩 Add Scripts to 📄package.json
<br/>

```
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write ."
}
```
---

### ✅ Step 5: 🚦 Run Lint and Format
<br/>
📦 Using NPM:
<br/>

```bash
npm run lint
npm run format
```
<br/>
📦 Using Yarn:
<br/>

```bash
yarn lint
yarn format
```

<br/>

---

### ✅ Step 6: 🎨 Prettier Setup

Prettier handles code formatting automatically—no more debates over tabs vs spaces.
<br/>

✅ Configuration
- 📄.prettierrc – defines formatting rules
- 📄.prettierignore – excludes files from formatting
<br/>
Example 📄.prettierrc:

```JSON
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

Example 📄.prettierignore:

```
node_modules
dist
build
```

---

### ✅ Step 7: 🐶 Husky + lint-staged (Optional but Recommended)
<br/>
Use Husky to run lint and format checks before every commit—catch issues early and keep your codebase clean.

<br/>
✅ Installation
📦With NPM:

```bash
npm install --save-dev husky lint-staged
```

📦With Yarn:

```bash
yarn add --dev husky lint-staged
```

<br/>
✅ Setup
Enable Git hooks:

```bash
npx husky install
```

Add to 📄package.json:

```JSON
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "**/*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

Or use Husky CLI:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
>>>>>>> master
```
