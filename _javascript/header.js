document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error(error));
});
//with this code all pages will have a header if they include
//<script src="js/headerLoader.js"></script>
