//Используя встроенную функцию Math.random()
//напишите собственную функцию getRandomArray(len), которая возвращает массив случайных чисел длиной len.

function getRandomArray(len) {
	let a = [];
	for (let x = 0; x <= len; x++) {
		a[x] = Math.random();
	}
	return a;
} 	
let randomArray = getRandomArray(7);
console.log(randomArray);

//При решении задач 2-9 используйте массивы, созданные через getRandomArray. 
//Решение каждой задачи должно быть оформлено как отдельная функция.

//Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.

function theBiggestOne(randomArray) {
	let sum = 0;
	for(let i = 0; i < randomArray.length; i++) {
		sum += randomArray[i];
	}
	let aver = sum / randomArray.length;
	for(let j = 0; j < randomArray.length; j++){
		if(randomArray[j] > aver){
			console.dir(randomArray[j]);
		}
	}
}
theBiggestOne(randomArray);

//Найдите два наименьших элемента массива.

function theSmallestNumber() {
	let snOne = randomArray[0];
	let snTwo = randomArray[0];
	for (let i = 0; i < randomArray.length; i++) {
		if(randomArray[i] < snOne) {
			snOne = randomArray[i];
		}
	}
	for (var i = 0; i < randomArray.length; i++) {
		if(randomArray[i] > snOne && randomArray[i] < snTwo)
			snTwo = randomArray[i];
	}
	return snOne + snTwo;
}
console.log(theSmallestNumber(randomArray));

//Удалите из массива все элементы, меньшие 0.3. 
//Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули.

function delNum() {
	for (let i = 0; i <= randomArray.length; i++) {
		if(randomArray[i] < 0.3){
			randomArray.splice(i, 1);
			randomArray.unshift(0);
		}
	}
}
delNum(randomArray);

//Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2,
//второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.



function getArrayThree(arrayOne, arrayTwo) {
	for (let i = 0; i <= randomArray.length; i++) {
		arrayOne = randomArray;
		arrayTwo = randomArray;
	}
	console.log(arrayOne);
	console.log(arrayTwo);

	let arrayTwoReverse = arrayTwo.reverse()
	let arrayThree = [];
		for (i = 0; i <= randomArray.length; i++) {
			arrayThree[i] = arrayTwoReverse[i] + arrayOne[i]
		}
		return arrayThree;
}
console.log(getArrayThree());
