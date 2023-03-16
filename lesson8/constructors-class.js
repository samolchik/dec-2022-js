// - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Vasya', 'Petrov', 'vasya@ukr.net', '067-326-33-23'),
    new User(2, 'Olya', 'Samiilenko', 'olya@ukr.net', '066-459-33-99'),
    new User(3, 'Kostya', 'Nosov', 'nosov@ukr.net', '066-678-33-29'),
    new User(4, 'Ilya', 'Gab', 'gab@gmail.com', '067-459-11-22'),
    new User(5, 'Yegor', 'Gab', 'yegor20@ukr.net', '067-123-23-32'),
    new User(6, 'Kat', 'Gofeld', 'olya@ukr.net', '067-432-33-00'),
    new User(7, 'Mark', 'Frolov', 'frolov@gmail.com', '067-459-00-29'),
    new User(8, 'Olya', 'Marko', 'olya@gmail.com', '067-459-33-24'),
    new User(9, 'Igor', 'Ostapenko', 'igor123a@ukr.net', '066-777-33-29'),
    new User(10, 'Anna', 'Alkhim', 'alkhim@ukr.net', '097-459-33-11')
];

console.log('users', users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterUses = users.filter((user) => user.id % 2 === 0);

console.log('filterUses', filterUses);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortUses = users.sort((a, b) => b.id - a.id);

console.log('sortUses', sortUses);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    // this.id = id++;
    // this.name = name;
    // this.surname = surname;
    // this.email = email;
    // this.phone = phone;
    User.call(this, id, name, surname, email, phone,)
    this.order = order;
}

let clients = [
    new Client(1, 'Leanne', 'Bret', 'Sincere@april.biz', '067-459-33-23', ['milk', 'tea', 'bread']),
    new Client(2, 'Ervin', 'Antonette', 'Ervin@ukr.net', '067-339-33-23', ['milk', 'tea', 'bread', 'butter', 'tomato']),
    new Client(3, 'Clementine', 'Samantha', 'Clementine@ukr.net', '067-433-33-23', ['milk', 'tea', 'bread', 'salad', 'tomato']),
    new Client(4, 'Lene', 'Brott', 'Brott@april.biz', '067-459-33-83', ['milk', 'tea']),
    new Client(5, 'Makvin', 'Molnia', 'Molnia@ukr.net', '066-339-33-23', ['milk', 'tea', 'bread', 'coffee']),
    new Client(6, 'Mark', 'Zuckerberg', 'Zuckerberg@april.biz', '099-433-33-23', ['milk', 'tea', 'bread']),
    new Client(7, 'Marta', 'Petrova', 'Sincere@april.biz', '057-459-33-83', ['milk', 'tea', 'bread', 'potato', 'pepper', 'tomato', 'cucumber']),
    new Client(8, 'Erik', 'Gofeld', 'Gofeld@ukr.net', '067-339-00-23', ['milk', 'tea', 'bread', 'butter', 'tomato', 'cucumber']),
    new Client(9, 'Gosha', 'Frolov', 'Frolov@ukr.net', '067-433-33-00', ['milk', 'tea', 'tomato', 'cucumber']),
    new Client(10, 'Piter', 'Parker', 'Parker@ukr.net', '067-433-33-12', ['milk', 'tea', 'bread'])
];

console.log('clients', clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log('sortClients', sortClients);

// - Створити функцію конструктор, яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, modelYear, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.modelYear = modelYear;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.driver = {};
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.modelYear}, об'єм двигуна - ${this.engine}, максимальна швидкість - ${this.maxSpeed}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        const speed = this.maxSpeed += newSpeed
        // this.maxSpeed = speed < 0 ? 0 = speed
    };
    this.changeYear = function (newValue) {
        this.modelYear = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

const car = new Car('Q8', 'audi', '2018', '240', '4');

car.drive();
car.info();
car.increaseMaxSpeed('260');
car.changeYear('2022');
car.addDriver({price: '234000$', color: 'white'});

console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarNew {
//     constructor(model, manufacturer, modelYear, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.modelYear = modelYear;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = {};
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         this.info = function () {
//             console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.modelYear}, об'єм двигуна - ${this.engine}`)
//         };
//     }
//
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//
//     changeYear = function (newValue) {
//         this.modelYear = newValue;
//     };
//
//     addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// const carNew = new CarNew('Q8', 'audi', 2018, 240, 4);
//
// carNew.drive();
// carNew.info();
// carNew.increaseMaxSpeed(260);
// carNew.drive();
// carNew.changeYear(2022);
// carNew.addDriver({price: '234000$', color: 'white'});
//
// console.log(carNew);

// Сторити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const cinderellas = [
    new Cinderella('Sophi', 23, 39),
    new Cinderella('Anna', 33, 39),
    new Cinderella('Lisa', 24, 36),
    new Cinderella('Sonya', 22, 40),
    new Cinderella('Olya', 23, 37),
    new Cinderella('Ada', 37, 38),
    new Cinderella('Eva', 19, 36),
    new Cinderella('Linda', 23, 35),
    new Cinderella('Keti', 31, 37),
    new Cinderella('Eva', 23, 36),
]

console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомогою класу, який має поля ім'я, вік, туфелька, яку він знайшов.

function Prince(name, age, shoes) {
    this.name = name;
    this.age = age;
    this.shoes = shoes;
}

const prince = new Prince('Alex', 23, 37);

//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.shoes) {
        let myCinderella = cinderellas[i];

        console.log('myCinderella', myCinderella);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.

const findMyCinderella = cinderellas.find((cinderella) => cinderella.footSize === prince.shoes);
console.log('findMyCinderella', findMyCinderella);