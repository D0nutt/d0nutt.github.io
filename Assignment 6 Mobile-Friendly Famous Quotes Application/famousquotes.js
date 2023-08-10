const quotesContainer = document.getElementById("quotes");
const randQuote = document.getElementById("random-quote");
const randAuthor = document.getElementById("random-author");
const searchBar = document.getElementById("search-bar");
const main = document.getElementById("main-section");

async function getRandQuote() {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const randQuote = await result.json();    
    console.log(randQuote);
    return randQuote;
}

window.onload = async function generateQuote() {
    const quote = await getRandQuote();
    randQuote.innerText = quote.content;
    if (quote.author) {
        randAuthor.innerText = `-${quote.author}`;
    };
    console.log(quote);
}

async function getQuoteSearch() {
    const search = searchBar.value
    const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${search}`);
    const searchQuote = await result.json();
    console.log(searchQuote);
    return searchQuote;
}

window.addEventListener

async function generateSearch() {
    const quote = await getQuoteSearch();
    for (let i = 0; i < quote.results.length; i ++) {
        const newQuote = document.createElement("div");
        newQuote.setAttribute("class", "quote-list-item");
        newQuote.addEventListener("click", function() { pinQuote(newQuote) });
        newQuote.setAttribute("tabindex", "0");
        newQuote.setAttribute("aria-description", "Press space or click to pin the quote. Do this again to unpin the quote.");
        newQuote.addEventListener("keypress", (e) => {
            if (e.code === "Space") {
                pinQuote(newQuote);
            };
        });
        newQuote.innerText = `${quote.results[i].content}

        -${quote.results[i].author}`;
        quotesContainer.appendChild(newQuote);
    };
}

function pinQuote(quote) {
    pinnedQuoteId = "new-quote-list"
    const nodeCount = document.querySelectorAll(".new-quote-list").length;
    if (quote.getAttribute("class") === pinnedQuoteId) {
        quote.setAttribute("class", "quote-list-item");
        quotesContainer.insertBefore(quote, quotesContainer.childNodes[nodeCount]);
    } else {
        quote.setAttribute("class", pinnedQuoteId);
        quotesContainer.prepend(quote);
    };
}

async function clearSearchResults() {
    const quoteItems = quotesContainer.querySelectorAll("div");
    quoteItems.forEach((quote) => {
        if (quote.getAttribute("class") !== ("new-quote-list")) {
            quotesContainer.removeChild(quote);
        };
    });
}

async function quoteSearch() {
    main.setAttribute("class", "list-main-section");
    quotesContainer.setAttribute("class", "list-quotes-container");
    clearSearchResults();
    generateSearch();
}

searchBar.addEventListener("keypress", (e) => {
    const searchText = searchBar.value;
    if (e.key === "Enter" && searchText !== "") {
        quoteSearch();
    } else if (e.key === "Enter" && searchText === "") {
        displayError("Search can't be empty");
    };
});

function displayError(error) {
    const el = document.getElementById("error-message")
    el.innerHTML = error;
    el.dataset.open = "true";
    setTimeout(() => {
        el.dataset.open = false;
        el.innerHTML = "";
    }, 5000);
}

window.addEventListener('keydown', (e) => {if (e.code === "Space") {document.body.style.overflow = "hidden";}});
window.addEventListener('keyup', (e)  => {if (e.code === "Space") {document.body.style.overflow = "auto";}});