const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
const wrapper = document.getElementById("wrapper");
const ol = document.createElement("ol");
playList.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `"${item.author}" / "${item.song}"`;
  ol.appendChild(li);
});
wrapper.appendChild(ol);

//create list of 20 elements inside js file ( even : background blue ,
//color: white, align on right side / odd  background pink , color: black,
//align on left side, first element and last element align center heading 2 )
const animals = [
  "fox",
  "cat",
  "dog",
  "rabbit",
  "bear",
  "lion",
  "giraffe",
  "elefant",
  "rat",
  "cow",
  "tiger",
  "horse",
  "goat",
  "lama",
  "turtle",
  "humster",
  "puma",
  "parrot",
  "dove",
  "hen",
];
document.write('<div id="animals">');
let first = document.getElementById("animals").firstChild;
let last = document.getElementById("animals").lastChild;
document.getElementById("animals").style.border = "1px solid black";
document.getElementById("animals").style.width = "200px";
document.write(`<h2>${animals[0]}</h2>`);

const slicedAnimals = animals.slice(1, animals.length - 1);
slicedAnimals.forEach((animal) => {
  document.write(`<div class="animal">${animal}</div>`);
});
document.write(`<h2>${animals[animals.length - 1]}</h2>`);
document.write("</div>");
document.getElementById("animals").firstChild.style.textAlign = "center";
document.getElementById("animals").lastChild.style.textAlign = "center";
const anim = document.getElementsByClassName("animal");
for (let i = 0; i < anim.length; i++) {
  if (i % 2 !== 0) {
    anim[i].style.backgroundColor = "blue";
    anim[i].style.color = "white";
    anim[i].style.lineHeight = "40px";
    anim[i].style.textAlign = "right";
  } else {
    anim[i].style.backgroundColor = "pink";
    anim[i].style.color = "black";
    anim[i].style.lineHeight = "40px";
    anim[i].style.textAlign = "left";
  }
}

// calculate the average price of products in each category,

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const divideIntoCategories = products.reduce((obj, product) => {
  if (!obj[product.category]) {
    obj[product.category] = [];
  }
  obj[product.category].push(product);
  return obj;
}, {});

const arrOfCategories = Object.keys(divideIntoCategories);
console.log(arrOfCategories);

arrOfCategories.forEach((item) => {
  console.log(
    divideIntoCategories[item].reduce(
      (total, amount) => total + amount.price,
      0
    ) / divideIntoCategories[item].length
  );
});

//create a form with submit
//when I click submit i could see either in alert or console all data that
// user has inserted

const form = document.getElementById("form");

const formInfo = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let text = "";
  const firstName = formData.get("first-name");
  firstName !== ""
    ? (text += `First name is: ${firstName}` + "\n")
    : (text += `Enter your first name, please!` + "\n");
  const lastName = formData.get("last-name");
  lastName !== ""
    ? (text += `Last name is: ${lastName}` + "\n")
    : (text += `Enter your last name, please!` + "\n");
  const email = formData.get("email");
  email !== ""
    ? (text += `Email is: ${email}` + "\n")
    : (text += `Enter your email, please!` + "\n");

  const password = formData.get("password");
  password !== ""
    ? (text += `Password is: ${password}` + "\n")
    : (text += `Enter the password, please!` + "\n");

  alert(text);
};

form.addEventListener("submit", formInfo);
