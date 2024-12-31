let input = document.querySelector("input");
let keyboard = document.querySelector("#keyboard");
let btns = document.querySelectorAll("#keyboard .keys");
let caps = document.querySelector("#keyboard .cap");

for (let keys of btns) {
	keys.addEventListener("click", function() {
		input.value += keys.textContent;
	});
}