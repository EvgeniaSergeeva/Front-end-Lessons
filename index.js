//min
//Запитай у користувача його вік і визначи, ким він є: 
//дитиною (0-11), підлітком (12-17), дорослим (18_59) або 
//пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = prompt('Enter your age','');
if(isNaN(age)){
   alert("Enter your age in a proper format")
}
else{
    switch(true){
        case age <= 11:
            alert('You are a child!');
            break;
        case age >= 12 && age <= 17:
            alert('You are a teenager!');
            break;
        case age >=18 && age <=59:
            alert('You are an adult!');
            break;
        case age >= 60:
            alert('You are a pensioner!')
            break;
        default:
            break;
    }
}
//Запитай у користувача число від 0 до 9 і виведи йому 
//спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const userNumber = +prompt('Enter a numbur from 0 to 9','');
if (userNumber < 0 || userNumber > 9){
    alert('Your number should be in range 0...9!');
}else{
    switch(userNumber){
        case 0:
        alert(`The special symbol on button "${userNumber}" is ")"`);
        break;
        case 1:
        alert(`The special symbol on button "${userNumber}" is "!"`);
        break;
        case 2:
        alert(`The special symbol on button "${userNumber}" is "@"`);
        break;
        case 3:
        alert(`The special symbol on button "${userNumber}" is "#"`);
        break;
        case 4:
        alert(`The special symbol on button "${userNumber}" is "$"`);
        break;
        case 5:
        alert(`The special symbol on button "${userNumber}" is "%"`);
        break;
        case 6:
        alert(`The special symbol on button "${userNumber}" is "^"`);
        break;
        case 7:
        alert(`The special symbol on button "${userNumber}" is "&"`);
        break;
        case 8:
        alert(`The special symbol on button "${userNumber}" is "*"`);
        break;
        case 9:
        alert(`The special symbol on button "${userNumber}" is "("`);
        break;  
        default:
          alert('You entered the wrong key!') ;   
    }
}
//Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const firstNumber = +prompt('Enter the first number','');
const secondNumber = +prompt('Enter the second number','');
let min;
let max;
let sum = 0;
if(isNaN(firstNumber) || isNaN(secondNumber)){
   alert("You have entered not a number");
}
else{
     (firstNumber > secondNumber) ? (max = firstNumber, min = secondNumber) : (min = firstNumber, max = secondNumber);
    for (let i = min; i <= max; i++){
        sum += i;
    }
    alert(`The sum is ${sum}`);
}
//norm
//Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//від 200 до 300 - знижка буде 3%; 
//від 300 до 500 - 5%;
//від 500 і вище - 7%.
const cost = +prompt('Enter the price of your purchase');
const discont5 = 0.95;
const discont3 = 0.97;
const discont7 = 0.93;
if(isNaN(cost)){
    alert('Enter the information in a proper format')
} 
else{
   switch(true){
    case cost >=200 && cost < 300:
        alert(`Your purchase amount is ${(cost * discont3).toFixed(2)}`);
        break;
    case cost >=300 && cost < 500:
        alert(`Your purchase amount is ${(cost * discont5).toFixed(2)}`);
        break;
    case cost >=500:
        alert(`Your purchase amount is ${(cost * discont7).toFixed(2)}`);
        break;
    default:
        alert("Unfortunatelly, you have no discont");
   }
}
//Запитай у користувача 10 чисел і порахуй, 
//скільки він ввів додатніх, від’ємних і нулів. 
//При цьому також порахуй, скільки з них парних і непарних. 
//Виведи статистику на екран. Враховуй, що достатньо однієї змінної 
//(не 10) для введення чисел користувачем.
const myArray = [2, -9, 67, 4, 0, 0, -79, 134, 55, -59];
let negativeCount = 0;
let positiveCount = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;
for (let i = 0; i < myArray.length; i++){
    switch(true){
        case myArray[i] === 0:
            zeroCount++;
            break;
        case myArray[i] < 0 && myArray[i] % 2 == 0:
            negativeCount++;
            evenCount++;
            break;
        case myArray[i] < 0 && myArray[i] % 2 !== 0:
            negativeCount++;
            oddCount++;
            break;    
        case myArray[i] > 0  && myArray[i] % 2 == 0:
            positiveCount++;
            evenCount++;
            break;
        case myArray[i] > 0  && myArray[i] % 2 !== 0:
            positiveCount++;
            oddCount++;
            break;
        
        default:
            break;
    }
}

console.log(`The quantity of positive numbers is ${positiveCount}.\n
The quantity of negative numbers is ${negativeCount}.\n
The quantity of zero numbers is ${zeroCount}.\n
The quantity of even numbers is ${evenCount}.\n
The quantity of odd numbers is ${oddCount}.\n`);


//or:
let i = 1;
let negativeCount1 = 0;
let positiveCount1 = 0;
let zeroCount1 = 0;
let oddCount1 = 0;
let evenCount1 = 0;
while (i <=10){
    let inputNumber = +prompt('Enter the number','');
    switch(true){
        case inputNumber === 0:
            zeroCount1++;
            break;
        case inputNumber < 0 && inputNumber % 2 == 0:
            negativeCount1++;
            evenCount1++;
            break;
        case inputNumber < 0 && inputNumber % 2 !== 0:
            negativeCount1++;
            oddCount1++;
            break;    
        case inputNumber > 0  && inputNumber % 2 == 0:
            positiveCount1++;
            evenCount1++;
            break;
        case inputNumber > 0  && inputNumber % 2 !== 0:
            positiveCount1++;
            oddCount1++;
            break;
        
        default:
            break;
    }
    i++;
}
alert(`The quantity of positive numbers is ${positiveCount1}.\n
The quantity of negative numbers is ${negativeCount1}.\n
The quantity of zero numbers is ${zeroCount1}.\n
The quantity of even numbers is ${evenCount1}.\n
The quantity of odd numbers is ${oddCount1}.\n`);

//Зацикли відображення днів тижня таким чином: «День тижня. 
//Хочеш побачити наступний день? » і так до тих пір, поки 
//користувач натискає OK.
let day = "Friday";
let answer;
do{
 answer = confirm(`${day}. Would you like to know the following day of the week?`);
 switch(day){
    case "Sunday":
        day = "Monday";
        break;
    case "Monday":
        day = "Tuesday";
        break;
    case "Tuesday":
        day = "Wednesday";
        break;
    case "Wednesday":
        day = "Thirsday";
        break;
    case "Thirsday":
        day = "Friday";
        break;
    case "Friday":
        day = "Saturday";
        break;
    case "Saturday":
        day = "Sunday";
        break;
    case "Sunday":
        day = "Monday";
        break;
    default:
        break;
 }
}while(answer);
//max
//Виведи таблицю множення для всіх чисел від 2 до 9. 
//Кожне число необхідно помножити на числа від 1 до 10.
for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
//Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
//Враховуй можливість переходу на наступний місяць, рік, 
//а також високосний рік.
let dayOfMonth = +prompt('Enter the day');
let month= prompt('Enter the month').toLowerCase();
let year= +prompt('Enter the year');
let flag = false;

switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        if (dayOfMonth <= 31){
            flag = true;
        }
        break;
    case "february":
        if(dayOfMonth <= 29 && year % 4 == 0 || dayOfMonth <= 28 && year % 4 != 0){
            flag = true;
        }
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        if(dayOfMonth <= 30){
            flag = true; 
        }
        break;
    default:
        break;

}
if(!flag ){
    alert('You have entered the wrong date!');
   
}
 else {
    switch(true){
        case dayOfMonth == 31 && month == "december":
          dayOfMonth = 1;
          month = "january";
          year++;  
          break;
        case dayOfMonth == 31 && month == "january":
           dayOfMonth = 1;
           month = "february";
           break;
        case dayOfMonth == 31 && month == "march" :
           dayOfMonth = 1;
           month = "april";
           broeak;
        case dayOfMonth == 31 && month == "may":
           dayOfMonth = 1;
           month = "june";
           break;
        case dayOfMonth == 31 && month == "july":
           dayOfMonth = 1;
           month = "august";
           break;
        case dayOfMonth == 31 && month == "august":
            dayOfMonth = 1;
            month = "september";
            break;
        case dayOfMonth == 31 && month == "october":
            dayOfMonth = 1;
            month = "november";
            break;
        case dayOfMonth == 30 && month == "april":
            dayOfMonth = 1;
            month = "may";
             break;
        case dayOfMonth == 30 && month == "june":
            dayOfMonth = 1;
            month = "july";
            break;
        case dayOfMonth == 30 && month == "september":
            dayOfMonth = 1;
            month = "october";
            break;
        case dayOfMonth == 30 && month == "november":
            dayOfMonth = 1;
            month = "december";
            break;
        case (dayOfMonth == 28 || dayOfMonth == 29) && month == "february":
            dayOfMonth = 1;
            month = "march";
            break;
        default:
            dayOfMonth++;
            break;
        
    }
    
     alert(`The next day is the ${dayOfMonth} of ${month}, ${year}`)
    }
    
    
    
     

