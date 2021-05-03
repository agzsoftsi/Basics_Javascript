/**
  * They give you an array with numbers, strings, NaN null and you have to sort the numbers
  * and deleting all not numbers
  */
// way1
function processArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.sort());
  return (newArr.sort());
}

processArray([NaN, 'carlos', 5, 1, 'dos', 4, null, undefined, NaN]);

// way2
const processArray2 = (arr2) => {
  const newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === 'number' && !isNaN(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  console.log(newArr.sort());
  return (newArr.sort());
};

processArray2([NaN, 'carlos', 5, 1, 'dos', 4, null, undefined, NaN]);

// way3
const processArray3 = (arr2) => {
  const newArr = [];
  arr2.forEach((element) => {
    if (typeof element === 'number' && !isNaN(element)) {
      newArr.push(element);
    }
  });

  console.log(newArr.sort());
  return (newArr.sort());
};

processArray3([NaN, 'carlos', 5, 1, 'dos', 4, null, undefined, NaN]);

// way4 no works
const processArray4 = (arr2) => {
  const newArr = arr2.map((element) => {
    if (typeof element === 'number' && !isNaN(element)) {
      return element;
    }
  });

  console.log((newArr.filter((element) => typeof element === 'number' && !isNaN(element))).sort());
  return (newArr.sort());
};

processArray4([NaN, 'carlos', 5, 1, 'dos', 4, null, undefined, NaN]);

// way5 filter works solo devuelve 1 valor, el primero que coincida
/* const processArray5 = (arr2) => {
    const newArr = arr2.filter(element =>
      typeof element === 'number' && !isNaN(element)
    );

    console.log(newArr.sort());
    return (newArr.sort());
  };

  processArray5([NaN, 'carlos', 5, 1, 'dos', 4, null, undefined, NaN]);

  // way5 find works
const processArray6 = (arr2) => {
    const newArr = arr2.find(element => typeof element === 'number' && !isNaN(element));

    console.log(newArr.sort());
    return (newArr.sort());
  };

  processArray6([NaN, 'carlos', 5, 1, 'dos', 4, null, undefined, NaN]); */


const dato = function() {
  let con = 0;

  return function incre(){
    return con++;
  }
}

const closure = dato() ;
console.log(closure());
console.log(closure());
console.log(closure());


