// module.exports = (cart, cb) => {
//   setTimeout(() => {
//     cb(true);
//   }, 500);
// };

module.exports = (cart) => {
  let p = new Promise((res, rej) => {
    // rej();
    res(600);
  });
  return p;
};
