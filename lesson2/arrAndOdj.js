// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['hello', 'world', 1, 2.6780, 23, 40000, 335, false, true, 'user'];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = [
    {title: 'Lord of the Rings', pageCount: 1234, genre: 'fantastic'},
    {title: 'Rich dad, poor dad', pageCount: 245, genre: 'business literature'},
    {title: 'Twilight', pageCount: 838, genre: 'fantasy'},
];

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let allBooks = [
    {
        title: 'Lord of the Rings',
        pageCount: 1234,
        genre: 'fantastic',
        authors: [
            {name: 'John Ronald Reuel Tolkien'},
            {age: 88}
        ]
    },
    {
        title: 'Rich dad, poor dad',
        pageCount: 245,
        genre: 'business literature',
        authors: [
            {name: 'Robert Kiyosaki'},
            {age: 75}
        ]
    },
    {
        title: 'Twilight',
        pageCount: 838,
        genre: 'fantasy',
        authors: [
            {name: 'Stephenie Meyer'},
            {age: 49}
        ]
    },
];

console.log(allBooks[2].authors[0].name)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'user 1',
        username: 'Olga',
        password: '12kjdhkchidu232'
    },
    {
        name: 'user 2',
        username: 'Olga',
        password: 'hkchidu232'
    },
    {
        name: 'user 3',
        username: 'Dima',
        password: 'cveu351n'
    },
    {
        name: 'user 4',
        username: 'Vika',
        password: 'jnfkjvj3849945'
    },
    {
        name: 'user 5',
        username: 'Oleg',
        password: '!!!!ghhh'
    },
    {
        name: 'user 6',
        username: 'Illia',
        password: 'fghbjhbj249'
    },
    {
        name: 'user 7',
        username: 'Yehor',
        password: '22020808'
    },
    {
        name: 'user 8',
        username: 'Nata',
        password: '!jfujjwkdk'
    },
    {
        name: 'user 9',
        username: 'Max',
        password: 'cfvyuu474589'
    },
    {
        name: 'user 10',
        username: 'Iryna',
        password: 'jfnjvnejnkf'
    },
];

console.log([
    users[0].password,
    users[1].password,
    users[2].password,
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password
]);

