const itemsPerPage = 5;
const quotesContainer = document.getElementById('quotes');
const indicesContainer = document.getElementById('indices');
indicesContainer.addEventListener('click', handleIndexClick);

//show the first items
updateContent(0, itemsPerPage);

async function getQuotes(){
	const dataRaw = await fetch('./data.json');
	const quotes = await dataRaw.json();

	return quotes;
}

function handleIndexClick(e){
	const index = Number(e.target.textContent);
	[...indicesContainer.children].forEach(i => i.style.fontWeight = "normal");
	e.target.style.fontWeight = "bold";
	updateContent((index - 1) * itemsPerPage, index*itemsPerPage);
}

function updateContent(start, final){
	quotesContainer.innerHTML = "";
	getQuotes().then(quotes => {
		let lastItem = final > quotes.length ? quotes.length : final;
		for(let i = start; i < lastItem; i++){
			quotesContainer.appendChild(createQuoteElement(quotes[i]));
		}
	})	
}

function createQuoteElement(data) {
	const divElement = document.createElement('div');
	const quote = document.createElement('q');
	quote.textContent = data.quote;
	const autor = document.createElement('blockquote');
	autor.textContent = `- ${data.autor}`;
	divElement.appendChild(quote);
	divElement.appendChild(autor);
	return divElement;
}