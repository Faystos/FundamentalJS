(function () {

  // элементы Dom.
  const urlGet = 'https://jsonplaceholder.typicode.com/users';
  let btnGet = document.querySelector('.btn_get');
  let blockUserName = document.querySelector('.name_sers');
  let blockAllInfoUsers = document.querySelector('.all_info_user');

  // Функция запроса.  
  function getRequest (method, url, onSuccess, onError) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
    
      xhr.addEventListener('load', () => {        
        if (Math.floor(xhr.status / 100) !== 2) onError(`Возникла ошибка: ${xhr.status}`, xhr);
        const response = JSON.parse(xhr.responseText);
        onSuccess(response);      
      });

      xhr.addEventListener('error', () => {
        onError(`Возникла ошибка: ${xhr.status}`, xhr);
      });    
    
      xhr.send();
    } catch (error) {
      onError(error);
    }
    
  }

  // функция обработки блока со списком имен.  
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
  
  // функция обработки блока и информацией пользователей.
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
  
  //функция удаление необходимого блока.
  function removeBlock (element) {
    if (document.querySelector(element)) {
      document.querySelector(element).remove();
    } else { 
      return;
    }
  }  
   
  // функция вывода информации о пользователях.
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
  
  // функция выполнения при успешном запросе.
  function onSuccess (response) { 
   const arrUsers = [...response]; 
   const allUserNames = inputNameUser(arrUsers);
   blockUserName.appendChild(allUserNames);
   inputInfoUsers(arrUsers); 
  }

  // функция при возникновении ошибки при запросе.
  function onError (error) {
    alert(error);
  }
  
  btnGet.addEventListener('click', () => {
    getRequest('GET', urlGet,onSuccess, onError);
  });
})();
