// Напишите функцию, которая получает три числа и возвращает их сумму.

// let a = +prompt();
// let b = +prompt();
// let c = +prompt();
// function sum() {
// 	return a+b+c;
// }
// console.log(sum());

// Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.

// function sum(x) {
//   let y = 0;
//   for (let i = 0; i <= x; i++) {
//     y += i;
//   }
//   return y;
// }
// console.log(sum(+prompt('введите число "x')));

// Напишите функцию, которая подсчитывает сумму цифр числа.

// let num = +prompt('введите число');
// let x = 0;
// while(num > 0) {
//   x += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(x);

// Напишите функцию, которая считает факториал числа.
// let x = +prompt();
// function factorial(x) {
// 	return (x != 1) ? x * factorial(x - 1) : 1;
// 	}
// console.log(factorial());

// function factorial(n) {
//   	return (n != 1) ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(n));

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(6));

// новая группа
function sum1ToX(x) {
	let sum = 0;
	for (let i = 1; i <= x; i++)
		sum = sum + i; 
	//sum +=i
	return sum;
}
console.log(sum1ToX());


function factorial(x) {
	let result = 1;
	for ( ; x > 1; x--) {
		result = result * x;
	}
	return result;
}
console.log(factorial())
