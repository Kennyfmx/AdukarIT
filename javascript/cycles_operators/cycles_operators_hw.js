//Задача 1. (Квартиры.Подъезды)

// let flatNumber = +prompt ('Введите номер квартиры');
// if (flatNumber <= 20) {
// 	console.log('Первый подъезд');
// } else if (flatNumber > 20 && flatNumber <= 40) {
// 	console.log ('Второй подъезд');
// } else if (flatNumber > 40 && flatNumber <= 60) {
// 	console.log ('Третий подъезд');
// } else if (flatNumber > 60 && flatNumber <= 80) {
// 	console.log ('Четвертый подъезд');
// } else {
// 	console.log ('Пятый подъезд');
// } 

//Задача 2. (марки автомобилей)

// let carModel = prompt ('Write Car Brand');
// switch (carModel) {
// 	case ('tesla'): 
// 	case ('TESLA'): 
// 	case ('Tesla'): 
// 	console.log(carModel + ' Made in USA'); break;
// 	case ('Mercedes-Benz'):
// 	case ('mercedes-benz'):
// 	case ('Mercedes-benz'):
// 	case ('Mercedes Benz'):
// 	case ('mercedes benz'):
// 	case ('Mercedes benz'):
// 	case ('MB'):
// 	case ('mb'):
// 	case ('BMW'):
// 	case ('bmw'):
//	case ('audi'):
//	case ('AUDI'):
//	case ('Audi'):
// 	console.log(carModel + ' Made in Germany'); break;
// 	case ('Peugeot'):
// 	case ('peugeot'):
// 	console.log (carModel + ' Made in France'); break;
// 	case ('Rolls-Royce'):
// 	case ('rolls-royce'):
// 	case ('Rolls Royce'):
// 	case ('rolls royce'):
// 	console.log(carModel + ' Made in England'); break;
// 	default: console.log(carModel + ' Unknown place of origin');
// }

// Задача 3. Високосный год.
// Год високосный, если он не кратен 4, но кратен 100. Или кратен 100, но при этом не кратен 400.

// let year = +prompt ('Какой год и узнай будет ли он високосный?');
// if ((!(year % 4) && year % 100) || !(year % 400)) {
// 	console.log(year + ' Високосный год');
// } else {
// 	console.log(year + ' не високосный год');
// }


//Задача 4. Таблица умножения.

// let x = +prompt('Введите любое число от 1 до 20:');
// for (let y = 1; y <= 10; y++) {
// 	console.log(x + '*' + y + '=' + (x * y));
// }

// Задача 5. Выведите в консоль сумму всех нечетных чисел от 0 до 50. Continue.

var x, var sum = 0;
	for (var x = 1; x <= 50; x++) {
		sum += 2;
	}
console.log('сумма всех нечетных чисел равна: ', sum);
