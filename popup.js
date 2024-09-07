// This function runs when the popup is opened or a button is clicked
document.addEventListener('DOMContentLoaded', function () {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Send a message to the content script in the active tab
        chrome.tabs.sendMessage(tabs[0].id, { message: "get_review_dates" }, function (response) {
            // Check if the response contains the dates
            if (response && response.dates) {
                // Display the review dates in the popup (or handle them in some other way)
                const reviewDates = response.dates;
                
                // Example: Display the dates in the popup
                const outputDiv = document.getElementById('output');
                outputDiv.innerHTML = ''; // Clear any previous content

                reviewDates.forEach(date => {
                    const dateElement = document.createElement('p');
                    dateElement.textContent = date;
                    outputDiv.appendChild(dateElement);
                });
            } else {
                console.error('No dates received or an error occurred.');
            }
        });
    });
});
