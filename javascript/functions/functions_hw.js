// 1. Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
// let a = +prompt ("1");
// let b = +prompt ("2");
// let c = +prompt ("3");
// function compare(a, b, c) {
// 	if (a > b && b > c) {
// 		return c;
// 	} else if ( c > b && b > a) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// console.log(compare(a, b, c));

//Создайте функцию, которая получает в качестве аргументов 
//значения суток, часов и минут, а возвращает соответствующее им количество секунд.

// let days = +prompt ("days");
// let hours = +prompt ("hours");
// let minutes = +prompt ("minutes");
// function sec() {
// 	let x = days * 24 + hours;
// 	let y = x * 60 + minutes;
// 	let z = y * 60;
// 	return z;
// }
// console.log(sec());

//Напишите рекурсивную функцию для подсчёта факториала числа.

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(6));

//Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд.
//Например, если на вход функция получает 1234, вернуть она должна 4321.

let num = +prompt ("введите число")
 function rec(num) {
 	let x = 0;
 	while(num != 0) {
 		x = num / 10;
 		num = Math.floor(num % 10);
 		return num;


 	}

 }
 console.log(rec(num));
