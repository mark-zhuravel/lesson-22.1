console.log('#5. JavaScript homework example file')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

// const counter = function() {}

// console.log(counter()) // 0
// console.log(counter()) // 1
// console.log(counter(100)) // 100
// console.log(counter()) // 101
// console.log(counter()) // 102
// console.log(counter(500)) // 500
// console.log(counter()) // 501
// console.log(counter()) // 502
// console.log(counter(0)) // 0
// console.log(counter()) // 0
// console.log(counter()) // 1

console.log('Task 1')

console.log('1 ВАРИАНТ');

const counter1 = function() {
    let count = 0;
    return function(n) {
      if (typeof n === 'number') {
        count = n;
      }
      return count++;
    };
  };

const counterFunc1 = counter1();
    
console.log(counterFunc1()); // 0
console.log(counterFunc1()); // 1
console.log(counterFunc1(100)); // 100
console.log(counterFunc1()); // 101
console.log(counterFunc1()); // 102
console.log(counterFunc1(500)); // 500
console.log(counterFunc1()); // 501
console.log(counterFunc1()); // 502
console.log(counterFunc1(0)); // 0
console.log(counterFunc1()); // 0
console.log(counterFunc1()); // 1

console.log('2 ВАРИАНТ');

const counterFunc2 = (function() {
    let count = 0;
    return function(n) {
        if (typeof n === 'number') {
            count = n;
        };
        return count++;
    };
})();

console.log(counterFunc2()); // 0
console.log(counterFunc2()); // 1
console.log(counterFunc2(100)); // 100
console.log(counterFunc2()); // 101
console.log(counterFunc2()); // 102
console.log(counterFunc2(500)); // 500
console.log(counterFunc2()); // 501
console.log(counterFunc2()); // 502
console.log(counterFunc2(0)); // 0
console.log(counterFunc2()); // 0
console.log(counterFunc2()); // 1








/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

// const counterFactory = function () {}

// console.log(counterFactory.value()) // 0
// counterFactory.increment()
// counterFactory.increment()
// counterFactory.increment()
// console.log(counterFactory.value()) // 3
// counterFactory.decrement()
// counterFactory.decrement()
// console.log(counterFactory.value()) // 1
// console.log(counterFactory.value(100)) // 100
// counterFactory.decrement()
// console.log(counterFactory.value()) // 99
// console.log(counterFactory.value(200)) // 200
// counterFactory.increment()
// console.log(counterFactory.value()) // 201

console.log('Task 2')
function counter() {
    let count = 0; 
    return {
        value: function(n) {
            if (typeof n === 'number') {
            count = n;
            };
            return count;
        },
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
    };
};

const counterFactory = counter();


console.log(counterFactory.value()) // 0
counterFactory.increment()
counterFactory.increment()
counterFactory.increment()
console.log(counterFactory.value()) // 3
counterFactory.decrement()
counterFactory.decrement()
console.log(counterFactory.value()) // 1
console.log(counterFactory.value(100)) // 100
counterFactory.decrement()
console.log(counterFactory.value()) // 99
console.log(counterFactory.value(200)) // 200
counterFactory.increment()
console.log(counterFactory.value()) // 201





/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

// const list = [12, 23, 100, 34, 56, 9, 233]
// const myMax = () => {}

// console.log(myMax(list)); // 233

console.log('Task 4')

const list = [12, 23, 100, 34, 56, 9, 233]

const myMax = arr => {
    return Math.max.apply(null, arr); // null, потому что метод Math.max не использует контекст this и передача любого значения (в данном случае null) не повлияет на результат.
};

console.log(myMax(list)); // 233






/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

// const myMul = () => {}

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

// const myDouble

// console.log(myDouble(3)) // = myMul(2, 3) = 6
// console.log(myDouble(4)) // = myMul(2, 4) = 8
// console.log(myDouble(5)) // = myMul(2, 5) = 10

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

// const myTriple

// console.log(myTriple(3)) // = myMul(3, 3) = 9
// console.log(myTriple(4)) // = myMul(3, 4) = 12
// console.log(myTriple(5)) // = myMul(3, 5) = 15

console.log('Task 5')

console.log('Using bind()');

const myMul = (a, b) => a * b;

const myDouble = n => myMul.bind(null, 2)(n);

const myTriple = n => myMul.bind(null, 3)(n);


console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10

console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15



console.log('Using no bind()');

const myDoubleNoBind = n => myMul(2, n);

const myTripleNoBind = n => myMul(3, n);


console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10

console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15



  