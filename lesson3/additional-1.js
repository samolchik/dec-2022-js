// 1. Створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['1', 'hello', 'html', 'olga', '0'];
let arr3 = [1, 'hello', true, 456, 'world'];

console.log('arr1', arr1, 'arr2', arr2, 'arr3', arr3,)

// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

let newArr = [];
newArr[0] = 'hello';
newArr[1] = 2345;
newArr[2] = {name: 'olga', age: 34};

console.log('newArr', newArr);

// 1. є масив
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1.1. перебрати його циклом while
let e = 0;
while (e < arr.length) {
    console.log('arr', arr[e]);
    e++;
}

// 1.2. перебрати його циклом for

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

// 1.3. перебрати циклом while та вивести  числа тільки з непарним індексом

let u = 0;
while (u < arr.length) {
    if (u % 2 !== 0)
        console.log('whileUnpairedIndex = ', arr[u]);
    u++;
}
// 1.4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log('forUnpairedIndex = ', arr[i])
    }
}

// 1.5. перебрати циклом while та вивести  числа тільки парні  значення

let z = 0;
while (z < arr.length) {
    if (z % 2 === 0)
        console.log('whilePairIndex = ', arr[z]);
    z++;
}

// 1.6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        console.log('forPairIndex = ', arr[i])
    }
}

// 1.7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}

console.log('arrOkten = ', arr);

// 1.8. вивести масив в зворотньому порядку.

let arrReversed = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = arrReversed.length; i >= 0; i--) {
    console.log('arrReversed = ', arrReversed[i]);
}

// 2. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers = [12, 4, 566, 666, 78, 77666, 8, 0, 876, 2222];
for (const number of numbers) {
    console.log('number = ', number);
}

// 3. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrTypeof = [1, 'hello', true, 456, 'world', false, 455, -575,'okten', 'typeof'];

for (const arrTypeofElement of arrTypeof) {
    if (typeof arrTypeofElement === 'boolean') {
        console.log('boolean: ', arrTypeofElement);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const arrTypeofElement of arrTypeof) {
    if (typeof arrTypeofElement === 'string') {
        console.log('string: ', arrTypeofElement);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const arrTypeofElement of arrTypeof) {
    if (typeof arrTypeofElement === 'number') {
        console.log('number: ', arrTypeofElement);
    }
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 10; i++){
    console.log('step:', i);
    // document.write(`step : ${i} <br>`);
};
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

let step = 0;
for (let i = 0; i <= 100; i++){
    console.log('step:', step);
    // document.write(`step : ${step} <br>`);
    step+=2;
};
