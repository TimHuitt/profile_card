
const cardSwitch = document.querySelector('.card-switch');
const container = document.querySelector('.card-container');
const profileStatus = document.querySelector('.status');
const profileImage = document.querySelector('.profile-image-container');
const contact = document.querySelector('.contact-container');
const imageContact = document.querySelector('.image-contact-container');
const details = document.querySelector('.details');
const title = document.querySelector('.title-container');
const descContainer = document.querySelector('.description-container');
const description = document.querySelector('.description');
const rates = document.querySelector('.rates-container');
const name = document.querySelector('.profile-name');
cardSwitch.addEventListener('click', function() {
    container.classList.toggle('switch');
    profileStatus.classList.toggle('switch');
    profileImage.classList.toggle('switch');
    contact.classList.toggle('switch');
    imageContact.classList.toggle('switch');
    details.classList.toggle('switch');
    title.classList.toggle('switch');
    descContainer.classList.toggle('switch');
    description.classList.toggle('switch');
    rates.classList.toggle('switch');
    name.classList.toggle('switch');
})