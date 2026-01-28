// В браузере:
//console.log(window.innerHeight); // высота окна
// В Node.js:
console.log(global.process.version); // версия Node.js
// Универсально:
//console.log(globalThis === window); // true в браузере

const myCity = {
    city: "Нижний Новгород",
    greeting() {
        // вместо greeting: function() {...}
        console.log("Greetings!");
    },
};
myCity.greeting(); // вызов метода
