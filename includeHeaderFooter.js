/*/ 
<div id="header-container"></div>
<!-- Your page content here -->
<div id="footer-container"></div>
for pages
<script src="includeHeaderFooter.js"></script>/*/
document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML content into a specified element
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => console.error(error));
    }

    // Load the header and footer
    loadHTML('header.html', 'header-container');
    loadHTML('footer.html', 'footer-container');
});
