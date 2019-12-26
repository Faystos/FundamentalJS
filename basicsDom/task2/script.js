// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
function isParent(parent, child) {
   let bul = child.closest(parent.tagName) ?  true : false; 
   return bul;
}
// ------------------------------------------------------------------------------------------------------------------------------------

// 2. Получить список всех ссылок, которые не находятся внутри списка ul:
function checkElemenetLink () {
  let list = document.querySelector('ul');
  let link = document.querySelectorAll('a').forEach(el => {
    if (!isParent(list, el)) console.log(el);
  })
}

 checkElemenetLink();
// --------------------------------------------------------------------------------------------------------------------------------------

// 3. Найти элемент, который находится перед и после списка ul
  function checkElement () {
    let list = document.querySelector('ul');
    let rpevEl = list.previousElementSibling;
    let nextEl = list.nextElementSibling;
    let prevNextElList = console.log(rpevEl, nextEl);
    return prevNextElList;
  }
  checkElement();
// ---------------------------------------------------------------------------------------------------------------------------------------