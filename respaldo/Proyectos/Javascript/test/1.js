/*1. Crear una función que reciba dos parámetros: cantidad y un arreglo de números. 
La función debera retornar un arreglo del tamaño definido en el parámetro cantidad con números aleatorios entre 1 y 100 
que no se repitan y que no existan en el arreglo del segúndo parámetro. 
Agregue las validaciones que considere necesarias a los parámetros de entrada.
*/

function example(number, array) {
  let arreglo = [];
  for (i = 0; i < number; i++) {
    let aleatoreo = Math.floor(Math.random() * (100 - 1) + 1);
    arreglo.push(aleatoreo);
    arreglo.forEach((number) => {
      let elemento = arreglo.filter((num) => number === num);
      if (elemento.length > 1) {
        let index = arreglo.indexOf(elemento[0]);
        arreglo.splice(index, 1);
        array.forEach((element) => {
          nuevoIndex = arreglo.indexOf(element);
          if (nuevoIndex > -1) {
            arreglo.splice(nuevoIndex, 1);
            i = i - 1;
          }
        });
        i = i - 1;
      }
    });
  }
  return arreglo;
}
// console.log(example(100, [15, 12, 5]));
let arr = example(20, [15, 12, 5, 2, 10, 3, 1]);
console.log(arr.sort());
// console.log(arr.sort());
// arr.forEach((element) => {
//   console.log(arr.filter((el) => el === arr[element]));
// });
