const sayhi = require("./4-utiles");
const names = require("./3-names");
const data = require("./5.alternatives");
require("./6.mind-grenade");

sayhi(names.peter);
sayhi(names.john);

console.log(`hi this top ${names.secret}`);
console.log(data);
console.log(data.items[0]);
console.log(data.singleperson.name);
