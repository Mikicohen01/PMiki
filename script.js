document.addEventListener("DOMContentLoaded", function () {
    function showPage(pageId) {
        var pages = document.querySelectorAll('.page');
        pages.forEach(function (page) {
            page.style.display = 'none';
        });

        document.getElementById(pageId).style.display = 'block';
    }

    function showForm(participantName) {
        alert('בחרת את: ' + participantName);
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('form-popup').style.display = 'block';
    }

    function hideForm() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('form-popup').style.display = 'none';
    }

    function submitForm(event) {
        event.preventDefault();
        alert('הטופס נשלח בהצלחה!');
        hideForm();
        showPage('thank-you-page');
    }

    function showTermsPopup() {
        fetch('terms.html') // טעינת קובץ התקנון
            .then(response => response.text())
            .then(data => {
                document.getElementById('terms-content').innerHTML = data;
                document.getElementById('overlay').style.display = 'block';
                document.getElementById('terms-popup').style.display = 'block';
            })
            .catch(error => console.error('Error loading terms:', error));
    }

    function hideTermsPopup() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('terms-popup').style.display = 'none';
    }

    document.getElementById('bet-form').addEventListener('submit', submitForm);

    window.showPage = showPage;
    window.showForm = showForm;
    window.hideForm = hideForm;
    window.showTermsPopup = showTermsPopup;
    window.hideTermsPopup = hideTermsPopup;
});
