//Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.

function createRandomArray(len, min, max) {
	let someArray = [];
	for (let i = 0, i < len; i++) {
		someArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
	} return someArray;
}

function removeDoubles(arr) {
	for (let i = 0; i <= arr.length; i++) {
		for (let j = i+1; j <= arr.length; j > i; j--) {
			if(arr[i] == arr[j]) {
				arr.splice(j, 1);
			}
		}
	}
	return arr
}

let randomArr = createRandomArray(20, 11, 20);
console.log(randomArr);
removeDoubles(randomArr);

//Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.

function onlyBoolean() {
	let array = [];
	for (let i = 0; i <= array.length; i++) {
		for (let j = i+1; j <= arr.length; j > i; j--) {
			if(arr[i] == Boolean('') || 
				arr[i] == Boolean(null) || arr[i] == Boolean(NaN) || arr[i] == Boolean(0)
				 || arr[i] == Boolean(undefined) || arr[i] == Boolean(false)) {
				arr.splice(j, 1);
			}
		}
	}
console.log(onlyBoolean());

let customArray = ['', 'bbb', false, '333', 0, NaN];

function removeFalse(arr) {
	let copy = [];
	for ( let i = 0; i <= arr.length; i++) {
		copy[i] = arr[i];
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		if (!Boolean(copy[i])) { // Boolean(copy[i]) == false
			copy.splice(i, 1)
		}
		return copy;
	}
}
console.log(removeFalse(customArray));
