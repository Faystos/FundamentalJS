/*
1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
2. Используя if, записать условие:
 если переменная равна нулю, присвоить ей 1;
 если меньше нуля - строку “less then zero”;
 если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
*/

let a = 'hidden';
if (a === 'hidden') {
  a = 'visible';
} else {
  a = 'hidden';  
}

let b = -1;

if (b === 0){
  b = 1;
} else if (b < 0) {
  b = 'less then zero';
} else if (b > 0) {
  b *= 10;
}

let car = { 
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  // console.log('Need Repair');
  car.needRepair = true;
}

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
};

if (item.discount) {  
  item.priceWithDiscount = Math.round((parseInt(item.price) / 100) * parseInt(item.discount));
  console.log(item);
}











