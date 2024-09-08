// Listen for the review date message sent from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_review_date') {
        document.querySelector('#review-date-display').innerText = `Exact Date: ${request.date}`;
    }
});
