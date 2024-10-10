document.addEventListener('DOMContentLoaded', () => {
    // Fetch tech news
    fetchTechNews();

    // Fetch latest gadgets specs
    fetchGadgetsSpecs();
});

// Fetch Tech News using an API (e.g., NewsAPI)
async function fetchTechNews() {
    const newsApiUrl = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=0e76818e782b4aae82906494689b9792';
    const newsContainer = document.getElementById('news-container');

    try {
        const response = await fetch(newsApiUrl);
        const data = await response.json();

        data.articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <img src="${article.urlToImage}" alt="${article.title}" class="news-image">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching tech news:', error);
    }
}

// Fetch Gadgets Specs using an API (replace with your gadget API)
async function fetchGadgetsSpecs() {
    const gadgetsApiUrl = 'https://api.yourgadgetsapi.com/v1/latest?apiKey=YOUR_API_KEY';
    const gadgetsContainer = document.getElementById('gadgets-container');

    try {
        const response = await fetch(gadgetsApiUrl);
        const data = await response.json();

        data.gadgets.forEach(gadget => {
            const gadgetItem = document.createElement('div');
            gadgetItem.className = 'gadget-item';
            gadgetItem.innerHTML = `
                <img src="${gadget.image}" alt="${gadget.name}" class="gadget-image">
                <h3>${gadget.name}</h3>
                <p>${gadget.description}</p>
                <p><strong>Price:</strong> ${gadget.price}</p>
                <p><strong>Specs:</strong> ${gadget.specs}</p>
            `;
            gadgetsContainer.appendChild(gadgetItem);
        });
    } catch (error) {
        console.error('Error fetching gadgets specs:', error);
    }
}
