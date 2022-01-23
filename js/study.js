"use strict";

const soldier = {
  health: 400,
  armor: 100,
  sayHello() {
    console.log('Hello');
  }
};

const john = Object.create(soldier);

// указываем soldier, как прототип для объекта john 
// john.__proto__ = soldier;  // устаревший метод
Object.setPrototypeOf(john, soldier); // устанавливаем прототип для john от soldier
console.log(john.armor);
john.sayHello();