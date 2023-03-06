//Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт
//повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin
//або user). У разі невірно переданих даних такого об’єкта — попереджати за
//допомогою alert-у відповідне поле, яке введено некоректно. У класі User
//повинні бути такі компоненти:

//getName
//getRole
//login
//logout
//сhangeName
//changePassword

//У класі Admin повинні бути такі компоненти:

//addUser
//removeUser
//changeUserRole
//getAllUsers
//removeAllUsers
class User {
  constructor({ name: name, role: role, password: password }) {
    if (!name) {
      alert("You should enter a name.");
    }
    if (role !== "admin" && role !== "user") {
      alert("Role must be either 'admin' or 'user'.");
    }
    this.name = name;
    this.role = role;
    this.logStutys = false;
    this.password = password;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login(password) {
    this.password === password
      ? (this.logStutys = true)
      : alert("The password is incorrect.");
    return this.logStutys;
  }

  logout() {
    this.logStutys = false;
    return this.logStutys;
  }

  changeName(newName) {
    this.name = newName;
    return this.name;
  }

  changePassword(newPassword) {
    this.password = newPassword;
    return this.password;
  }
}

const olga = new User({ name: "Olga", role: "user", password: "pass" });
console.log(olga);
console.log(olga.getName());
console.log(olga.getRole());
console.log(olga.login("passss")); //false
console.log(olga.changeName("Nadia"));

class Admin extends User {
  constructor({ name: name, role: role, password: password }) {
    super({ name: name, role: role, password: password });
    if (this.role !== "admin") {
      alert("Role must be 'admin'.");
    }
    this.users = [];
  }

  addUser(user) {
    user instanceof User
      ? this.users.push(user)
      : alert("Impossible to add user.");
    return this.users;
  }

  removeUser(user) {
    const i = this.users.indexOf(user);
    i >= 0 ? this.users.splice(i, 1) : alert("User not found.");
    return this.users;
  }

  changeUserRole(user, newRole) {
    newRole === "admin" || newRole === "user"
      ? (user.role = newRole)
      : alert("Invalid role. Role must be either 'admin' or 'user'.");
    return this.user;
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }
}
const admin = new Admin({ name: "Alex", role: "admin", password: "admin" });
console.log(admin.getName());
const user1 = new User({ name: "Petro", role: "user" });
const user2 = new User({ name: "Maxim", role: "user" });

console.log(admin.addUser(user1));
console.log(admin.addUser(user2));
console.log(admin.removeUser(user2));
console.log(admin.addUser(user2));

admin.changeUserRole(user1, "admin");
console.log(user1.getRole());

console.log(admin.getAllUsers());

const myApi = "5e5fb733d0a4033cb5d22e7a5b8f169c";
const searchCity = document.getElementById("search-city");
const btn = document.getElementById("button-search");
const cityTime = document.querySelector(".time");
//const clearBtn = document.querySelector(".clear");
let cityToFind;
let newClock;
let secondsRes;

class Clock {
  constructor(place) {
    this.place = place;
  }

  displayClock() {
    let newItem = document.createElement("div");
    newItem.classList.add(`${this.place}`);
    newItem.innerHTML = `
        <h2>${this.place}</h2>
         <p class="curr-date${this.place} hide"></p>
         <p class="curr-time${this.place} hide"></p>
       
        <button class="btn currentDate${this.place}" id="">Current Date</button>
        <button class="btn currentTime${this.place}" id="">Current Time</button>
        <button class="btn delClock${this.place}" id="">Delete</button>
        `;
    cityTime.append(newItem);
  }
  getCurrentDate() {
    const infoDate = document.querySelector(`.curr-date${this.place}`);
    const infoTime = document.querySelector(`.curr-time${this.place}`);
    findTime(this.place);
    infoDate.innerHTML = `Current date: ${new Date(
      secondsRes
    ).toLocaleDateString()}`;
    infoDate.style.display = "block";
    infoTime.style.display = "none"
      ? (infoTime.style.display = "none")
      : (infoTime.style.display = "block");
  }

  getCurrentDateTime() {
    const infoDate = document.querySelector(`.curr-date${this.place}`);
    const infoTime = document.querySelector(`.curr-time${this.place}`);
    findTime(this.place);
    infoTime.innerHTML = `Current time: ${new Date(
      secondsRes
    ).toLocaleTimeString()}`;

    console.log(`this place:${this.place}`);
    infoDate.style.display = "none"
      ? (infoDate.style.display = "none")
      : (infoDate.style.display = "block");
    infoTime.style.display = "block";
  }

  deleteClock() {
    const itemToDelete = document.querySelector(`.${this.place}`);
    itemToDelete.innerHTML = "";
  }
}

const focusOnForm = (e) => {
  searchCity.focus();
};
window.addEventListener("load", focusOnForm);

const submitCity = (e) => {
  cityToFind = searchCity.value;
  if (cityToFind.length > 0) {
    cityTime.style.display = "block";
    const newClock = new Clock(cityToFind);
    newClock.displayClock();
  }
};
btn.addEventListener("click", submitCity);

const findTime = (city) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((result) => {
      let date = new Date().getTime();
      let date1 = new Date();
      let dateOffset = date1.getTimezoneOffset();
      console.log(dateOffset);
      secondsRes = date + dateOffset * 60 * 1000 + result.timezone * 1000;
      return secondsRes;
    });
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains(`currentTime${cityToFind}`)) {
    newClock = new Clock(cityToFind);

    newClock.getCurrentDateTime();
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains(`currentDate${cityToFind}`)) {
    newClock = new Clock(cityToFind);

    newClock.getCurrentDate();
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains(`delClock${cityToFind}`)) {
    newClock = new Clock(cityToFind);
    newClock.deleteClock();
  }
});
