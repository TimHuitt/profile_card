

const elements = document.querySelectorAll('.card-switch, .card-container, .status, .profile-image-container, .contact-container, .image-contact-container, .details, .title-container, .description-container, .description, .rates-container, .profile-name')
const toggleSwitch = function() {
    elements.forEach(function(element) {
        element.classList.toggle('switch');
    })
}
const cardSwitch = document.querySelector('.card-switch');
cardSwitch.addEventListener('click', toggleSwitch);