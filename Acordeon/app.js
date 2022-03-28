const acordeonHeaders = document.querySelectorAll('.header');
[...acordeonHeaders].forEach(h => h.addEventListener('click', handleClickOnHeader));

function handleClickOnHeader(event){
	const content = event.target.parentElement;
	content.children[1].classList.toggle('active');
}
