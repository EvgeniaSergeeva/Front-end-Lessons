//Створити HTML-сторінку для відображення/редагування тексту. При відкритті
//сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E,
//замість div з'являється textarea з тим же текстом, який тепер можна редагувати.
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим
//текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
const textContainer = document.getElementById("text-container");
const redactArea = document.getElementById("redact-area");

redactArea.style.display = "none";

const redactText = (e) => {
  if (e.ctrlKey && e.keyCode === 69) {
    e.preventDefault();
    textContainer.style.display = "none";
    redactArea.style.display = "block";
    redactArea.focus();
    redactArea.innerHTML = textContainer.innerHTML;
  } else if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
    textContainer.style.display = "block";
    redactArea.style.display = "none";
    textContainer.innerHTML = redactArea.value;
  }
};
addEventListener("keydown", redactText);

//Створити HTML-сторінку з великою таблицею. При кліку на заголовок
//стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові
//значення повинні сортуватися як числа, а не як рядки.

const name = document.getElementById("name");
name.style.cursor = "pointer";
const age = document.getElementById("age");
age.style.cursor = "pointer";
const date = document.getElementById("date");
date.style.cursor = "pointer";

const rows = table.querySelectorAll("tr");
let sortedRows = Array.from(table.rows);
sortedRows = sortedRows.slice(1);

let sortByNameFlag = 0;
let sortByAgeFlag = 0;
let sortByDateFlag = 0;
const sortByName = () => {
  if (sortByNameFlag === 0) {
    sortedRows.sort((rowA, rowB) =>
      rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
    );
    sortByNameFlag = 1;
  } else {
    sortedRows.sort((rowA, rowB) =>
      rowA.cells[0].innerHTML < rowB.cells[0].innerHTML ? 1 : -1
    );
    sortByNameFlag = 0;
  }
  table.tBodies[0].append(...sortedRows);
};

const sortByAge = () => {
  if (sortByAgeFlag === 0) {
    sortedRows.sort((a, b) =>
      a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1
    );
    sortByAgeFlag = 1;
  } else {
    sortedRows.sort((a, b) =>
      a.cells[1].innerHTML < b.cells[1].innerHTML ? 1 : -1
    );
    sortByAgeFlag = 0;
  }

  table.tBodies[0].append(...sortedRows);
};

const sortByDate = () => {
  if (sortByDateFlag === 0) {
    sortedRows.sort((a, b) =>
      a.cells[2].innerHTML > b.cells[2].innerHTML ? 1 : -1
    );
    sortByDateFlag = 1;
  } else {
    sortedRows.sort((a, b) =>
      a.cells[2].innerHTML < b.cells[2].innerHTML ? 1 : -1
    );
    sortByDateFlag = 0;
  }

  table.tBodies[0].append(...sortedRows);
};

name.addEventListener("click", sortByName);
age.addEventListener("click", sortByAge);
date.addEventListener("click", sortByDate);

//Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість
//змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку
//і тягнути її далі.

const divToChange = document.getElementById("resizable");
divToChange.style.border = "2px solid black";
divToChange.style.width = "300px";
divToChange.style.height = "200px";
divToChange.style.padding = "30px 10px";
let resX;
let resY;
let posX;
let posY;
const changeSize = () => {
  let width = divToChange.offsetWidth;
  let height = divToChange.offsetHeight;

  const fixPosition = () => {
    posX = event.pageX;
    posY = event.pageY;
  };

  const changePosition = () => {
    resX = width + event.pageX - posX;
    resY = height + event.pageY - posY;
    divToChange.style.width = resX + "px";
    divToChange.style.height = resY + "px";
  };
  const savePosition = () => {
    width = divToChange.style.width;
    height = divToChange.style.height;
  };
  document.addEventListener("mousedown", fixPosition);
  document.addEventListener("mousemove", changePosition);
  document.addEventListener("mouseup", savePosition);
};
window.addEventListener("load", changeSize);
