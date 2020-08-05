//1
// Функция, которая принимает три числа: два первых катеты, третье гипотенуза.

function pifagor (a, b, c) {
	if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
		return false;
	} else if  ((a <= 0) || (b <= 0) || (c <= 0)) {
		return false;
	} else if  ((a*a) + (b*b) == (c*c)) {
		return true;
	} else {
		return false;
	}
}
console.log(pifagor('avb', 4, 5));

//2
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений.

// function wordRepeat (str, n) { 
// 	let result = '';
// 	for (let i = 1; i <= n; i++) {
// 		result += str;
// 	}
// 	return result;
// }
// console.log(wordRepeat('word', 5));

function wordRepeat (str = '', n = 2) { 
	let result = '';
	for (let i = 1; i <= n; i++) {
		result += str;
	}
	return result;
}
console.log(wordRepeat());

//3
// Создайте функцию, которая принимает два аргумента - количетсво учеников в классе и количество парт в кабинетею
// Функция возвращает строку вида "не хватает двух парт" / "1 лишняя парта".

function howMuch(pupils, desk) {
	let n = pupils - (desk * 2);
	if (n % 2 != 0) {
		n += 1;
	}
	if (n / 2 > 0) {
		return (n / 2) + ' desks are missing';
	} else if (n / 2 < 0) {
		return ((n / 2) * -1) + ' extra desks';
	} else {
		return ('enough desks');
	}
}
console.log(howMuch(2, 4));

//4
// Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. 
// Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание: 

function rating(mark) {
	switch(mark) {
		case 0: 
			return 'Error';
		case 1:
			return 'Unsatisfactory';
		case 2:
			return 'Unsatisfactory';
		case 3:
			return 'Satisfactory';
		case 4:
			return 'Satisfactory';
		case 5:
			return 'Almost good';
		case 6:
			return 'Good';
		case 7:
			return 'Very good';
		case 8:
			return 'Almost excellent';
		case 9:
			return 'Excellent';
		case 10:
			return 'Brilliant';
		default:
			return 'Its not a mark';
	}
}

let mark = +prompt('Enter your mark');
console.log(rating(mark));

//5
//Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.

function untilZero() {
	let n;
	do {
		n = +prompt('Enter random number');
	} while (n != 0);
}
untilZero();
//Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100
//выводила эту сумму в консоль, а возвращала количество введённых чисел.

// function hundred() {
// 	let number; 
//  	hundred = 0; 
//  	let i = 0; 
// 		do {
// 			number = +prompt('Enter random number less than a hundred');
// 			hundred += number;
// 			i++
// 		} while (hundred < 100);
// 			console.log(i);
// 	}
// hundred();

//Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.

// function primeNumber(a) {
// 	if (isNaN(a)) {
// 		return 'It is not a number';
// 	} else if (a == 2) {
// 		return 'It is a prime number';
// 	} else if (a % 2 == 0) {
// 		return 'It is not a prime number';
// 	} else {
// 		return 'It is a prime number';
// 	}
// }
// console.log(primeNumber('awcw'));

//Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца.
//Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна),
//к которому относится месяц. Если нет –сообщение об ошибке.

// function seasons(month) {
// 	switch(month) {
// 		case 12:
// 		case 1:
// 		case 2:
// 			return 'It is a winter';
// 		case 3:
// 		case 4:
// 		case 5:
// 			return 'It is a sping';
// 		case 6:
// 		case 7:
// 		case 8:
// 			return 'It is a summer';
// 		case 9:
// 		case 10:
// 		case 11:
// 			return 'It is a autumn';
// 		default: 
// 			return 'Error! Enter number less than 12';
// 	}
// }
// console.log(seasons(15));

//Создайте функцию, которая выводит в консоль числа от 10 до 99, 
//заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).
// 
// function seven()  {
// 	for (let a = 99; a >= 10; a--) {
// 		if (a % 7 == 0 || a % 10 == 7) {
// 		console.log(a)
// 		}
// 	}
// }
// seven();

//Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители.

// function divisor() {
// 	for (let x = 2; x <=20; x++) {
// 		for (let y = 2; y <= 9; y++) {
// 			if (x % y == 0) console.log(y + " делитель числа " + x);
// 		}
// 	}
// }
// divisor();

//сделать задание 10 в общем виде.

// function noName(x, y) {
// 	for (let i = x; i <= y; i++) {
// 		for (let j = x; j <= i; j++) {
// 			if (i % j == 0) {
// 				console.log(j + " делитель числа " + i);
// 			}
// 		}  
// 	}
// }
// noName(1, 10);

//Создайте функцию с параметрами size (число) и unit (строка). 
//В unit передаются единицы измерения информации («Кб», «Мб», «Гб»), 
//в size – количество таких единиц. Функция возвращает количество байт в size.

// function howMuchIs(size, unit) {
// 	switch (unit) {
// 		case "Кб":
// 		case "кб":
// 		case "кБ":
// 		case "КБ":
// 			return "В " + size + " Кб" + " содержится " + size * 1024 + " байт";
// 			break;
// 		case "Мб":
// 		case "мб":
// 		case "мБ":
// 		case "МБ":
// 			return "В " + size + " Мб" + " содержится " + size * 2 ** 20 + " байт";
// 			break;
// 		case "Гб":
// 		case "гб":
// 		case "гБ":
// 		case "ГБ":
// 			return "В " + size + " Гб" + " содержится " + size * 2 ** 30 + " байт";
// 			break;
// 		default: 
// 			alert ("Корявые данные");
// 			break;
// 	}
// }
// console.log(howMuchIs(500, "Гб"));

//Создайте функцию, которая ищет наибольший общий делитель двух чисел.

// function biggestDivisor(x, y) {
// 	let a = 1;
// 	let b = 0;
// 	while (a <= x) {
// 		if(x % a == 0 && y % a == 0) {
// 			b = a;
// 		}
// 		a++;
// 	}
// 	console.log(b);
// }
// biggestDivisor(45, 4);

// Решите предыдущую задачу через рекурсию.

// function divisorAgain(a, b) {
// 	if (a == 0) {
// 		return b;
// 	} else {
// 		return divisorAgain(b % a, a);
// 	}
// }
// console.log(divisorAgain(34, 50));

//Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n, 
//будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).

// function words(n) {
// 	if (n >= 5 && n <= 20 || n % 10 == 0 || n == 0 || n % 10 > 4 && n % 10 <= 9) {
// 	return n + ' карандашей';
// } else if (n > 1 && n < 5 || n % 10 < 5 && n % 10 > 1) {
// 	return n + ' карандаша';
// } else if (n == 1 || n % 10 == 1) {
// 	return n + ' карандаш';
// }
// }
// console.log(words(1));

//Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.

function sumOfSquares(z) {
    for(let x = 1; x < z; x++ ){
        for(let y = z; y >= x; y--){
            if(x * x + y * y == z){
                return true;
            }
        }
    }
    return false;
}
console.log(sumOfSquares(34));
