const btnSwitch = document.querySelector('#switch');
const main = document.querySelector("#main");
const letra = document.querySelector("#letra")
const tabla =document.querySelector("#tabla");

btnSwitch.addEventListener('click', () => {
	main.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	tabla.classList.toggle("table-dark");	
	letra.classList.toggle("letra-clara");
});