// Часть 1

/*
1.1 На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

1.2 Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

1.3 Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

1.4 Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
*/

//1.1
  const arr1 = [1,2,3,5,8,9,10];

  let arr1$2 = arr1.map(el => ({
    digit: el,
    odd: el % 2 === 0
  }));  
//-------------------------------------------------------------------------------------

//1.2
  const arr2 = [12, 4, 50, 1, 0, 18, 40];
  let arr2$2 = arr2.some(el => el === 0);  
//-------------------------------------------------------------------------------------

//1.3
 const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
 let arr3$3 = arr3.some(el => el.length > 3);
//-------------------------------------------------------------------------------------

//1.4
  const arrObj4 = [
    {
      char:"a",
      index:12
    },
    {
      char:"w",
      index:8
    },
    {
      char:"Y",
      index:10
    },
    {
      char:"p",
      index:3
    }, 
    {
      char:"p",
      index:2
    },       
    {
      char:"N",
      index:6
    },
    {
      char:" ",
      index:5
    },
    {
      char:"y",
      index:4
    },
    {
      char:"r",
      index:13
    },
    {
      char:"H",
      index:0
    },      
    {
      char:"e",
      index:11
    },
    {
      char:"a",
      index:1
    },
    {
      char:" ",
      index:9
    },
    {
      char:"!",
      index:14
    },
    {
      char:"e",
      index:7
    }
  ];

  function assemblyStr (arr) {
    let newArr = arr.slice();
    newArr.sort((prevI, nextI) => prevI.index - nextI.index);
    let newStr4 = newArr.reduce((acc, el) => {
      acc += el.char;
      return acc;
    }, '');
    return newStr4;
  }

  let newStr4 = assemblyStr(arrObj4);  
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//Часть 2

/*
2.1 Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

2.2 Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).

2.3 Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
*/

//2.1
const arr2_1 = [[14, 45], [1],['a', 'c', 'd']];
let newArr2_1 = arr2_1.slice();
newArr2_1.sort((prev, next) => prev.length - next.length);  
//------------------------------------------------------------------------------------------------------

// 2.2
  const arrObjCpu2_1 = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

let arrSortCpu = arrObjCpu2_1.slice();
arrSortCpu.sort((prevInfo, nextInfo) => prevInfo.info.cores - nextInfo.info.cores);
// ----------------------------------------------------------------------------------------------------

//2.3 
let products = [
  {title: 'prod1', price: 5.2},
  {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15},
  {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9},
  {title: 'prod6', price: 8},
  {title: 'prod7', price: 19},
  {title: 'prod8', price: 63}
];


function filterCollection (arr, minPrice, maxPrice) {
  let arrPriceProduct = arr.slice();
  arrPriceProduct = arrPriceProduct.filter(el => el.price >= minPrice && el.price <= maxPrice);
  arrPriceProduct = arrPriceProduct.sort((prevPrice, nextPrice) => prevPrice.price - nextPrice.price);
  return arrPriceProduct;
}
let newArr2_3 = filterCollection(products, 15, 30);
// ----------------------------------------------------------------------------------------------------