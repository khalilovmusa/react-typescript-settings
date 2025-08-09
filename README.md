How to use
✅ Step 1: 🔌 Fork the repository

✅ Step 2: 📄 Clone your fork locally
git clone https://github.com/your-username/your-forked-repo
cd your-forked-repo

✅ Step 3: ⬇️ Install dependencies
For NPM
npm install --save-dev eslint prettier typescript \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-import
For Yarn
yarn add --dev eslint prettier typescript \
  eslint-plugin-react eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-config-prettier eslint-plugin-import


✅ Step 4: Add lint and format scripts to 📄package.json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write ."
}

✅ Step 5: Run lint and format
For NPM
npm run lint
npm run format

For Yarn
yarn lint
yarn format
