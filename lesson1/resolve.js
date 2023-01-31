<!--  - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
<!--  Вивести кожну змінну за допомогою: console.log-->

const srt1 = "hello";
console.log(srt1);

const srt2 = "owu";
console.log(srt2);

const srt3 = "com";
console.log(srt3);

const num1 = 1;
console.log(num1);

const num2 = 10;
console.log(num2);

const num3 = 10;
console.log(num3);

const num4 = -999;
console.log(num4);

const num5 = 123;
console.log(num5);

const num6 = 3.14;
console.log(num6);

const num7 = 2.7;
console.log(num7);

const num8 = 16;
console.log(num8);

const bool1 = true;
console.log(bool1);

const bool2 = false;
console.log(bool2);


<!--  - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)-->

const firstName = "Olga";
const lastName = "Samiilenko"
const middleName = "Mykolaivna";

console.log(lastName + " " + firstName + " " + middleName);


<!--  - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

<!--  Додаткове для тих хто цікавився prompt`oм-->
<!--  - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль-->

let name= prompt('What is your firstName?','');
let middle= prompt('What is your middleName?','');
let age= prompt('How old are you?','');

alert("Hello! I'm "+name+" "+middle+", my age "+age+"!");

console.log("message in alert = ", "Hello! I'm "+name+" "+middle+", my age "+age+"!");


