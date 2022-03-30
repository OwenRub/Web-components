const acordeonHeaders = document.querySelectorAll('.header');
[...acordeonHeaders].forEach(header => header.addEventListener('click', handleClickOnHeader));

function handleClickOnHeader(event){
	const content = event.target.parentElement;
	content.children[1].classList.toggle('active');
}
