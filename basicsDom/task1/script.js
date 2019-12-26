// получить в консоль:  head
  let infoHead = document.head;
  console.log(infoHead);

// получить в консоль:  body
  let infoBody = document.body;
  console.log(infoBody);

// получить в консоль: все дочерние элементы body
  let childrenBodyAll = infoBody.children;
  console.log(childrenBodyAll);

// получить в консоль: первый div и все его дочерние узлы
  let firstDiv = infoBody.firstElementChild;
  let childrenFirstDiv = firstDiv.children;
  console.log(firstDiv); 
  console.log(childrenFirstDiv);


// получить в консоль: все дочерние узлы, кроме первого и последнего
 for (let i = 1; i < childrenBodyAll.length - 1; i++) {
  console.log(childrenBodyAll[i]);
 }