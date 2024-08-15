// JavaScript for toggling the dropdown menu in mobile view
document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.querySelector('.navbar-toggler');
    var menuDropdown = document.querySelector('#menuDropdown');

    dropdownButton.addEventListener('click', function () {
        menuDropdown.classList.toggle('show');
    });
});
