      "use strict";
      let userName = prompt("What is your name?", "");
      alert(`Hello, ${userName}`);//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
      const currentYear = 2023;
      let yearOfBirth = Number(prompt("What is your year of birth?", ""));
      alert(`You are ${currentYear - yearOfBirth}`); //Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
      let side = Number(prompt("Enter the length of square side", ""));
      alert(`The perimeter of your square is ${side * 4}!`);//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
      let radius = Number(prompt("Enter the radius", ""));
      alert(`The area of your circle is ${Math.PI * Math.pow(radius, 2)}!`);//Запитай у користувача радіус кола і виведи площу такої окружності.
      let distance = Number(
        prompt("Enter the distance between the cities", "")
      );
      let time = Number(prompt("Enter the time", ""));
      alert(
        `If you want to get there in ${time} hours, your speed must be ${
          distance / time
        } km per hour!`
      );//Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
      const rate = 0.9;
      let sum = Number(prompt("Enter the sum in dollars", ""));
      alert(`${sum} Dollars are equal to ${sum * rate} Euros`);//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.