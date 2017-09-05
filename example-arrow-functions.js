// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

//var returnMe = (name) => name + '!';
//console.log(returnMe('Neriad'));

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1, 3));

var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));
