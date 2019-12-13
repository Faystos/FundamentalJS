/*
1. Получить первую и последнюю буквы строки
2. Сделать первую и последнюю буквы в верхнем регистре
3. Найти положение слова ‘string’ в строке
4. Найти положение второго пробела (“вручную” ничего не считать)
5. Получить строку с 5-го символа длиной 4 буквы
6. Получить строку с 5-го по 9-й символы
7. Получить новую строку из исходной путем удаления последних 6-и символов
(то есть исходная строка без последних 6и символов)
8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”

*/


let string = 'some test string';

let stringTwoSimbol = `${string[0]} ${string[string.length - 1]}`;

let stringUpperCase = stringTwoSimbol.toUpperCase();

let strString = string.indexOf('string');

let strLastGap = string.lastIndexOf(' ');

let str5Simbol4Letter = string.substr(5, 4);

let str5Simbol9 = string.slice(5, 10);

let stringNewStr = string.slice(0, -6);

let a = 20;
let b = 16;
string = a.toString() + b;

