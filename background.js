chrome.webRequest.onCompleted.addListener(
    function(details) {
        if (details.url.includes('/locationhistory/preview')) {
            fetch(details.url)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Inspect the structure first to find the correct timestamp path

                    const timestamp = data.reviewDetails[0].unixTime; 
                    const date = new Date(timestamp * 1000); // Convert Unix timestamp (if in seconds)
                    console.log('Converted Date:', date.toLocaleDateString());
        

                    chrome.runtime.sendMessage({ message: 'get_review_date', date: date.toLocaleDateString() });
                });
        }
    },
    { urls: ["<all_urls>"] }
);
