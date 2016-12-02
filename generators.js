'use strict'
function* generator(i){
  yield ++i;
  yield ++i;
  let externalInput = 2*(yield i++);
  console.log(externalInput);
  yield externalInput+i;
  return;
}

let gen=generator(10);//passing initial value of i while instantiating
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next(20));

// //a function which runs nodejs async function as generator
// function run(gen) {
//   var iter = gen(function (err, data) {
//     if (err) { iter.throw(err); }
//     return iter.next(data);
//   });
//   iter.next();
// }
// let fs=require('fs');
// let path =__dirname+"/package.json";
//
// run(function* (resume) {
//   var contents = yield fs.readFile(path, resume);
//   console.log(contents.toString().toUpperCase());
// });
