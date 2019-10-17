// Написать функцию `promiseReduce`, которая получает на вход -
//   массив асинхронных функций `asyncFunctions`, возвращающих `Promise`,
//   -reduce функцию и стартовое значение `initialValue`.

// `promiseReduce`
// поочередно вызывает переданные асинхронные функции
// и выполняет `reduce`
// функцию сразу при получении результата до вызова следующей асинхронной функции.

// `reduce`
// должна отрабатывать аналогично[`Array.prototype.reduce`]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// то есть запоминать результат предыдущей итерации


var fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1);
}
var fn2 = () => new Promise(resolve => {
  console.log('fn2');
  setTimeout(() => resolve(2), 1000);
})

function promiseReduce(asyncFunctions, reduce, initialValue) {
  return asyncFunctions.reduce((accum, current) => {
    return accum.then(value => {
      return current().then(value2 => {
        return reduce(value, value2);
      });
    })
  }, Promise.resolve(initialValue));
}


promiseReduce([fn1, fn2],
  function (memo, value) {
    console.log('reduce');
    return memo + value;
  }, 1).then(console.log);


/*
Вывод в консоль
fn1
fn2
reduce
=> Promise { <pending> }
reduce
2
*/