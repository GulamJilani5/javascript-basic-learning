///////////////////////////////////////
//////////////////////////

// function capitalizedWords(arr){
//     if(arr.length === 0) return arr;
    
//     console.log(arr[0])
//     //return arr.charAt[0].toUpperCase
//   }
  
//   let words = ['i', 'am', 'learning', 'recursion'];
//   console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']



  /////////////////////////////////////
  //////////////////////////

  ////////////////////////////////////////////////
////////////////////////////////
/////////////
/*
function capitalizedWords(arr){
  let result = [];
  if(arr.length === 1) return result.push(arr[0].toUpperCase());
  
   console.log(result)
  // console.log(arr[0].toUpperCase())
  console.log(arr.slice(1))
  result.push(arr.charAt[0].toUpperCase());
  capitalizedWords(arr.slice(1))
 
  return result
}

let words = ['jilani', 'is', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

*/


////////////////////////////////////////////////
////////////////////////// METHOD 2
/////////////
/*
function capitalizedWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizedWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}
let words = ['jilani', 'is', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

*/
