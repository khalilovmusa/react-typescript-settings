<img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=khalilovmusa.eslint-prettier-react-ts" />

<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=ESLint+%2B+Prettier+Setup+for+React+%2B+TS" />
</h1>

<h3 align="center">Clean code, consistent formatting, and scalable linting—all in one repo ⚡</h3>

---

## 📸 Featured on Instagram

This config was shared in [Instagram page](https://instagram.com/justdevhints)—check it out for a visual walkthrough and setup tips!

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
npm install --save-dev eslint prettier typescript \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-import
<br/>
📦 Using Yarn:
<br/>
yarn add --dev eslint prettier typescript \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-import
  <br/>
---

### ✅ Step 4: 🧩 Add Scripts to 📄package.json
<br/>
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write ."
}

---
<br/>

### ✅ Step 5: 🚦 Run Lint and Format
<br/>
📦 Using NPM:
<br/>
npm run lint
npm run format

<br/>
📦 Using Yarn:
<br/>
yarn lint
yarn format


