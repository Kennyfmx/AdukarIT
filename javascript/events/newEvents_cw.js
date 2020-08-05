let button = document.querySelector('button');

function reaction() {
	alert('Hello!');
};

button.onclick = reaction;

// button.onclick = function() {
//	alert('Hello');
// };

// вешаем событие .addEventListener (анонимная функция)

button.addEventListener('click', function() {
	alert('Hello');
});

// не анонимная функция

button.addEventListener('click', reaction);
button.removeEventListener('click', reaction);

//две функции

function firstReaction() {
	alert('HEllo00');
	//this.innerText = 'Button clicked'
	deleteReaction();
}

function deleteReaction() {
	button.removeEventListener('click', firstReaction);
}


// перебор кнопок

function reaction(event) {
	this.innerText = 'button clicked';
	console.dir(event);
	console.dir(event.type);
	console.dir(event.currentTarget);
	console.dir(event.target);
	console.dir(event.clientX);
	console.dir(event.clientY);

};

let buttons = document.querySelector('button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', reaction);
};
console.log(event);

// удаляем дефолтное событие

let lorem = document.getElementById('lorem');
lorem.addEventListener('mousedown', function(event) {
	event.preventDefault();
});


//другие события
let input = document.getElementById('myInput');

input.addEventListener('keydown', function(event) {
	console.log(event.key);
	});

///
document.addEventListener('DOMContentLoaded', function() {
	//console.dir(disable);
	let enable = document.getElementById('enable');
	let disable = document.getElementById('disable');
	let input = document.getElementById('myInput');
	disable.addEventListener('click', function() {
		//input.disable = true;
		input.setAttribute('disabled', '');
	});
	enable.addEventListener('click', function() {
		//input.enable = false;
		input.removeAttribute('disabled');
	})
});
