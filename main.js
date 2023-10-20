
const cardSwitch = document.querySelector('.card-switch');
const container = document.querySelector('.card-container');
const profileStatus = document.querySelector('.status');
const profileImage = document.querySelector('.profile-image-container');
cardSwitch.addEventListener('click', function() {
    container.classList.toggle('switch');
    profileStatus.classList.toggle('switch');
    profileImage.classList.toggle('switch');
})