//Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску,
//середня швидкість, обсяг паливного баку, середня витрата палива на
//100 км., водії) Метод, який виводить на екран інформацію про автомобіль.
//Додавання ім’я водія у список
//Перевірка водія на наявність його ім’я у списку
//Підрахунок необхідного часу та кількості палива для подолання
//переданої відстані з середньою швидкістю. Враховуй, що через кожні 4
//години дороги водієві необхідно робити перерву на 1 годину.
const car = {
  prod: "VW",
  model: "Passat",
  speed: 120,
  fuelConsumption: 5.5,
  driverName: [],
  showInfo() {
    console.log("Information about the car:");

    console.log(
      `Producer: ${this.prod}, model is ${this.model}, average speed is ${this.speed}, average fuel consumption is ${this.fuelConsumption}, driverName is: ${this.driverName}`
    );
  },
  addName(name) {
    this.driverName.indexOf(name) === -1
      ? this.driverName.push(name)
      : console.log(`The driver ${name} already exists!`);
  },
  calculateTimeAndFuel(destination) {
    const drivingTime = destination / this.speed;
    let additionalTime;
    let neededTime;
    if (drivingTime > 4) {
      neededTime % 4 == 0
        ? (additionalTime = drivingTime / 4 - 1)
        : (additionalTime = Math.floor(drivingTime / 4));
      neededTime = drivingTime + additionalTime;
    } else {
      neededTime = drivingTime;
    }
    console.log(
      `The needed time to get to the point is ${convertTime(neededTime)}`
    );
    console.log(
      `The amount of needed fuel is ${
        (destination / 100) * this.fuelConsumption
      } liters`
    );
  },
};
const convertTime = (duration) => {
  duration = duration * 3600;
  let hours = Math.trunc(duration / 3600);
  let minutes = Math.trunc((duration % 3600) / 60);
  let seconds = duration % 60;
  return hours + " hours " + minutes + " min " + seconds + " sec";
};
car.showInfo();
car.addName("Potap Potapenko");
car.showInfo();
car.addName("Potap Potapenko");
car.calculateTimeAndFuel(1234);

//Створити об'єкт, що описує час (години, хвилини, секунди), і такі
//функції для роботи з цим об'єктом:
//Для виведення часу на екран.
//Зміни часу на передану кількість секунд.
//Зміни часу на передану кількість хвилин.
//Зміни часу на передану кількість годин.
//Враховуйте, що в останніх 3-х функціях, при зміні однієї
//частини часу, може змінитися і інша. Наприклад: якщо до
//часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а
//не «20:59:75». Також потрібно передбачити можливість того що користувач
//може передати 150 секунд, або 75 хвилин.
const time = {
  hours: null,
  minutes: null,
  seconds: null,
  showTime() {
    console.log(
      `Time is ${this.hours} hours ${this.minutes} minutes ${this.seconds} seconds`
    );
  },
  updateSeconds(sec) {
    console.log(convertFulltime(sec));
  },
  updateMinutes(min) {
    console.log(convertFulltime(min * 60));
  },
  updateHours(hs) {
    console.log(convertFulltime(hs * 3600));
  },
};
const convertFulltime = (deltaSeconds) => {
  const currentTime = time.hours * 60 * 60 + time.minutes * 60 + time.seconds;
  const updatedTime = currentTime + deltaSeconds;
  let hours = Math.trunc(updatedTime / 3600);
  let minutes = Math.trunc((updatedTime % 3600) / 60);
  let seconds = updatedTime % 60;
  hours >= 24 ? (hours = hours % 24) : hours;
  time.hours = hours;
  time.minutes = minutes;
  time.seconds = seconds;
  return hours + " hours " + minutes + " min " + seconds + " sec";
};
time.showTime();
time.updateSeconds(4670000088989);
time.updateMinutes(24);
time.showTime();
time.updateMinutes(44);
time.showTime();
time.updateHours(3);
time.showTime();

//Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
//Складання 2-х об'єктів-дробів.
//Віднімання 2-х об'єктів-дробів.
//Множення 2-х об'єктів-дробів.
//Ділення 2-х об'єктів-дробів.
//Скорочення об'єкта-дробу.
function Fraction(numerator, denominator) {
  return {
    numerator: numerator,
    denominator: denominator,
    showFraction() {
      console.log(`${this.numerator}/${this.denominator}`);
    },
  };
}

const fractionReduction = (num, den) => {
  for (let i = num; i > 0; i--) {
    if (num % i === 0 && den % i === 0) {
      num = num / i;
      den = den / i;
    }
  }
  return num === den
    ? 1
    : num > den
    ? `${Math.floor(num / den)} and ${
        num - Math.floor(num / den) * den
      } / ${den}`
    : num === 0
    ? 0
    : `${num}/${den}`;
};
const operationWithFractions = (fractionOne, fractionTwo, operator) => {
  if (fractionOne.denominator == 0 || fractionTwo.denominator == 0) {
    return `It is impossible to divide by zero!`;
  } else if (
    isNaN(fractionOne.numerator) ||
    isNaN(fractionOne.denominator) ||
    isNaN(fractionTwo.numerator) ||
    isNaN(fractionTwo.denominator)
  ) {
    return `Enter fraction in a proper format!`;
  } else {
    let resultNumerator;
    let resultDenominator;
    switch (operator) {
      case "+":
        resultNumerator =
          fractionOne.numerator * fractionTwo.denominator +
          fractionTwo.numerator * fractionOne.denominator;
        resultDenominator = fractionOne.denominator * fractionTwo.denominator;
        return fractionReduction(resultNumerator, resultDenominator);
      case "-":
        resultNumerator =
          fractionOne.numerator * fractionTwo.denominator -
          fractionTwo.numerator * fractionOne.denominator;
        resultDenominator = fractionOne.denominator * fractionTwo.denominator;
        return fractionReduction(resultNumerator, resultDenominator);
      case "*":
        resultNumerator = fractionOne.numerator * fractionTwo.numerator;
        resultDenominator = fractionOne.denominator * fractionTwo.denominator;
        return fractionReduction(resultNumerator, resultDenominator);
      case "/":
        resultNumerator = fractionOne.numerator * fractionTwo.denominator;
        resultDenominator = fractionOne.denominator * fractionTwo.numerator;
        return fractionReduction(resultNumerator, resultDenominator);
    }
  }
};

let firstFrac = Fraction(5, 20);
let secondFrac = Fraction(3, 14);
let first = Fraction(1, 20);
let second = Fraction(3);
console.log(operationWithFractions(firstFrac, secondFrac, "*"));
console.log(operationWithFractions(first, second, "/"));
