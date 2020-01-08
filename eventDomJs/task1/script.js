
// 1.
  let btnMessage = document.querySelector('#btn-msg');
  btnMessage.addEventListener('click', function () {
    alert(this.dataset.text);
  });
// ---------------------------------------------------------------------

// 2.
  btnMessage.addEventListener('mouseover', function () {
    this.style.color = '#FF0000';
  });

  btnMessage.addEventListener('mouseout', function () {
    this.style.color = '#000000';
  });
// ----------------------------------------------------------------------

// 3.
  document.querySelector('.contener').addEventListener('click', evt => {
    document.querySelector('#tag').textContent = `Tag: ${evt.target.tagName}`;    
  });
// ----------------------------------------------------------------------

// 4.
document.querySelector('#btn-generate').addEventListener('click', () => {     
  let ulChilds = [...document.querySelector('ul').children];
  let liList = document.createElement('li');
  liList.textContent = `Item ${ulChilds.length + 1}`;
  document.querySelector('ul').appendChild(liList);  
});
// ----------------------------------------------------------------------