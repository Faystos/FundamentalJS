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

const headList = {
  index:'#',
  name: 'name', 
  email: 'email',
  balance: 'balance'
};

function generateThead (headlineArr) {
  let thead = document.createElement('thead');  
  let headTr = generateTd(headlineArr, 'th'); 
  thead.appendChild(headTr);
  return thead; 
}

function generateTd (headlineArr, tagMane = 'td') {
  let tr = document.createElement('tr');  
  Object.values(headlineArr).forEach(el => {
    let td = document.createElement(tagMane);
    td.textContent = el;    
    tr.appendChild(td);
  });  
  return tr;  
}

function generateTbody (headlineArr, bobyContent) {
  let tbody = document.createElement('tbody');
  bobyContent.forEach((el, i) => {
    el.index = i + 1;
    let itemUsers = generateItemsBody(headlineArr, el); 
    let  trBody = generateTd(itemUsers);
    tbody.appendChild(trBody);
  });  
  return tbody;
}

function generateItemsBody (headlineArr, bobyContent) {
  let itemsArr = Object.keys(headlineArr).reduce((acc, el) => {
    if (el in bobyContent) {
      acc[el] = bobyContent[el];
    }
     return acc;
  }, {});
  return itemsArr;
}

function getTotalBalans (headlineArr, bobyContents) {
  let total = bobyContents.reduce((acc, item) => acc + parseFloat(item.balance), 0);
  let totalTr = document.createElement('tr');
  let totalTd = document.createElement('td');
  let columnCount = Object.keys(headlineArr).length;

  totalTd.insertAdjacentHTML('beforeend', `Общий баланс: ${total}`);
  totalTd.setAttribute('colspan', columnCount);
  totalTd.setAttribute('align', 'right');

  totalTr.appendChild(totalTd);
  return totalTr;
}

function getCreatTable (headlineArr, bobyContents) { 
  let contener = document.querySelector('.conteiner');
  contener.style.width = '700px';
  contener.style.margin = '0 auto';  
  let table = document.createElement('table');

  let thead = generateThead(headlineArr);  
  let tBody = generateTbody(headlineArr, bobyContents);
  let total = getTotalBalans(headlineArr, bobyContents);

  contener.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tBody);
  table.appendChild(total);
  contener.appendChild(table); 
  
  function getStyleTable () {
    let table = document.querySelector('table');
    table.style. borderCollapse = 'collapse';
    table.style.width = '100%';
    let thTHead = document.querySelectorAll('th');
    thTHead.forEach(el => {  
      el.style.borderBottom = '2px solid rgba(69, 66, 65, .3)';
      el.style.textAlign = 'left';
      el.style.padding = '5px';  
    }); 
    let tdTHead = document.querySelectorAll('td').forEach(el => {   
      el.style.borderTop = '1px solid rgba(69, 66, 65, .3)';
      el.style.paddingTop = '25px';
      el.style.paddingBottom = '25px';      
    }); 
  }
  getStyleTable();
}

getCreatTable(headList, users);


document.querySelector('.btn_sort').addEventListener('click', function () { 
 let items = []
  users.forEach((el, i) => {
    let itemUsers = generateItemsBody(headList, el);
    items.push(itemUsers);
    
  });
  items.sort((a, b) => {
    return b.balance - a.balance;
  });

  console.log(items);
  
  

});