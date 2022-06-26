let form = document.querySelector('form');
let inputEmail = document.querySelector('#email');
let inputPass = document.querySelector('#pass');

form.addEventListener('submit', async function submit(event) {
	event.preventDefault();
	let post = {
		email: inputEmail.value,
		password: inputPass.value,
	};
	let respons = await fetch(
		'https://awesome-wallet-app.herokuapp.com/auth/login',
		{
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		}
	);
	let res = await respons.json();

	if (res.code == 200) {
		window.location.replace(
			'http://127.0.0.1:5501/classwork_1/registration.html'
		);
		let tokin = res.data.accessToken;
		document.cookie = `Authorization=${tokin}`;

		console.log('registration successfull');
	} else {
		alert('error');
	}
});

let textarea = document.querySelector('#textarea');

textarea.addEventListener('change', (e) => {
	localStorage.setItem('text', textarea.value);
});

document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem('text')) {
        textarea.value = localStorage.getItem('text');
    }

});

let switcher = document.querySelector('#switch');
let body = document.querySelector('body')
switcher.addEventListener('click', () => {
body.classList.toggle('dark')

if(body.classList.contains('dark')) {
localStorage.setItem('dark', true);
}else{
	localStorage.setItem('dark', false);
}})
