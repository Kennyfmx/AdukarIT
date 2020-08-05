console.dir(document);

//перебор

let allElements = document.body.children;
for (i = 0; i < allElements.length; i++) 
	console.dir(allElements[i]);

//массив всех эллементов
let elementsArray = [].slice.call(allElements);
	console.log(elementsArray);

// let middleDiv = document.body.main.children[1];
// 	console.log(middleDiv.nextElementSibling);

let span = document.getElementById('special');
console.log(span);

let cls = document.getElementsByClassName('cls');
console.log(cls);

let link = document.createElement('a');
link.innerText = 'link text';
link.href = 'https://www.gooogle.com';
link.title = 'best title';

let main = document.getElementsByTagName('main')[0];
main.appendChild(link);

console.log(link);
