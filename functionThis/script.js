/*
'This' Задачи часть 1.

1. Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};

2. Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;

4. Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
*/
// 1
const rectangle = {
  width: '5см',
  height: '10см',
  getSquare: function () {
    let square = parseInt(this.width) * parseInt(this.height);
    return `Площадь прямоугольника соствляет ${square} см в квадрате.`;
  }
};  
// -------------------------------------------------------------

// 2
  const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
     return this.price;
    },
    getPriceWithDiscount: function () {
      let discountPrice = this.getPrice() - ((this.getPrice() / 100) * parseInt(this.discount));
      return discountPrice;
    }
  }  
// ------------------------------------------------------------

// 3
  const rectangle2 = {
    height: 15,
    getIncreaseHeight: function () {
    this.height += 1;
    }
  }
// -----------------------------------------------------------

// 4 
  const numerator = {
    value: 1,
    double: function () {
      this.value *= 2;
      return this;
    },
    plusOne: function () {
      this.value++;
      return this;
    },
    minusOne: function () {
      this.value--;
      return this;
    },
  }
// -----------------------------------------------------------

/*
  'This' Задачи часть 1.

  1. Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости
всех товаров (цена * количество продуктов).

  2. Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но
нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.

  3. Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes.

4.  
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.

*/

// 1.2
  const retailPrice = {
    price: 50,
    quantity: 5,
    getAllPrice: function () {
      return this.price * this.quantity;      
    }
  } 
// -------------------------------------------------------------

// 2.2
const retailPrice2 = {
  price: 25,
  quantity: 2,
}
retailPrice2.getAllPrice2 = retailPrice.getAllPrice.bind(retailPrice2);


// --------------------------------------------------------------

// 3.3
  let sizes = {
    width: 5,
    height: 10
  },
  getSquare = function () {
    return this.width * this.height;
  };
  getSquare.call(sizes);
// -------------------------------------------------------------

// 4.4
  let element = {
    height: 25,
    getHeight: function () {
      return this.height;
    }
  };

  let getElementHeight = function (height) {
    return this.height;
  }
  getElementHeight.call(element);
// ------------------------------------------------------------