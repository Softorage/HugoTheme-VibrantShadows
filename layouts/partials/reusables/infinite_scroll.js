// used in /layouts/index.html => script block
// Initialize the currentPage variable
let currentPage = 1;

// Keep track of whether a request is currently in progress
let requestInProgress = false;

// Function to load data for a given page number
async function fetchData() {
    // Immediately return out if a request already is in progress
    if (requestInProgress) {
        return;
    }
    // request in progress
    requestInProgress = true;

    try {
        const response = await fetch(`/posts/${currentPage}/`);
        // Return error in case of bad response from network
        if (!response.ok) {
           throw new error (response.status);
        }
        // Parse the response HTML and convert it to a Document object
        const parser = new DOMParser();
        const responseDoc = parser.parseFromString(await response.text(), 'text/html');
        // Find all the div elements with class "page" inside the responseDoc
        const newPages = responseDoc.querySelectorAll('.card');
        // Loop through the NodeList and append each div to the div with class 'card-parent'
        const parentCard = document.querySelector('.card-parent');
        newPages.forEach(page => {
            parentCard.appendChild(page);
        });
        // Increment the currentPage variable
        currentPage++;
        // Again call in the observer
        observer.observe(document.querySelector('.card:last-child'));
    } catch (error) {
        console.error('Reached end of page or Connection error occurred: ' + error.message + ' | Status: ' + error.status);
        // Disable the infinite scroll functionality
        observer.disconnect();
    } finally {
        requestInProgress = false;
    }
}

// Attach an Intersection Observer to the last div element
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        fetchData().catch(error => {
            console.error('Fetch error occurred: ' + error.message);
        });
    }
});

// Call in observer
observer.observe(document.querySelector('.card:last-child'));
