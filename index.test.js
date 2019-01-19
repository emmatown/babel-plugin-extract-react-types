const { create } = require("babel-test");
const path = require("path");

const { fixtures } = create({
  plugins: [require.resolve("./index")],
  presets: [require.resolve("@babel/preset-flow")]
});

fixtures("extract react types", path.join(__dirname, "__fixtures__"));
