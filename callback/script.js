/*
 1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки.

2.Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
 
Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
*/

// 1
  const arr1 = ['my', 'name', 'is', 'Trinity'];
  const arr2 = [10, 20, 30];
  const arr3 = [
    {
      age: 45,
      name: 'Jhon'
    },
    {
      age: 20,
      name: 'Aaron'
    }
  ];
  const arr4 = ['abc', '123']

  function handlerArrFunction (arr, foo) {
    let newArr = '';
    for (let i = 0; i < arr.length; i++) {
      newArr += (foo(arr[i]));
    }
    return `New value: ${newArr}`;
  }

  function arrJoinStr (el) { 
    el = el.split(' '); 
    for (let i = 0; i < el.length; i++) {
      let firstLet = el[i][0].toUpperCase();
      let lastOf = el[i].slice(1);  
      el[i] = firstLet + lastOf;        
    }    
    return el.join('');
  }

  function arrMultiplyEl (el) {
      el *= 10;
      return el + ', ';
  }

  function arrObjHadler(el) {
      return `${el.name} is ${el.age}, `;
  }

  function arrReversEl (el) {
    return `${el.split('').reverse().join('')}, `;
  }


  let res1 = handlerArrFunction(arr1, arrJoinStr);
  let res2 = handlerArrFunction(arr2, arrMultiplyEl);
  let res3 = handlerArrFunction(arr3, arrObjHadler);
  let res4 = handlerArrFunction(arr4, arrReversEl);
// ------------------------------------------------------------------------

// 2
  const arr5 = [1, 5, 8, 548, 555];
  function copyEvery (arr, foo) {
    if (!Array.isArray(arr) || typeof foo !== 'function') {    
      return;
    } 
    let check;
    for (let i = 0; i < arr.length; i++) {
      check = foo(arr[i]);
    }    
    return check;  
  }

  function callbackEvery (el, index, arr) {  
    return el > 5;
  }

  let res5 = copyEvery(arr5, callbackEvery);
  console.log(res5);
// ------------------------------------------------------------------------