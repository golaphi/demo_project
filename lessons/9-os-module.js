const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(` The System is Up Since ${os.uptime()} secs`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
