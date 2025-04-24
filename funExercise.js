//  Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// --------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// function findContainItems(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr1[i]);
//       console.log(arr2[j]);
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// bigO(n^2) - Time Complexity

// console.log(findContainItems(array1, array2)); // false
// console.log(findContainItems(array3, array4)); // true

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

// array1 ==> obj {
//  a: true,
//  b: true,
//  c: true,
//  x: true
// }

// array2[index] === obj.properties
function findContainItems2(arr1, arr2) {
  const arrObject = Object.assign(...arr1.map((item) => ({ [item]: true })));
  console.log(arrObject);

  for (let i = 0; i < arr2.length; i++) {
    console.log(arrObject[arr2[i]]);
    if (arrObject[arr2[i]]) {
      return true;
    }
  }
  return false;
}

findContainItems2(array1, array4);
