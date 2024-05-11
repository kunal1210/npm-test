const path = require("path");

console.log(path.sep);

const filepath = path.join("content", "subcontent", "content.text");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute_path = path.resolve(
  __dirname,
  "content",
  "subcontent",
  "content.txt"
);
console.log(absolute_path);
