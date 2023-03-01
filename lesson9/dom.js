// - Cтворити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі (довільні значення): колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement('div');
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

const text = document.createElement('h3');
text.classList.add('desc');
text.innerText = 'UKRAINE';
block.appendChild(text);

document.body.appendChild(block);
// document.body.append(block.cloneNode(true));


// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const arr = ['Main', 'Products', 'About us', 'Contacts'];

const ul = document.createElement('ul');

for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;

    ul.appendChild(li);
}

// document.body.appendChild(ul);


// - Є масив coursesAndDurationArray
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// Завдання робити через цикли.

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const item = document.createElement('div');
item.classList.add('courses');

for (const element of coursesAndDurationArray) {
    const heading = document.createElement('h1');
    heading.innerText = element.title;

    const description = document.createElement('p');
    description.innerText = element.monthDuration;

    item.append(heading, description);
}

// document.body.appendChild(item);

// - Є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте, де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

const mainBox = document.createElement('div');
mainBox.classList.add('main-box')

for (const simpson of simpsons) {
    const member = document.createElement('div');
    member.classList.add('member');

    const name = document.createElement('h2');
    name.innerText = simpson.name;

    const surname = document.createElement('h3');
    surname.innerText = simpson.surname;

    const age = document.createElement('p');
    age.innerText = `${simpson.age} р.`;

    const info = document.createElement('p');
    info.innerText = simpson.info;
    info.classList.add('info');

    member.append(name, surname, age, info);

    const img = document.createElement('img');
    img.src = simpson.photo;

    const photo = document.createElement('div');
    photo.classList.add('photo');

    photo.appendChild(img);

    const boxUser = document.createElement('div');
    boxUser.classList.add('box-user');

    boxUser.append(member, photo);

    mainBox.append(boxUser);
}

// document.body.appendChild(mainBox);
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');

for (const item of coursesArray) {
    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.innerText = item.title;

    const monthDuration = document.createElement('h4');
    monthDuration.innerText = `Duration: ${item.monthDuration} months & ${item.hourDuration} hours`;

    const modules = document.createElement('ul');

    for (const module of item.modules) {
        const li = document.createElement('li');
        li.innerText = module;

        modules.appendChild(li);
    }

    container.append(title, monthDuration, modules);
    mainContainer.append(container);
}

// document.body.appendChild(mainContainer);

//     - Створити довільний елемент з id = text та створити кнопку. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const button = document.createElement('button');
button.setAttribute('id', 'text' );
button.innerText = 'Click';
// document.body.appendChild(button);

// const buttonId = document.getElementById("text");

// const toggleKlass = () => {
//     buttonId.classList.toggle('text');
// };
//
// buttonId.addEventListener("click", toggleKlass);

//   - створити інпут, який приймає вік людини та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const input = document.createElement('input');
const btn = document.createElement('button');
btn.setAttribute('id', 'btn' );
btn.innerText = 'Відправити'

// document.body.append(input, btn);

const infoUser = document.getElementsByTagName("input");
const sendBtn = document.getElementById("btn");




// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)