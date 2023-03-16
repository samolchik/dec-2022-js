// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str = 'hello world';

console.log('length = ', str.length)

// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('upperCase =', str.toUpperCase());

// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const STR = 'HELLO WORLD';

console.log('lowerCase =', STR.toLowerCase());

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';

// const strClean = strDirty
//     .replaceAll(' d', 'd')
//     .replaceAll('g   ', 'g')

const strClean = strDirty.trim()

console.log('strDirty =', `${strClean}`);

// 5. Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';

const stringToArray = str1.split(' ');

console.log('stringToArray =', stringToArray);

// 6. Є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомогою map  перетворити всі об'єкти в масиві на стрінгові.

const array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const creatorStr = array.map((value) => String(value));

console.log('creatorStr =', creatorStr);

// 7. Cтворити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const nums = [11, 21, 3];
const sortNums = (direction) => {
    const sort = nums.sort((a, b) => {

        if (direction === 'ascending') {
            return a - b;
        } else if (direction === 'descending') {
            return b - a;
        }
    });
    return sort;
}

console.log('sortNums =', sortNums('descending'));

// 8. Є масив let coursesAndDurationArray:
//    - відсортувати його за спаданням за monthDuration
//    - відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//    - за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const sort = coursesAndDurationArray.sort((a, b) =>
    a.monthDuration - b.monthDuration
);

console.log('sort', sort);

const filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);

console.log('filter', filter);

const addId = coursesAndDurationArray.map((value, index) => ({
        ...value, id: index + 1
    })
)

console.log('addId', addId);

//   9. Описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cards = [
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black',
    },
];


const findSpadeAce = cards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log('findSpadeAce', findSpadeAce);

const filter6 = cards.filter(card => card.value === '6');
console.log('filter6', filter6);

const filterRed = cards.filter(card => card.color === 'red');
console.log('filterRed', filterRed);

const filterDiamond = cards.filter(card => card.cardSuit === 'diamond');
console.log('filterDiamond', filterDiamond);

// const filterClubs = cards.filter(card => (card.value > +'8' || card.value > '8') && card.cardSuit === 'clubs');
const filterClubs = cards.filter(card =>card.cardSuit === 'clubs' && ['9', "10", 'ace','jack','queen','king'].includes(card.value));
console.log('filterClubs', filterClubs);

//   10.  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// V1
// const box = cards.reduce((acc, current) => {
//     acc[current.cardSuit].push(current);
//   return acc;
// }, { spade:[], diamond:[], heart:[], clubs:[] });
//
// console.log('box', box)

// V2
const sortCardSuit = cards.reduce((acc, item) => {

    switch (item.cardSuit) {
        case 'spade':
            acc.spades.push(item);
            break;
        case 'diamond':
            acc.diamonds.push(item);
            break;
        case 'heart':
            acc.hearts.push(item);
            break;
        case 'clubs':
            acc.clubs.push(item);
            break;
    }

    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log('sortCardSuit', sortCardSuit);

//   11.  Взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//       - написати пошук всіх об'єктів, в який в modules є sass
//       - написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass']
    }
];

coursesArray.forEach(value => {

    // if (!value.modules.includes('sass')) {
    //     return value;
    // }

    if (!value.modules.includes('docker')) {
        return value;
    }
    console.log('resultSearch = ', value)

    return value;
});


