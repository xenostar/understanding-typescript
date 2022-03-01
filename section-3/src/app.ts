let appId = 'abc';
const button = document.querySelector('button');

function clickHandler(message: string) {
	// let userName = 'Bryan';
	console.log('Clicked', message);
}

function add(n1: number, n2: number) {
	if (n1 + n2 > 0) {
		return n1 + n2;
	} else {
		return;
	}
}

if (button) {
	button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

const userName = 'Bryan';
// userName = 3;

console.log(userName);
