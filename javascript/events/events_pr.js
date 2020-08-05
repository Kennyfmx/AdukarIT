let btn = document.getElementById('first-button');
btn.onclick = function() {
	alert("Where is my money, Lebowski?");
}

// let input = document.getElementsByTagName('INPUT')[0]
let input = document.getElementById('input-button');
input.onclick = function () {
	this.value = "BUTTON";
}

 function Focus() {
    this.text_area = 'focused';
  }

  function Blur() {
    this.text_area = '';
  }

// let field = document.getElementsById('disable');
// disable.onclick = function{
// 	focus();
// }

// let enable = document.getElementsById('enable');
// enable.onclick = function {
// 	blur();
}
