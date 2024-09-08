// Listen for messages from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_review_date') {
        console.log('Review Date:', request.date);

        
        const dateDisplayElement = document.querySelector('#review-date');
        if (dateDisplayElement) {
            dateDisplayElement.innerText = `Exact Date: ${request.date}`;
        } else {
            console.log('Date display element not found.');
        }
    }
});
