//PRACTICE:

//Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, каждый из которых – случайное число от 1 до 50.

function getArray() {
	let array = [];
	for (let i = 0; i < 20; i++) {
		array[i] = Math.floor(Math.random() * (50 - 1));
	}
	return array;
}
console.log(getArray());

//Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива, минимальное и максимальное значения элементов.

function getNewArray(length, min, max) {
	let array = [];
	for (let i = min; i < length; i++) {
		array[i] = Math.floor(Math.random() * (max - 1));
	}
	return array;
}
console.log(getNewArray(20, 0, 50));

//Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.

function checkDomen(string) {
	// string = "https://fmx.by/.../main.html"
	if (string.slice(0, 8) == "https://" && string.slice(-5) == ".html") {
		return true
	} else {
		return false
	}
}
console.log(checkDomen("https://fmx.by/.../main.html"));

//Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.

function howMuch(string, symbol) {
	let sum = 0;
	for (let i = 0; i <= string.length; i++) {
		if(string.charAt(i) == symbol) {
			sum++
		}
	}
	return sum;
}
console.log(howMuch("Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.", "с"));

//Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом (например, 'A' == 'a').string.charAt(i).toUpperCase() == string.charAt(i).toLowerCase()

function howMuchNew(string, symbol) {
	let sum = 0;
	for (let i = 0; i <= string.length; i++) {
		if (string.charAt(i).toLowerCase() == symbol) {
			sum++
		}
	}
	return sum;
}
console.log(howMuchNew("Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.", "Н"));

//Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».

function date() {
	let now = new Date();
	let dateOptions = {
		year: 'numeric',
  		month: 'long',
  		day: 'numeric'
	};
	console.log(now.toLocaleString("ru", dateOptions));
};
date();

//Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.

function time() {
	let now = new Date();
	let dateOptions = {
		hour: 'numeric',
  		minute: 'numeric',
  		second: 'numeric'
	};
	console.log(Date.parse(now));
	console.log(Date.parse(now.toLocaleString(dateOptions)));
}
time();

//Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит буквы «ф», сгенерируйте собственную ошибку. Вызовите функцию так, чтобы при возникновении «поймать» ошибку в try/catch.
// let string = prompt();
// function catchError(string) {
// 	try {
// 		for (let i = 0; i <= string.legth; i++) {
// 			if (i != 'ф') {
// 				throw new Error ("Буква Фэ не выявлена!");
// 			}
// 		} 
// 	} catch (error) {
// 			console.error("Error-Error-Error");
// 			console.log(error.message);
// 		} finally {
// 			console.log('Continue');
// 		}
// 	}
// catchError();


//HOMEWORK

//Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый. Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения. Если округление sqrt по обычным математическим правилам сходится с его округлением через floor, то floor = true, а ceil = false. Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19, тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.

//function getNewArray(length, min, max) {
//	let array = [];
//	for (let i = min; i < length; i++) {
//		array[i] = Math.floor(Math.random() * (max - 1));
//	}
//	return array;
//}
//console.log(getNewArray(20, 0, 50));

// function superNewArray() {

// }


//Напишите функцию, которая определяет, является ли строка палиндромом.

function palindrome(word) {
	console.log(word);
	let smallLetters = word.toLowerCase();
	let newWord = smallLetters.split('').reverse().join('');
	console.log(newWord);
	if (smallLetters == newWord) {
		return true;
	} else {
		return false;
	}
}
console.log(palindrome('SOS'));

//Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.

function returnSymbol(str) {
	let myString = str.toLowerCase();
	let myReturn = "";
	for (let i = 0; i < myString.length; i++) {
		if (myString.split(str[i]).length-1 > 1) {
			myReturn = myReturn + str[i]
		}
	}
	return myReturn;
}
console.log(returnSymbol('What do u say about my mom?'));

//Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.
function ssr(str, search, replace) {
	let words = str.split(search).join(replace);
	console.log(words);
//  let words = str.split(' ');
// 	for (let i = 0; i < words.length; i++) {
// 		if (words.length[i] == search) {
// 			return words.lenght[i] == replace;
// 		} return words.join(' ');
// 	}
}
ssr('"Мы производим качественные, современные автомобили. Наши автомобили производятся как для внутреннего пользования, так и на экспорт " - Geely', 'автомобили', 'censored');

//Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
function changeLetters(words) {
	console.log("Строка, которую нужно изменить: " + words);
	let arrTemp = words.split(' ');
	let res = "";
	for (let i = 0; i < arrTemp.length; i++) {
		let firstletter = arrTemp[i].substring(0, 1).toUpperCase();
    	let left = arrTemp[i].substring(1, arrTemp[i].length);
    	res += firstletter + left + " ";
	}
	return  "Измененная строка: " + res;
}
console.log(changeLetters("Илон Маск сделал прорыв в автомобилестроении"));

//Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

function stars(str) {
	console.log("Строка, которую нужно изменить: " + str);
	let temp = str.toLowerCase();
	let arrTemp = "";
	for (let i = 0; i < temp.length; i++) {
		if (arrTemp.includes(temp[i])) {
			arrTemp = arrTemp + "*";
		} else {
			arrTemp = arrTemp + temp[i];
		}
	}
	return arrTemp;
}
console.log(stars("Любая понравившеяся строка. U can write it in English"));

//Напишите функцию, которая возвращает текущий день недели на русском языке.

function checkDate() {
	let date = new Date()
	console.log(date);
	let today = date.getDay();
	let days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	return days[today];

}
console.log(checkDate());

//Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.

function whatDayItWas(date) {
	let wasDay = new Date(date.replace(/-/g, " ").split(" ").reverse());
	let days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	return days[wasDay.getDay()];
	
}
console.log(whatDayItWas(prompt("Введите дату 'ДД-ММ-ГГГГ'")));

//Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения. Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).
//www.dayofbirth.co.uk


function whenBirthday(date) {
	let dateTemp = new Date(date.replace(/-/g, " ").split(" ").reverse());
	let Year = new Date().getFullYear();
	let YearTemp = [Year];
	let newdateTemp = date.replace(dateTemp[0], YearTemp).replace(/-/g, " ").split(" ").reverse();
	let birthday = new Date(newdateTemp);
	let today = new Date();

	birthday.setFullYear(today.getFullYear());
	if (today > birthday) {
  		birthday.setFullYear(birthday.getFullYear() + 1);
	}

	let daysBefore =  Math.floor((birthday - today) / (24*60*60*1000));
//
	let anniversary = new Date(dateTemp);
	let day = Math.ceil((today.getTime() - anniversary.getTime()) / (24*60*60*1000));

	let thousand = 0;
	let a = 0; 
	do { a += 1000;} 
	while (a < day);
	thousand = a - day;
	return "До Вашего Дня Рождения осталось - " + daysBefore + " дня(ей)." + '\n' + "Тысячадневный юбилей наступит через " + thousand + " дня(ей).";
}
console.log(whenBirthday(prompt("Введите дату 'ДД-ММ-ГГГГ'")));

//Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку. Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента, отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах. Массив должен быть пройден до конца, несмотря на ошибки!

function checkNumber(num) {
	let squaredNum = Math.sqrt(num);
	if ((squaredNum ^ 0) === squaredNum) {
		return "This is an integer"
	} 
	throw new Error ("it is not a square integer");
}

function getNewArray(length, min, max) {
	let array = [];
	for (let i = min; i < length; i++) {
		array[i] = Math.floor(Math.random() * (max - 1));
	}
	return array;
}

function checkArr(arr) {
  for(let a = 0; a < arr.length; a++) {
      try {
      console.log(checkNumber(arr[a]));
    } catch (e) {
      console.log(e.message);
    }
  }
}
checkArr(getNewArray(20, 0, 50));
