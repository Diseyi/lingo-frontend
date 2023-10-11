// Base config needed by Next.js
const babel = {
  presets: ["next/babel"],
};

if (process.env.MIGHTYMELD) {
  babel.plugins = ["@mightymeld/runtime/babel-plugin-mightymeld"];
}

module.exports = babel;
