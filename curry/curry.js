function curry(f) {
  var temp = null;
  var args = [];
  var len = f.length;
  temp = function() {
    // args.push(arguments[0]);
    // console.log('array:',Array.prototype.slice.call(arguments));
    var args = Array.prototype.slice.call(arguments)
    if (args.length >= len) {
      // console.log('going to execute', args);
      return f.apply(null, args);
    } else {
      return function() {
         
        return temp.apply(null, args.concat(Array.prototype.slice.call(arguments)));
      };
    }
  }
  return temp;
}


// example
// var addCurry=curry(function(a,b){
//   return a+b;
// });
// var add2 = addCurry(2);
// console.log(add2(3));
