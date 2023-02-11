//Напиши всі можливі варіанти створення функцій.
function myFunction() {
  return;
} //function declaration
const test = function () {
  return;
}; //function expression
const add = (a, b) => a + b; //arrow function

//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function myLength() {
  console.log(arguments.length);
}
myLength(1, 2, 3, 5); //4

//Напиши функцію, яка приймає 2 числа і повертає :
//-1, якщо перше число менше, ніж друге;
//1 - якщо перше число більше, ніж друге;
//0 - якщо числа рівні.
function numberCheck(x, y) {
  if ((!x && x !== 0) || isNaN(x) || (!y && y !== 0) || isNaN(y)) {
    return "Please provide proper number input!";
  } else {
    switch (true) {
      case x > y:
        return "1";
      case x < y:
        return "-1";
      default:
        return "0";
    }
  }
}
console.log(numberCheck(4, 4)); //0
console.log(numberCheck("9", 4)); //1
console.log(numberCheck(4, 0)); //1
console.log(numberCheck(0, "10")); //-1

//Напиши функцію, яка обчислює факторіал переданого їй числа.
function myFactorial(n) {
  if ((!n && n !== 0) || isNaN(n)) {
    console.log("Please provide proper number input!");
  } else {
    let result = 1;
    if (n < 0) {
      result = undefined;
    } else if (n === 0) {
      result = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
    }
    console.log(result);
  }
}
myFactorial("5"); //120
//Напиши функцію, яка приймає три окремі цифри і перетворює
//їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let transformToMumber = (a, b, c) => {
  if (
    (!a && a !== 0) ||
    isNaN(a) ||
    (!b && b !== 0) ||
    isNaN(b) ||
    (!c && c !== 0) ||
    isNaN(c)
  ) {
    console.log("Please provide proper number input!");
  } else {
    console.log(a * 100 + b * 10 + c);
  }
};
transformToMumber(2, 6, 9); //269
transformToMumber("2", 6, 9); //269
transformToMumber(2, 9); //Please provide proper number input!

//Напиши функцію, яка приймає довжину і ширину прямокутника
//і обчислює його площу. Якщо в функцію передали 1 параметр,
// то вона обчислює площу квадрата.
function area(a, b) {
  if (area.arguments.length == 1) {
    !a || isNaN(a)
      ? console.log("You have entered the wrong data")
      : a <= 0
      ? console.log("Dimensions cannot be zero or negative")
      : console.log(a ** 2);
  } else {
    !a || isNaN(a) || !b || isNaN(b)
      ? console.log("You have entered the wrong data")
      : a <= 0 || b <= 0
      ? console.log("Dimensions cannot be zero or negative")
      : console.log(a * b);
  }
}
area("9", 8); //72
area(""); //You have entered the wrong data
area(7, ""); //You have entered the wrong data
area(8); //64

// write function that base on year of birth  received will return age,
// the year must be different each time i call the functiomn
// 1. check if correct argument is provided
// 2. check if argument is provided
// 3. for person older than 150 years return message irrelevnt number
// 4. if all good return message your age is ....
function calculateAge(currentYear) {
  if ((!currentYear && currentYear !== 0) || isNaN(currentYear)) {
    return "Please provide a current year in a proper format.";
  } else {
    const currYear = currentYear;

    function substructe(yearOfBirth) {
      if ((!yearOfBirth && yearOfBirth !== 0) || isNaN(yearOfBirth)) {
        return "Please provide a year of birth in a proper format.";
      } else {
        const age = Number(currYear) - Number(yearOfBirth);
        if (age > 150 || age < 0) {
          return "Irrelevant number.";
        } else {
          return `Your age is ${age}`;
        }
      }
    }

    return substructe;
  }
}

console.log(calculateAge("2023")(1978)); //45
console.log(calculateAge("2023")("")); //Please provide a year of birth in a proper format.
console.log(calculateAge("2023")(0)); //Irrelevant number.
console.log(calculateAge(2023)(1778)); //Irrelevant number.
console.log(calculateAge("2022")(1978)); //44
console.log(calculateAge(0)(1978)); //Irrelevant number.

//OR, but this is not a closure, is it???
function calculateAgeAgain(yearOfBirth, currentYear) {
  if (
    (!yearOfBirth && yearOfBirth !== 0) ||
    isNaN(yearOfBirth) ||
    (!currentYear && currentYear !== 0) ||
    isNaN(currentYear)
  ) {
    return "Please provide a year of birth and current year in a proper format.";
  }
  const currYear = currentYear;
  const birthYear = yearOfBirth;
  function substructe() {
    const age = Number(currYear) - Number(birthYear);
    return age;
  }
  if (substructe() > 150) {
    return "Irrelevant number.";
  }
  console.log("Your age is" + " " + substructe());
}
calculateAgeAgain(1978, 2023);
calculateAgeAgain("1978", 2023);
console.log(calculateAgeAgain("1978", 2023));
console.log(calculateAgeAgain(null)); //undefined!! why??
console.log(calculateAgeAgain(0));
console.log(calculateAgeAgain());
console.log(calculateAgeAgain(undefined));
console.log(calculateAgeAgain(1005, 2023));
