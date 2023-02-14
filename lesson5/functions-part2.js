// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// 1. Cтворити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b) => a * b;

console.log('areaRectangle', areaRectangle(2, 5))

// 2. Cтворити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
let areaCircle = (r) => PI * r ** 2;

console.log('areaCircle', areaCircle(4));

// 3. Cтворити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder = (h, r) => 2 * PI * r * (h + r);

console.log('areaCylinder', areaCylinder(3, 6))

// 4. Cтворити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 'hello', true, 456, 'okten', 'typeof'];
let showArrItem = (arr) => {

    for (const item of arr) {
        // console.log('newArray', arr);
    }
}

showArrItem(arr);

// 5. Cтворити функцію, яка створює параграф з текстом. Текст задати через аргумент

let createText = (text) => {
    document.write(`<p>${text}</p>`);
}

createText('Hello! Glad to see you ;)');


// 6. Cтворити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = (text) => {
    let html = `<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`;

    document.write(html);
}

createUl('Good morning ;)');

// 7. Cтворити функцію, яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createAdaptedUl = (text, n) => {
    document.write(`<ul>`)

    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }

    document.write(`</ul>`)
}

createAdaptedUl('It is 7th task', 5);

// 8. Cтворити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList = (arrTypeof) => {
    document.write(`<ul>`)

    for (let i = 0; i < arrTypeof.length; i++) {
        document.write(`<li>${arrTypeof[i]}</li>`)
    }
    document.write(`</ul>`)
}

createList([1, 'hello', true, 456, 'okten', 'typeof']);


// 9. Cтворити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let usersInfo = (users) => {

    for (const user of users) {
        document.write(`<div>id: ${user.id} --- name: ${user.name} --- age: ${user.age}</div>`)
    }
}

usersInfo(users);


// 10. Cтворити функцію, яка повертає найменьше число з масиву
let minNumber = (numbers) => {
    let minNum = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum < minNum) {
            minNum = currentNum;
        }
    }

    console.log('minNum', minNum);
}

minNumber([0, 17, -20, 66, 100, -18]);


// 11. Cтворити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let getArraySum = (arr) => {
    let res = 0;

    for (const arrElement of arr) {
        res += arrElement;
    }

    console.log('arraySum', res);
}

getArraySum([1, 2, 10]);

// 12. Cтворити функцію swap(arr,index1,index2). Функція міняє місцями знaчення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(array, index1, index2) {
    let arraySwap = array[index1];
    array[index1] = array[index2];
    array[index2] = arraySwap;

    console.log('arraySwap', array);
}

swap([11, 22, 33, 44], 0, 1);

// 13. Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {

        if (item.currency === exchangeCurrency) {
            let amountExchange = sumUAH / item.value;

            console.log('Your amount = ', amountExchange);
        }
    }
}

exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');

