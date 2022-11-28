// function propagateItemsByPositionIndex(arr) {
//   // throw new Error('Not implemented');
//   let newArr = [];
//   arr.map((elem, index) => {
//     for(let i = 0; i < index + 1; i++) {
//       newArr.push(elem);
//     }
//   })
//   return newArr;
// }

// let arara = [ 1,2,3,4,5,6,7,8,9,10 ];
// // console.log(propagateItemsByPositionIndex(arara))

// function get3TopItems(arr) {
//   // throw new Error('Not implemented');
//   return arr.reverse().slice(0, 3);
// }
// console.log(get3TopItems(arara));

// function getIdentityMatrix(n) {
//   // throw new Error('Not implemented');
//   let arr = new Array(n);
//   arr.fill( new Array(n).fill(0))
//   return arr.map((elem, index) => elem.map((elem2, index2)  => index === index2 ? 1 : 0));
// }

function distinct(arr) {
  // throw new Error('Not implemented');
  let newSet = new Set(arr);
  return  Array.from(newSet);
}
const arr  = [ 'a', 'a', 'a', 'a' ];
console.log(distinct(arr));
