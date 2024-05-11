// const os = require("os");
// const info = os.userInfo();
// const uptime = os.uptime();
// console.log(info);
// console.log(uptime);
// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMemory: os.totalmem(),
//   freememmory: os.freemem(),
// };

// console.log(currentOs);

const os = require("os");
const info = os.userInfo();
const uptime = os.uptime();

console.log(info);
console.log(uptime);

const CurrentOs = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
  freememory: os.freemem(),
};

console.log(CurrentOs);
