//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який
//містить назву продукту, кількість і куплений він чи ні, ціну за одиницю
// товару, сума. Написати кілька функцій для роботи з таким масивом:
//Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
//що ще не придбані, а потім - ті, що вже придбали.
//Покупка продукту. Функція приймає назву продукту і відзначає його
// як придбаний.
const myList = [
  { name: "chicken", quantity: 2, purchased: true, price: 110.5 },
  { name: "lemon", quantity: 0.5, purchased: true, price: 67.9 },
  { name: "apple", quantity: 6, purchased: false, price: 12 },
  { name: "rice", quantity: 1, purchased: true, price: 70 },
  { name: "cola", quantity: 3, purchased: false, price: 55 },
  { name: "water", quantity: 10, purchased: false, price: 17.5 },
  { name: "bread", quantity: 1, purchased: false, price: 25 },
  { name: "cake", quantity: 1, purchased: false, price: 155 },
];
const listWithTotal = myList.map((listItem) => ({
  ...listItem,
  total: listItem.quantity * listItem.price,
}));
console.log(listWithTotal);

function sortMyList(arr) {
  return [...arr].sort((a, b) => a.purchased - b.purchased);
}

function markAsPurchased(arr, product) {
  const neededIndex = arr.findIndex((arrItem) => arrItem.name == product);
  if (neededIndex === -1) {
    return "No such product";
  } else {
    arr[neededIndex].purchased = true;
    return arr;
  }
}
console.log(markAsPurchased(myList, "bread"));
console.log(sortMyList(myList));

//Видалення продукту зі списку (видалення повинно проводитися шляхом
//створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removeProduct(arr, prodToRemove) {
  const reserveArr = [...arr];
  let arrWithoutProduct = [];
  if (reserveArr.findIndex((item) => item.name === prodToRemove) === -1) {
    return "The product is not found in the list";
  } else {
    arrWithoutProduct = reserveArr
      .filter((item) => item.name !== prodToRemove)
      .reduce((total, amount) => {
        total.push(amount);
        return total;
      }, []);
  }

  return arrWithoutProduct;
}
console.log(removeProduct(myList, "cola"));

//Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку
//продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому
//також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2,
//то сума буде 24.
function addProduct(arr, productToAdd) {
  let reserveArr = [...arr];
  let reserveArrAdded = [];
  if (reserveArr.findIndex((item) => item.name === productToAdd.name) === -1) {
    reserveArr.push(productToAdd);
    return reserveArr;
  } else {
    const idx = reserveArr.findIndex((item) => item.name === productToAdd.name);
    const newQuantity = reserveArr[idx].quantity + productToAdd.quantity;
    newPrice = reserveArr[idx].price + productToAdd.price;
    reserveArrAdded = reserveArr
      .slice(0, idx)
      .concat(reserveArr.slice(idx + 1, reserveArr.length))
      .concat(
        reserveArr
          .filter((item) => item.name === productToAdd.name)
          .map((item) => {
            if (item.name == productToAdd.name)
              return { ...item, quantity: newQuantity, price: newPrice };
          })
      );

    return reserveArrAdded;
  }
}
console.log(
  addProduct(myList, {
    name: "cake",
    quantity: 1,
    purchased: false,
    price: 155,
  })
);

//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function totalSum(arr) {
  const reserveArr = [...arr];
  return reserveArr.reduce(
    (total, amount) => total + amount.quantity * amount.price,
    0
  );
}
console.log(totalSum(myList));

//Підрахунок суми всіх (не) придбаних продуктів.
function ifPurchasedSum(arr, ifPurchased = true) {
  const reserveArr = [...arr];
  if (ifPurchased) {
    return totalSum(reserveArr.filter((item) => item.purchased == true));
  } else {
    return totalSum(reserveArr.filter((item) => item.purchased == false));
  }
}
console.log(ifPurchasedSum(myList, false));
//Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого,
//в залежності від параметра функції, який вона приймає)
function sortArray(arr, field, ascending = true) {
  const reserveArr = [...arr];
  if (field == "name") {
    if (ascending) {
      reserveArr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else {
      reserveArr.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }
  } else if (field == "price") {
    if (ascending) {
      reserveArr.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    } else {
      reserveArr.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    }
  }
  return reserveArr;
}
console.log(sortArray(myList, "price", false));
