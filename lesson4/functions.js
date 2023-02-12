// 1. Cтворити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    return (a + b) * 2;
}

console.log('areaRectangle', areaRectangle(2, 6))

// 2. Cтворити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;

function areaCircle(r) {
    return PI * r ** 2
}

console.log('areaCircle', areaCircle(2))

// 3. Cтворити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return 2 * PI * r * h + 2 * PI * r ** 2
}

console.log('areaCylinder', areaCylinder(2, 6))

// 4. Cтворити функцію яка приймає масив та виводить кожен його елемент

let userCities = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


function showArr(userCities) {
    let newArray = [];

    for (const userCity of userCities) {
        newArray.push(userCity);
    }

    console.log('newArray', newArray);

    return newArray;
}

showArr(userCities);

// 5. Cтворити функцію, яка створює параграф з текстом. Текст задати через аргумент

function createText(text) {
    return document.write(`<p>${text}</p>`);
}

createText('Hello! Glad to see you)');


// 6. Cтворити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(text) {
    let html = `<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`;

    return document.write(html);
}

createUl('Hello! Glad to see you)');

// 7. Cтворити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createAdaptedUl(text, n) {
    document.write(`<ul>`)

    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createAdaptedUl('Hello! Glad to see you)', 5);

// 8. Cтворити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrTypeof = [1, 'hello', true, 456, 'world', false, 455, -575, 'okten', 'typeof'];

function createList(arrTypeof) {
    document.write(`<ul>`)

    for (let i = 0; i < arrTypeof.length; i++) {
        document.write(`<li>${arrTypeof[i]}</li>`)
    }
    document.write(`</ul>`)
}

createList(arrTypeof);


// 9. Cтворити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

function usersInfo(users) {
    document.write(`<ul>`)

    for (let i = 0; i < users.length; i++) {
        document.write(`<li>id: ${users[i].id} --- name: ${users[i].name} --- age: ${users[i].age}</li>`)
    }
    document.write(`</ul>`)
}

usersInfo(users);


// 10. Cтворити функцію яка повертає найменьше число з масиву

let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

function minNumber(numbers) {
    let minNum = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum < minNum) {
            minNum = currentNum;
        }
    }

    return minNum;
}

console.log('minNumber', minNumber(numbers));

// 11. Cтворити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let arr = [1, 2, 10];

function getArraySum(arr) {
    let res = 0;

    for (const arrElement of arr) {
        res += arrElement;
    }

    return res;
}

console.log('getArraySum', getArraySum(arr));


// 12. Cтворити функцію swap(arr,index1,index2). Функція міняє місцями знaчення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let array = [11, 22, 33, 44];

function swap(array, index1, index2) {
    let arraySwap = array[index1];
    array[index1] = array[index2];
    array[index2] = arraySwap;
}

swap(array, 0, 1);
console.log('arraySwap', array);

// 13. Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let sumUAH = Number(prompt("How much money in UAH do you want to exchange?"));
// let exchangeCurrency = prompt("What currency do you want to convert it to? EUR or USD?");

let currencyValues = {
    "USD": 40,
    "EUR": 42
}
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currentRate = currencyValues[exchangeCurrency.toUpperCase()];
    let amount = sumUAH / currentRate;

    return amount;
}

let currentAmount = exchange(10000, currencyValues, 'usd');
console.log('Your amount = ', currentAmount);

// alert('Your amount = ' + currentAmount);
