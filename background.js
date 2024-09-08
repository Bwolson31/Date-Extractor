chrome.webRequest.onCompleted.addListener(
    function(details) {
        if (details.url.includes('/locationhistory/preview')) {
            fetch(details.url)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Inspect the structure first to find the correct timestamp path

                    // Once you know the correct path, replace 'reviewDetails[0].unixTime'
                    const timestamp = data.reviewDetails[0].unixTime; // Adjust path as per your data structure
                    const date = new Date(timestamp * 1000); // Convert Unix timestamp (if in seconds)
                    console.log('Converted Date:', date.toLocaleDateString());
        
                    // Send the date to the popup or content script
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                        chrome.tabs.sendMessage(tabs[0].id, { message: 'get_review_date', date: date.toLocaleDateString() });
                    });
                });
        }
    },
    { urls: ["<all_urls>"] }
);
