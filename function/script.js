/*
1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
 Если нет ни одного аргумента, вернуть ноль: multiply() // 0

2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

подсказка: для получения кода используйте специальный метод 

4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3]

7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

*/

// 1
function multiply () {
  let num = 1;
  if(arguments.length === 0) return 0;

  for (let i = 0; i < arguments.length; i++) {
    num *= arguments[i];
  }
  return num;
}
let multiNum = multiply();
// ----------------------------------------------------

// 2
function reverseString (str) {
if (typeof str === 'string') {
  return str.split('').reverse().join('');
}
return console.error('Аргумент не явлеятся строкой');
}
let str = reverseString('test');
// ----------------------------------------------------

// 3
function getCodeStringFromText (str) {
  let splitStr = str.split('');
  let strArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    strCahrCode = splitStr[i].charCodeAt();
    strArr.push(strCahrCode);   
  }
  return strArr.join(' ');  
}
let charCodeStr = getCodeStringFromText('hello');
// ----------------------------------------------------

// 4
function guessNumber (n = 0) {
  let randomNum = Math.floor(Math.random() * (11 - 0) + 0);
  if (n < 0 || n > 10) {
    console.log('Ведите число от 0 до 10');
    return;
  } 
  if (n === randomNum) {
    console.log('Вы выиграли!');
  } else {
    console.log(`Вы не угадали ваше число ${n} а выпало число ${randomNum}`);
  }  
}
// ----------------------------------------------------

// 5
function getArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
let numArr = getArray(10);
// ----------------------------------------------------

// 6
let numArr6 = [1, 2, 3];
function doubleArray (arr) {
  return arr.concat(arr);
}
let newNumArr6 = doubleArray(numArr6);
// ---------------------------------------------------

// 7
  let array7 = ['a', 'b', 'c'];
  function changeCollection (arr) {
    let newArr = [...arr];
    newArr.shift(newArr);  
    return newArr;  
  } 
  let newArr7 = changeCollection(array7);  
// ---------------------------------------------------

// 8
let userArr = [
  {
    name: 'Olga',
    age: '20',
    gender: 'female'
  },
  {
    name: 'Petr',
    age: '25',
    gender: 'male'
  },
  {
    name: 'Oleg',
    age: '35',
    gender: 'male'
  },
  {
    name: 'Marina',
    age: '43',
    gender: 'female'
  }
];

function funcGetUsers (arr, gender, male) {
  let newArrUser = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].gender);
  }
  
}

funcGetUsers(userArr);


//console.log(userArr);
// ---------------------------------------------------