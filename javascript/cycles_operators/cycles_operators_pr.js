//получить два числа - вывести в консоль большее

// let num = +prompt('введите первое число');
// let num2 = +prompt('введите второе число');
// if (num > num2) {
// 	console.log(num);
// } else if (num < num2) {
// 	console.log(num2);
// } else {
// 	console.log('введите разные числа');
// }

// получить два числа - вывести знак их произведения.

// let x = +prompt('введите первое число');
// let y = +prompt('введите второе число');
// if (x * y > 0) {
// 	console.log('+');
// } else if (x * y < 0) {
// 	console.log('-');
// } else {
// 	console.log(0);
// }

//получить три числа - вывести их в порядке возростания

// let q = +prompt('введите первое число');
// let w = +prompt('введите второе число');
// let e = +prompt('введите третье число');
// if (q <= w && w <= e) {
// 	console.log(q, w, e);
// } else if (e <= w && w <= q) {
// 	console.log (e, w, q);
// } else if (q <= e && e <= w){
// 	console.log(q , e , w);
// } else if (e <= q && q <= w) {
// 	console.log(e, q, w);
// } else if (w <= e && e <= q) {
// 	console.log(w, e, q);
// } else if (w <= q && q <= e) {
// 	console.log (w, q, e);
// }

// переписать первую задачу использовав тернарный оператор вместо if

// let num = +prompt('введите первое число');
// let num2 = +prompt('введите второе число');
// (num > num2) ? console.log(num) : console.log(num2);

// получить число, от 1 до 5 получить разные сообщения, далее - одинаковые. Switch.

// let z = +prompt('введите любое число');
// switch (z) {
// 	case (1): console.log('единица'); break;
// 	case (2): console.log('двойка'); break;
// 	case (3): console.log('тройка'); break;
// 	case (4): console.log('четверка'); break;
// 	case (5): console.log('пятерка'); break;
// 	default: console.log('что-то большее пяти');
// }

// вывести в консоль все простые числа от 2 до x (ПРОВЕРИТЬ ПЕРВОЕ РЕШЕНИЕ)

// let num = +prompt ('write number');
// function getPrimeNumbers(num) {
// 	if (num < 1) return [];
// 	var primes = [2]; // 2 - единственное простое четное число
// 	for (var n = 3; primes.length < num; n += 2) {
// 		// инкремент на 2
// 		var x = true, max_m = Math.sqrt(n); // не надо проверять делители больше корня из (n)
// 		for (var i = 0; (m = primes[i++]) <= max_m;) //возможные делители только меньшие простые числа
// 			if (!(n % m)) {
// 				p = false;
// 				break;
// 			}
// 		p && primes.push(n);
// 	}
// 	return primes;
// }

//ВТОРОЕ РЕШЕНИЕ

// var num = +prompt ('Введите число Х');
// mark:
// for(var i = 2; i < num; i++) {
// 	for(var j = 2; j < i; j++) {
// 		if (i % j == 0) continue mark;
// 	}
// 	console.log(i);
// }

// вывести в консоль все простые числа от 2 до x

// var num = +prompt ('Введите число Х');
// mark:
// for(var i = 2; i < num; i++) {
// 	for(var j = 2; j < i; j++) {
// 		if (i % j == 0) continue mark;
// 	}
// 	console.log(i);
// }

//вывести в консоль все четные числа от х до 0 ДОПИСАТЬ!!!!!!!!!!!

// var num = +prompt ('Введите число X');
// mark:
// for(var i = 0; i < num; i--) {
// 	console.log(i);
// 	break;
// }
