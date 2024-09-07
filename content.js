function extractGoogleReviewDates () {

    const reviews = document.querySelectorAll('[data-review-id]');
    let reviewDates = [];

    reviews.forEach(review => {
        
        const dateElement = review.querySelector('.rsqaWe');
        if (dateElement) {
            reviewDates.push(dateElement.textContent.trim());
        }
    });

    console.log("Review Dates:", reviewDates);
    return reviewDates;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "get_review_dates") {
        const dates = extractGoogleReviewDates();
        sendResponse({ dates });
    }
});

// Optionally trigger the extraction when the page loads (if needed)
window.addEventListener('load', () => {
    extractGoogleReviewDates();
});