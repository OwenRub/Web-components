const listItems = document.getElementsByTagName('li');

const inputElement = document.getElementById('search');
inputElement.addEventListener('keyup', filterList);

function filterList(e){
	const filteredList = [];

	for(const li of listItems){
		let anchorText = li.firstChild.innerHTML;
		let userInput = e.target.value;

		if(checkContain(anchorText, userInput)){
			filteredList.push(li);
		}
	}

	showList(filteredList);
}

function checkContain(string, subString){
	if(subString === "")
		return true;
	return string.toLowerCase().includes(subString.toLowerCase());
}

function showList(filteredList){
	showAll();
	const difference = [...listItems].filter(li => [...filteredList].indexOf(li) === -1)
	for(const li of difference){
		li.style.display = "none";
	}
}

function showAll() {
	[...listItems].map(li => li.style.display = "");
}