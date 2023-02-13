// 1. Створити пустий масив та:
// a. заповнити його 50 парними числами за допомоги циклу.
// b. заповнити його 50 непарними числами за допомоги циклу.

let arrA = [];
let arrB = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        arrA.push(i);
    } else {
        arrB.push(i);
    }
    // i % 2 === 0 ? arrA[i] = i : arrB[i] = i;
}
console.log('arrA =', arrA);
console.log('arrB =', arrB);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrC = [];

for (let i = 0; i < 20; i++) {
    arrC[i] = Math.random();
}

console.log('arrC = ', arrC);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrD = [];

for (let i = 0; i < 20; i++) {
    arrD[i] = Math.floor(Math.random() * (732 - 8) + 8);
}

console.log('arrD = ', arrD);

// 2. Вивести за допомогою console.log кожен третій елемен
let array = [222, 68, 13, 4, 3, 1, 20, 999, 22, 486, 100];

for (let i = 0; i < array.length; i += 3) {
    console.log('arrEachThird = ', array[i])
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < array.length; i += 3) {
    if (array[i] % 2 === 0) {
        console.log('arrEachThirdPair = ', array[i])
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArrEachThirdPair = [];

for (let i = 0; i < array.length; i += 3) {
    if (array[i] % 2 === 0) {
        newArrEachThirdPair.push(array[i]);
    }
}

console.log('newArrEachThirdPair = ', newArrEachThirdPair);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arrExample = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i < arrExample.length; i++) {
    if (arrExample[i + 1] % 2 === 0) {
        console.log('arrNeighborRightPair = ', arrExample[i])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let costProducts = [100, 250, 50, 168, 120, 345, 188];
let averageCheck = 0;

for (let i = 0; i < costProducts.length; i++) {
    averageCheck += Math.round(costProducts[i] / costProducts.length);
}

console.log('averageCheck = ', averageCheck);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr7 = [];
let res = [];

for (let i = 0; i < 7; i++) {
    arr7[i] = Math.floor(Math.random() * (100 - 1) + 1);
    res.push(arr7[i] * 5);
}

console.log('arr7 = ', arr7);
console.log('res = ', res);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr8 = [233, 'joijoc', true, 456, 0, 'fjevfo', 'kmcc', 696996];
let onlyNumbers = [];

for (let i = 0; i < arr8.length; i++) {
    if (typeof arr8[i] === 'number') {
        onlyNumbers.push(arr8[i])
    }
}

console.log('onlyNumbers = ', onlyNumbers);

// 9. Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    usersWithCities.push(usersWithId[i]);

    for (let j = 0; j < citiesWithId.length; j++) {

        if (usersWithCities[i].id === citiesWithId[j].user_id) {
            usersWithCities[i].address = citiesWithId[j]
        }
    }
}

console.log('usersWithCities = ', usersWithCities);


// 10. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters = ['a', 'b', 'c'];
let wordFor = '';
for (let i = 0; i < letters.length; i++) {
    wordFor += letters[i];
}

console.log('wordFor = ', wordFor)

// 11. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let wordWhile = '';

let o = 0;
while (o < letters.length) {
    wordWhile += letters[o];
    o++;
}

console.log('wordWhile = ', wordWhile)

// 12. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let wordForOf = '';
for (const letterElement of letters) {
    wordForOf += letterElement;
}
console.log('wordForOf = ', wordForOf)

