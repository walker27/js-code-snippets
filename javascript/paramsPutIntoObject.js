/**
 * put function params in a Object
 * @param  {Array} paramsNameArr param's Name Array
 * @param  {Array} valueArr      param's Value Array
 */
function paramsPutInfoObject(paramsNameArr,valueArr){
  for(var i = 0,len = paramsNameArr.length; i<len; i++){
    this[paramsNameArr[i]] = valueArr[i];
  }
}

// for example
// function AFunction(a,b,c,d,e,f,g){
  // var obj = {};
  // paramsPutInfoObject.call(obj,["a","b","c","d","e","f","g"],arguments);
  // console.log(obj);
// }