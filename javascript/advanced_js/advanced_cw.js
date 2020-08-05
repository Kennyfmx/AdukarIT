//Напишите функцию counterFactory(start, step), которая при вызове возвращает другую функцию – счётчик tictoc(). start – стартовое значение счётчика, step – его шаг. При каждом вызове tictoc увеличивает значение счётчика на step.

function counterFactory(start, step) {
	function tictoc() {
		return start += step;
	}
	return tictoc;
}
let fromZeroWithIncrement = counterFactory(0, 1);
console.log(fromZeroWithIncrement());
console.log(fromZeroWithIncrement());
console.log(fromZeroWithIncrement());
console.log(fromZeroWithIncrement());
console.log(fromZeroWithIncrement());
let fromTenBackwardsByTwo = counterFactory(10, -2);
console.log(fromTenBackwardsByTwo());

// Напишите функцию take(counter, x), которая вызывает функцию counter заданное число (x) раз и возвращает массив с результатами вызовов.

function take(counter, x) {
	let results = [];
	for (let i = 0; i < x; i++) {
		results.push(counter());
	}
	return results
}
let res = take(counterFactory(0, 1), 10);
console.log(res);

// Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.


let text = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.';

function doItAll(text) {
	//var.1: indexOf
	// let start = 0;
	// do {
	// 	start = text.indexOf('.', start);
	// 	if (start != -1) {
	// 		text = text.slice(0, start) + text.slice(start+1);
	// 	}
	// } while (start != -1);
	// start = 0;
	// do {
	// 	start = text.indexOf(',', start);
	// 	if (start != -1) {
	// 		text = text.slice(0, start) + text.slice(start+1);
	// 	}
	// } while (start != -1);
	// return text;

	//var.2: split + join

	// text = text.split('.').join('');
	//text = text.split(',').join('');
	// text = text.split(' ');
	// return text;

	//Разбили текст на слова и сложили в массив words
	let words = text.split('.').join('').split(',').join('').split(' ');

	// разворачиваем одно слово

	function reverse(word) {
		let reversed = '';
		for (let i = word.length - 1; i >= 0; i--) {
			reversed += word[i];
			//*word = word.split('').reverse().join('');*//
		}
		return reversed;
	}

	//разворачиваем массив целиком

	function reverseArray(words) {
		return words.map(reverse);
	}

	//разворачиваем все слова

	let reversedWords = reverseArray(words);
	//return reversedWords;

	//сортируем массив по длинне слов
	function wordsSort(word1, word2) {
		return word1.length - word2.length;
	}
	let sortedReversedWords = reversedWords.sort(wordsSort);
	//return sortedReversedWords;
	//считаем колличество букв "С"
	function countLetterS(counter, word) {
		return counter + word.toLowerCase().split('с').length - 1;
	}
	return sortedReversedWords.reduce(countLetterS, 0);
}

console.log(doItAll(text));
