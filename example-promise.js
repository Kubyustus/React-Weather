// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise successs', temp);
// }, function (err) {
//   console.log('Promise error', err);
// })

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('both paramters need to be numbers');
      }
    });
}

addPromise(3,'ok').then(function (temp) {
  console.log('promise successs: ', temp);
}, function (err) {
  console.log('Promise error: ', err);
})
