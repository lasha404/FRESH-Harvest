document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');

    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        dropdown.classList.remove('active'); // დავხუროთ dropdown მენიუ ბურგერის გახსნისას
    });

    // მობილურზე dropdown-ის გახსნა/დახურვა
    if (dropdown) {
        const dropdownLink = dropdown.querySelector('a');
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
});
