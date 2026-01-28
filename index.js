let value = 10; // число
value = "текст"; // теперь строка — ошибки не будет
console.log(value); // 'текст'

const fixed = 100;
// fixed = 200;     // ошибка: Assignment to constant variable

const name = "Алексей";
const age = 20;
const userProfile = {
    name, // вместо name: name
    age, // вместо age: age
    isStudent: true,
};

console.log(userProfile);
