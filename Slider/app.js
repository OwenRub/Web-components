const slider = document.querySelector('.slider');
const btnNext = document.querySelector('.btn-right');
const btnPrevious = document.querySelector('.btn-left');

btnNext.addEventListener('click', goNext);
btnPrevious.addEventListener('click', goPrevious);

function goNext(){
	const firstSliderSection = document.querySelectorAll('.slider_section')[0];
	slider.style.transition = 'all 500ms';
	slider.style.marginLeft = '-200%';
	setTimeout(() => {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('beforeend', firstSliderSection);
		slider.style.marginLeft = '-100%';
	}, 500)
}

function goPrevious(){
	const sliderSections = document.querySelectorAll('.slider_section');
	const lastSliderSection = sliderSections[sliderSections.length-1];
	slider.style.transition = 'all 500ms';
	slider.style.marginLeft = '0';
	setTimeout(() => {
		slider.style.transition = 'none';
		slider.insertAdjacentElement('afterbegin', lastSliderSection);
		slider.style.marginLeft = '-100%';
	}, 500)
}

setInterval(goNext, 3000);