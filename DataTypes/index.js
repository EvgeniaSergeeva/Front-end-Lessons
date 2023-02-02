//Min
const firstAdditive = 0.1;
const secondAdditive = 0.2;
console.log((firstAdditive + secondAdditive).toFixed(1)); //Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const testString = "1";
const testNumber = 2;
console.log(+testString + testNumber);//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const memoryValue = +prompt('Specify the volume of your flash drive in Gb')
const filsize = 820;
alert(`Your flash drive may contain ${Math.floor(memoryValue * 1000/filsize)} file(s)`) //Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
//Norm
const sumOfMoney = +prompt('Enter the sum of money you have');
const priceOfChocolate = +prompt('Enter the price of one chocolate');
alert (`You can afford ${Math.floor(sumOfMoney / priceOfChocolate)} chocolates and your rest will be ${sumOfMoney % priceOfChocolate}` );//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const unknownNumber = +prompt('Enter а three digit number');
const firstDigit = Math.floor(unknownNumber /100);
const secondDigit = Math.floor(unknownNumber % 100 / 10);
const lastdigit = unknownNumber % 10;
alert(`The desired number is ${lastdigit * 100 + secondDigit * 10 + firstDigit}`) //Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
//Max
const sumOfDeposit = +prompt('Enter the sum of your deposit');
const percent = 5;
const term = 2;
const accruedInterest = (sumOfDeposit * percent / 100 / 12 * term).toFixed(2);
alert(`The sum of accrued interest based on annual interest rate of ${percent} % is ${accruedInterest}`); //Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let someValue = 2 && 0 && 3;
console.log(someValue);//undefined
let anotherValue = 2 || 0 || 3;
console.log(anotherValue);//2
let oneMoreValue =  2 && 0 || 3;
console.log(oneMoreValue);//3

