// часть 1

/*
1. Найти параграф и получить его текстовое содержимое (только текст!)

2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

*/

// 1.

let parag = document.querySelector('p');
//console.log(parag.textContent);

// -------------------------------------------------------

// 2.
  function nodeInfo (nodeDom) {
    let typeNode = nodeDom.nodeType;
    let nameNode = nodeDom.nodeName;
    let lengthNodeChild = nodeDom.childNodes.length;
    console.log(typeNode, nameNode, lengthNodeChild);
  }

//nodeInfo(parag);
// -------------------------------------------------------

// 3.
  let listUl = document.querySelector('ul');
  function getTextFromUl () {    
    let arrChildEl = [...listUl.children];
    let arrStr = [];
    arrChildEl.forEach(el => {      
      arrStr.push(el.textContent);
    });
    return arrStr;
  }
// let childElContent = getTextFromUl(listUl);   

// -------------------------------------------------------

// 4.
  function getMultiInsert () {  
    let childP = [...parag.childNodes];
    childP.forEach(el => { 
      if (el.nodeType === 3) el.textContent = '-text-';
    });
  }
 //getMultiInsert();
// -------------------------------------------------------

// ---------------------------------------------------------------------------------------------

// часть 2

/* 
1. Найти в коде список ul и добавить класс “list”
2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
3. На li через один (начиная с самого первого) установить класс “item”
4. На все ссылки в примере установить класс “custom-link”

*/

// 1.
  let ulList = document.querySelector('ul');
  ulList.classList.add('list');
  ulList.firstElementChild.id = 'link';
  let listsLi = [];

  function getClassLi () {
    listsLi = [...ulList.children];
    listsLi.forEach((el, i) => {
      i % 2 ? el.classList.add('item') : false;  
    });
  }
// getClassLi();

// -------------------------------------------------------

// 4. 
  let links = ulList.querySelectorAll('a');
  function getLinksClass () {
    links.forEach(el => el.classList.add('custom-link'));
  }
// getLinksClass();
// -------------------------------------------------------

// -------------------------------------------------------------------------------------

// Часть 3

/* 
1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

*/

// 1.
  function getCreateLi () {
    for (let i = ulList.children.length + 1; i < 10; i++) {
      let listLi = document.createElement('li');
      listLi.classList.add('new-item');
      listLi.textContent = `item${i}`;
      ulList.appendChild(listLi);    
    }
  }

// getCreateLi();
// -------------------------------------------

// 2.
  links.forEach(el => {    
    el.insertAdjacentHTML('beforebegin', '<strong>');
  });
// ----------------------------------------------------------

// 3.
  function createImg () {
    let img = document.createElement('img');
    img.src = 'https://wallpapercave.com/wp/wp2714960.jpg';
    img.alt = 'Smile';
    img.style.width = '100px';
    img.style.height = '100px';
    return img;
  }

  let bodys = document.body;
  bodys.insertAdjacentElement('afterbegin', createImg());
// ------------------------------------------------------------

// 4. 
  let mark = document.querySelector('mark');
  mark.textContent += ' green';
  mark.classList.add('green');
// --------------------------------------------------------------