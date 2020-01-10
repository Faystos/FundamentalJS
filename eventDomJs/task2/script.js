let menu = document.querySelector('.menu');
let check = '';



menu.addEventListener('click', evt => { 

  if(!evt.target.closest('.dropdown-item')) {
    return;
  }
   menu.querySelectorAll('.dropdown-menu').forEach(el => el.classList.add('d-none'));

   if(check !== evt.target.closest('.dropdown-item')){
    check = evt.target.closest('.dropdown-item');
    check.querySelector('.dropdown-menu').classList.remove('d-none');
  } else {
    check = '';
  }
})
