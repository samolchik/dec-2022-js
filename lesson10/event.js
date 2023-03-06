// Стоврити форму з трьома полями для name, sruname, age та кнопкою. При натисканні на кнопку зчитати данні з полів
// та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const userForm = document.forms.userinfo;
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');
const userAge = document.getElementById('age');

const infoUserName = document.getElementById('userName');
const infoUserSurName = document.getElementById('userSurName');
const infoUserAge = document.getElementById('userAge');

userForm.onsubmit = function (e) {
    e.preventDefault();

    let userData = {name: this.name.value, surname: this.surname.value, age: this.age.value};

    infoUserName.innerText = `Name: ${userData.name}`;
    infoUserSurName.innerText = `Surname: ${userData.surname}`;
    infoUserAge.innerText = `Age: ${userData.age}`;

    userName.value = '';
    userSurname.value = '';
    userAge.value = '';
}

// ==========================

// Є сторінка, на якій є блок, я кому знаходиьтся цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
const number = document.getElementById('number');

function counter() {
    const count = Number(localStorage.getItem('count')) || 0;

    number.innerText = `${count}`;
    localStorage.setItem('count', count + 1);
}

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions, зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію.

const date = JSON.parse(localStorage.getItem('sessions')) || [];
date.push(new Date());
localStorage.setItem('sessions', JSON.stringify(date));

// =========================
// Зробити масив на 100 об'єктів та дві кнопки prev next, щоб при завантажені сторінки з'являються перші 10 об'єктів,
// при натисканні next виводяться настпні 10 об'єктів, при натисканні prev виводяться попередні 10 об'єктів

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'yehor', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 36, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'vasya', age: 31, status: false}
];

const content = document.getElementById('content');
const ul = document.getElementById("ul");

const itemsOnPage = 10;
let currentPage = 1;

const numPages = (usersArr) => {
    return Math.ceil(usersArr.length / itemsOnPage);
};

let pages = numPages(users);

const changePage = (page) => {
    if (page >= 1 && pages >= 0 && !users.length) {
        return;
    }

    if (page < 1) page = 1;
    if (page > pages) page = pages;

    ul.innerHTML = "";

    let min = (page - 1) * itemsOnPage;
    let max = page * itemsOnPage;

    for (let i = min; i < max && i < users.length; i++) {
        if (i <= 0) i = 0;

        if (i <= users.length && i >= 0) {
            ul.innerHTML += `
              <li class="item">
                   <h4> ${users[i].name.toUpperCase()}</h4>
                  <p>age: ${users[i].age}  <br> status: ${users[i].status}</p>
              </li>`;
        }
    }
};

const nextPage = () => {
    if (currentPage < pages) changePage(++currentPage);
};

const prevPage = () => {
    if (currentPage > 1) changePage(--currentPage);
};

window.onload = () => {
    changePage(1);
    counter();
};

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

const tableForm = document.forms.tableForm;
const columnNumber = document.getElementById('column');
const cellNumber = document.getElementById('cell');
const cellContent = document.getElementById('cellContent');
const table = document.getElementById('table');

const tr1 = document.createElement('tr');
const tr2 = document.createElement('tr');

tableForm.onsubmit = function (e) {
    e.preventDefault();

    let tableData = {column: this.column.value, cell: this.cell.value, content: this.content.value};

    let numСolumn = tableData.column;
    let numCell = tableData.cell;

    for (let i = 0; i < numСolumn; i++) {
        let td1 = document.createElement('td');
        td1.innerText = `column name `
        tr1.appendChild(td1);
    }

    for (let i = 0; i < numCell; i++) {
        let td2 = document.createElement('td');
        td2.innerText = tableData.content;
        tr2.appendChild(td2);
    }

    table.append(tr1, tr2);

    columnNumber.value = '';
    cellNumber.value = '';
    cellContent.value = '';


};

