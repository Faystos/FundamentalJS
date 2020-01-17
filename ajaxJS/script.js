(function () {
// элементы Dom.
  const urlGet = 'https://jsonplaceholder.typicode.com/users';
  const urlPost = 'https://jsonplaceholder.typicode.com/posts';
  let btnGet = document.querySelector('.btn_get');
  let blockUserName = document.querySelector('.name_users');
  let nameList = document.querySelector('.name_list');
  let blockAllInfoUsers = document.querySelector('.all_info_user');
  let requestHttp = myRequest(); 

// Функция Requests запроса.  
  function myRequest () {
    return {
      getRequest:  function getRequest (method, url, onSuccess, onError) {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open(method, url);      
          xhr.addEventListener('load', () => {        
            if (Math.floor(xhr.status / 100) !== 2) {
              onError(`Возникла ошибка: ${xhr.status}`, xhr);
              return;
            }
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
      },
      postRequest: function postRequest (method, url, onSuccess, onError, body) {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open(method, url);    
          xhr.addEventListener('load', () => {        
            if (Math.floor(xhr.status / 100) !== 2) {
              onError(`Возникла ошибка: ${xhr.status}`, xhr);
              return;
            }
            const response = JSON.parse(xhr.responseText);
            onSuccess(response);      
          });
    
          xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    
          xhr.addEventListener('error', () => {
            onError(`Возникла ошибка: ${xhr.status}`, xhr);
          });    
        
          xhr.send(JSON.stringify(body));
        } catch (error) {
          onError(error);
        }    
      }
    };
  }

// функция обработки блока со списком имен.  
  function inputNameUser (response) {
    const fragment = document.createDocumentFragment();      
      
    response.forEach(user => {
      const listLi = document.createElement('li');
      listLi.classList.add('list_user');
      listLi.textContent = `${user.id}.` || '';      
      const userNameP = document.createElement('p');
      userNameP.classList.add('parag_user_name');
      userNameP.textContent = `${user.name}`;
      listLi.appendChild(userNameP);      
      fragment.appendChild(listLi);           
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
   nameList.prepend(allUserNames);   
   inputInfoUsers(arrUsers); 
  }

// функция при возникновении ошибки при запросе.
  function onError (error) {
    alert(error);
  }
  
  btnGet.addEventListener('click', () => {
    requestHttp.getRequest('GET', urlGet,onSuccess, onError);
  });

// обработка формы.
  let userEmail = document.querySelector('#exampleInputEmail1');
  let userName = document.querySelector('#formGroupExampleInput1');
  let userLogin = document.querySelector('#formGroupExampleInput2');
  let userPhone = document.querySelector('#example-tel-input');
  let btnSubm = document.querySelector('.btn_submit');

  function createBodyForm () {
    let userEmailValue = userEmail.value || 'Нет информации.';
    let userNameValue = userName.value || 'Нет информации.';
    let userLoginValue = userLogin.value || 'Нет информации.';
    let userPhoneValue = userPhone.value || 'Нет информации.';
    const bodyForm = {
      email: userEmailValue,
      name: userNameValue,
      username: userLoginValue,
      phone: userPhoneValue,
      address: {
        city: 'Нет информации.',
        street: 'Нет информации.'
      }
    };
    return bodyForm;
  }

// действия при успехе пост запроса.
  function postOnSuccess (response) {    
    const postPesponse = [];
    postPesponse.push(response);
    let oneNameUser = inputNameUser(postPesponse);    
    nameList.append(oneNameUser);    
    inputInfoUsers(postPesponse);    
  }

// действия при возникновении ошибки пост запроса.
  function postOnError (error){
    alert(error);
  }

// обработка действия кнопки отправки формы.  
  btnSubm.addEventListener('click', evt => {
    evt.preventDefault();
    let bodyForm = createBodyForm();    
    requestHttp.postRequest('POST', urlPost, postOnSuccess, postOnError, bodyForm);
  });
})();
