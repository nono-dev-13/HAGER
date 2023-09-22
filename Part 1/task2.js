// Function to retrieve and display random quotations
const quoteContainer = document.getElementById('quote-container');
async function getAndDisplayQuotes() {
    quoteContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            //console.log(data)
            const p = document.createElement('p');
            p.textContent = data.content;

            quoteContainer.appendChild(p);
            quoteContainer.style.display = 'block';
        } catch (error) {
            console.error(`Error when retrieving quotes: ${error}`);
        }
    }
}

// Récepteur d'événements pour le bouton
const getQuotesButton = document.getElementById('getQuotesButton');
getQuotesButton.addEventListener('click', getAndDisplayQuotes);