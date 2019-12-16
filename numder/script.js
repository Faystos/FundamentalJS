 /*

1. Получить число pi из Math и округлить его до 2-х знаков после точки
2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

3. Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число. 

4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
5. Получить число из строки ‘100$’

 */


let pi = Math.PI.toFixed(2);

let numArry = [15, 11, 16, 12, 51, 12, 13, 51];
let numMin = Math.min(...numArry);
let numMax = Math.max(...numArry);

let numRandom = Math.random().toFixed(2);

let rangeRandomNuber = Math.floor(Math.random() * (20 - 0) + 0);

let sumNumber = 0.6 + 0.7;
sumNumber.toFixed(1);

let str = parseInt('100$');