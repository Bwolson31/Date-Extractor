// Send a message to content.js to get the review date
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'get_review_date' }, (response) => {
        if (response && response.date) {
            document.querySelector('#review-date-display').innerText = `Exact Date: ${response.date}`;
        } else {
            console.log('No date found in response.');
        }
    });
});
