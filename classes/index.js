//Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

//поле, що зберігає радіус кола;
//get-властивість, яке повертає радіус кола;
//set-властивість, що встановлює радіус кола;
//get-властивість, яке повертає діаметр кола;
//метод, що обчислює площу кола;
//метод, що обчислює довжину кола.
//Продемонструй роботу властивостей і методів.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  set radius(radius) {
    return (this._radius = radius);
  }
  get radius() {
    return this._radius;
  }
  get diameter() {
    return this._radius * 2;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  circumference() {
    return Math.PI * 2 * this.radius;
  }
}

const myCircle = new Circle(3);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area());
console.log(myCircle.circumference());

//Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
//поле, яке зберігає колір маркера;
//поле, яке зберігає кількість чорнил у маркері (у відсотках);
//метод для вводу (приймає рядок і виводить текст відповідним кольором;
//текст виводиться доти, доки в маркері є чорнило; один не пробільний символ
//— це 0,5 % чорнил у маркері).

class Marker {
  constructor(color, inkPercent) {
    this.color = color;
    this.inkPercent = inkPercent;
  }

  writeStr(str) {
    let arr = str.split("");
    let output = "";
    const wrapper = document.querySelector(".wrapper");
    const textOutput = document.createElement("p");
    textOutput.style.color = this.color;

    if (0.5 > this.inkPercent) {
      textOutput.innerHTML = `The marker is empty`;
      console.log(`The marker is empty`);
      wrapper.appendChild(textOutput);
      return;
    } else {
      while (this.inkPercent > 0) {
        for (let i = 0; i < arr.length; i++) {
          if (this.inkPercent > 0) {
            textOutput.innerHTML += `${arr[i]}`;
            output += arr[i].toString();
            if (arr[i] !== " ") {
              this.inkPercent = this.inkPercent - 0.5;
            }
          }
        }
      }
      wrapper.appendChild(textOutput);
      return output;
    }
  }
}

const redMarker = new Marker("green", 30);
console.log(redMarker.writeStr(`This is the text we want to output`));

//Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей
//клас від простого маркера й додай метод для заправки.
//Продемонструй роботу написаних методів.

class RechargeableMarker extends Marker {
  constructor(color, inkPercent, maxInkPercentage) {
    super(color, inkPercent);
    this.maxInkPercentage = maxInkPercentage;
  }

  refill(max) {
    this.inkPercent = max;
    console.log(`The marker is filled with ${this.inkPercent}% of ink.`);
  }
}

const greenMarker = new RechargeableMarker("yellow", 30, 90);
greenMarker.writeStr("This is another text");
greenMarker.refill(99);

//Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

//Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком
//працівників банку. Масив працівників необхідно передавати через конструктор,
// а отримувати HTML-код за допомогою методу getHtml ().

//Створи об’єкт класу EmpTable і виведи на екран результат роботи методу
//getHtml ().

class Employee {
  constructor(name, age, dept, tel) {
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.tel = tel;
  }
}

const employeeArr1 = [
  { name: "Ivan", age: 34, dept: "accountant", tel: 111111 },
  { name: "Petro", age: 39, dept: "IT", tel: 222222 },
  { name: "Olga", age: 24, dept: "IT", tel: 333333 },
  { name: "Svetlana", age: 48, dept: "accountant", tel: 444444 },
  { name: "Kirill", age: 26, dept: "accountant", tel: 555555 },
  { name: "Vasiliy", age: 21, dept: "accountant", tel: 666666 },
];

class EmpTable {
  constructor(employeeArr) {
    this.employeeArr = employeeArr;
  }
  getHtml() {
    const emloyeeWrapper = document.querySelector(".emloyee");
    const table = document.createElement("table");
    const tr = document.createElement("tr");

    for (let i of Object.keys(this.employeeArr[0])) {
      const th = document.createElement("th");
      th.innerHTML = [i];
      tr.append(th);
    }
    table.append(tr);
    for (let i = 0; i < this.employeeArr.length; i++) {
      const trow = document.createElement("tr");
      for (let j of Object.values(this.employeeArr[i])) {
        const td = document.createElement("td");
        td.innerHTML = j;
        trow.append(td);
      }
      table.append(trow);
    }
    emloyeeWrapper.append(table);
  }
}

const myTable = new EmpTable(employeeArr1);
const myGetHtml = myTable.getHtml;
myGetHtml.call(myTable);
