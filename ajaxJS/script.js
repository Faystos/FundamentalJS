(function () {
  const urlGet = 'https://jsonplaceholder.typicode.com/users';
  let btnGet = document.querySelector('.btn_get');
  let blockUserName = document.querySelector('.name_sers');
  let blockAllInfoUsers = document.querySelector('.all_info_user');
  
  function getRequst (onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', urlGet);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      onSuccess(response);
    });
    xhr.send();
  }
  
  function inputNameUser (response) {
    const fragment = document.createDocumentFragment();
    const list = document.createElement('ul');
    response.forEach(user => {
      const listLi = document.createElement('li');
      listLi.classList.add('list_user');
      listLi.textContent = `${user.id}.`;
      
      const userNameP = document.createElement('p');
      userNameP.classList.add('parag_user_name');
      userNameP.textContent = `${user.name}`;

      listLi.appendChild(userNameP);
      list.appendChild(listLi);

      fragment.appendChild(list);
           
    });
    return fragment; 
  }  
  
  function allInfoUser (user) {
    const fragment = document.createDocumentFragment();
    const blockInfoUser = document.createElement('div');
    blockInfoUser.classList.add('block_info');
  
    const titleUserName = document.createElement('h4');
    titleUserName.textContent = `Пользователь: ${user.name}`;
  
    const titleUserAddress = document.createElement('h5');
    titleUserAddress.textContent = `Адрес:`;
  
    let userAddressCity = document.createElement('p');
    userAddressCity.textContent = `Город: ${user.address.city}`;
  
    let userAddressStreet = document.createElement('p');
    userAddressStreet.textContent = `Улица: ${user.address.street}`;
  
    let userLogin = document.createElement('p');
    userLogin.textContent = `Логин: ${user.username}`;
  
    let userEmail = document.createElement('p');
    userEmail.textContent = `Email: ${user.email}`;
  
    let userPhone = document.createElement('p');
    userPhone.textContent = `Телефон: ${user.phone}`;
    
    fragment.appendChild(titleUserName);
    fragment.appendChild(userLogin);  
    fragment.appendChild(userEmail);
    fragment.appendChild(userPhone);
    fragment.appendChild(titleUserAddress);
    fragment.appendChild(userAddressCity);
    fragment.appendChild(userAddressStreet);
    blockInfoUser.appendChild(fragment);
    blockAllInfoUsers.appendChild(blockInfoUser);
  }
  
  function removeBlock (element) {
    if (document.querySelector(element)) {
      document.querySelector(element).remove();
    } else { 
      return;
    }
  }  
    
  function inputInfoUsers (response) {
    blockUserName.addEventListener('click', evt => {
    if (!evt.target.classList.contains('parag_user_name')) return;
    
    
    response.forEach(user => {
      if (evt.target.textContent === user.name) {
        removeBlock('.block_info');
        allInfoUser(user);
      }
    });
    
    });
  }  
  
  function onSuccess (response) { 
   const arrUsers = [...response]; 
   const allUserNames = inputNameUser(arrUsers);
   blockUserName.appendChild(allUserNames);
   inputInfoUsers(arrUsers); 
  }
  
  btnGet.addEventListener('click', () => {
    getRequst(onSuccess);
  });
})();
