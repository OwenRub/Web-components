const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const open = document.querySelector('.btn');

open.addEventListener('click', showModal);
close.addEventListener('click', hideModal);
window.addEventListener('click', clickOnBackground);


function showModal(e){
	e.preventDefault();
	modalContainer.style.opacity = 1;
	modalContainer.style.visibility = "visible";
	modal.classList.toggle('modal-close');
}

function hideModal(){
	modal.classList.toggle('modal-close');
	setTimeout(() => {
		modalContainer.style.opacity = 0;
		modalContainer.style.visibility = "hidden";
	}, 500);
}

function clickOnBackground(e){
	if (e.target == modalContainer)
		hideModal();
}