const buttons = document.querySelectorAll('.tab-btn');
const descriptions = document.querySelectorAll('.description');

buttons.forEach(btn => btn.addEventListener('click', handleButtonClick));

function handleButtonClick(event){
  const id = event.target.getAttribute('data-id');
  buttons.forEach(btn => btn.className = 'tab-btn');
  event.target.className = 'tab-btn active';
  const description = document.getElementById(id);
  descriptions.forEach(desc => desc.className = 'description');
  description.className = 'description active';
}