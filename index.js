console.log("Запуск кода в VS Code");

const user = {
    name: "Андрей",
    age: 30,
    isStudent: true,
};

console.log("Hello world"); // вывод строки
console.dir(console); // просмотр свойств объекта console
console.table({ a: 1, b: 2 }); // вывод в виде таблицы

const userName = "Андрей"; // const — значение не изменится
let userAge = 25; // let — можно изменить позже
userAge = 26; // изменяем значение

console.log(userName, userAge);

const str = "текст"; // string
const num = 42; // number
const bool = true; // boolean
const empty = null; // null
const notDefined = undefined; // undefined
const obj = { key: "value" }; // object (ссылочный тип)

const city = {
    name: "My city",
    population: 8000000,
};

city.name = "Dzerzhinsk"; // изменение свойства
city.country = "RUSSIA"; // добавление свойства
delete city.population; // удаление свойства

console.log(city);
