// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;

if (x !== 0) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = prompt('Write a number from 0 to 59 and you are knowing, how part is now!');

if (time < 0 || time > 59) {
    console.log('Incorrect number!');
} else if (time > 45) {
    console.log('It is quarter part of an hour');
} else if (time > 30) {
    console.log('It is third part of an hour');
} else if (time > 15) {
    console.log('It is second part of an hour');
} else if (time >= 0) {
    console.log('It is first part of an hour');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
// на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let schedule = prompt('What day do you need a schedule for? Enter a number of day from 1 to 5!');

switch (schedule) {
    case '1':
        document.write('<h2>Monday:</h2>');
        document.write('<h2>19:30 - Practise of Java Script</h2>');
        break;
    case '2':
        document.write('<h2>Tuesday:</h2>');
        document.write('<h2>19:30 - Lecture of Java Script </h2>');
        break;
    case '3':
        document.write('<h2>Wednesday:</h2>');
        document.write('<h2>19:30 - Practise of C++</h2>');
        break;
    case '4':
        document.write('<h2>Thursday:</h2>');
        document.write('<h2>19:30 - Lecture of C++</h2>');
        break;
    case '5':
        document.write('<h2>Friday:</h2>');
        document.write('<h2>19:30 - Lecture Java Script</h2>');
        break;
    default:
        console.log('Saturday and Sunday are weekends!!');
}


//     - Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох.
//    Також потрібно врахувати коли введені рівні числа.

let num1 = 0;
let num2 = 88;

if(num1 >= num2) {
    console.log('num1 = ', num1);
} else {
    console.log('num2 = ', num2);
}


//     - є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній y значення "default",
//     якщо значення змінної y являється falsy (хибноподібні, тобто приводиться до false)

let y = null;

if (y === 0 || y === '' || y === null || y === undefined || y === NaN) {
    y = 'default';
    console.log('y = ', y);
} else {
    console.log('y = ', y);
}

// or

let q = 1;
q = q || 'default';
console.log(q);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
}
