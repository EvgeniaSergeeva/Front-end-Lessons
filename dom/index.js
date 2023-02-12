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
