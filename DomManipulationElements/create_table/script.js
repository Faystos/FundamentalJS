/*
1. Создайте массив в которому будут находится названия заголовков таблицы.

2. Создайте функцию которая будет на основе этого списка гененрировать тег thead и добавлять в него tr с td

3. Создайте функцию которая будет генерировать tbody с tr для тела таблицы на основе массива пользователей

4. Создайте функцию которая будет вызывать функцию по созданию thead из пункта 2 и функцию из пункта 3, результат вызова этих функций вы будете добавлять в саму таблицу.

Примерно должно выглядеть так

function generateThead(headList) {}
function generateTbody(usersList) {}
function generateTable() {
  const table = document.createElement('table');
  const head = generateThead(headList) ;
  const body = generateTbody(usersList);
  table.appendChild(head);
  table.appendChild(body);
  document.body.appendChild(table)
}
*/

const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

const headList = ['№', 'name', 'email', 'balans'];
let table = document.querySelector('.table');

function generateThead (arr) {
  let theadTable = document.createElement('thead');
  let tableTr = document.createElement('tr');
  for (i = 0; i < headList.length; i++) {
    let tableTd = document.createElement('td');
    tableTd.textContent = arr[i];
    tableTr.appendChild(tableTd);
  }
  theadTable.appendChild(tableTr);
  table.appendChild(theadTable);

}

generateThead(headList);

function generateTbody () {
  for () {}
  arr.forEach(el => {
    
  });
}