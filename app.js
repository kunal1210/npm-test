const lodash = require("lodash");
const arr = [3, [4, [6, 5]]];
const newarr = lodash.flattenDeep(arr);
console.log(newarr);
