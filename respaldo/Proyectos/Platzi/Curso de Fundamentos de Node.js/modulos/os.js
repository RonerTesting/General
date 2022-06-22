const os = require('os');
// console.log(os.arch());
// console.log(os.platform());

// console.log(os.cpus());
// console.log(os.cpus().length);
// console.log(os.constants);
const SIZE = 1024;
let kb = (bytes) => { return bytes/SIZE};
let mb = (bytes) => { return kb(bytes)/SIZE};
let gb = (bytes) => { return mb(bytes)/SIZE};
// console.log(gb(os.freemem()));
// console.log(gb(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());
console.log(os.networkInterfaces());

