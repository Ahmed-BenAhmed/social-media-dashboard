const body = document.getElementsByTagName('body')[0];
const btnSwitcher = document.getElementsByTagName('label')[0];
console.log(btnSwitcher);
btnSwitcher.addEventListener('click', () => {
	if (btnSwitcher.className === 'checked') {
		btnSwitcher.classList.remove('checked');
		body.classList.add('dark');
	} else {
		btnSwitcher.classList.add('checked');
		body.classList.remove('dark');
	}
});
// setInterval(() => {
// 	if (body.className === 'dark') {
// 		body.classList.remove('dark');
// 		body.classList.add('light');
// 	} else {
// 		body.classList.remove('light');
// 		body.classList.add('dark');
// 	}
// }, 5000);
