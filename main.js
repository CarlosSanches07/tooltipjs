const first = document.getElementById('first');
const second = document.getElementById('second');
const parent = document.getElementById('parent');
const tooltip = document.getElementById('tooltip');


first.value = "Exemplo de nome";
second.value = "Exemplo de cnpj";

tooltip.style.display = "none";

localStorage.setItem('first', '');
localStorage.setItem('second', '');

first.addEventListener('focus',(event) => {
	if(!first.value){
		const firstValue = localStorage.getItem('first');
		tooltip.innerText = firstValue;
		tooltip.style.display = "block";
	}else {
		localStorage.setItem('first', first.value);
		localStorage.setItem('second', second.value);
	}
})

first.addEventListener('blur', (event) => {
	if(!first.value){
		second.value = "";
	}
})

tooltip.addEventListener('click', (event) => {
	console.log(localStorage.getItem('first'));
	first.value = localStorage.getItem('first');
	second.value = localStorage.getItem('second')
	localStorage.setItem('first', '');
	localStorage.setItem('second', '');
	tooltip.style.display = 'none';	
})
