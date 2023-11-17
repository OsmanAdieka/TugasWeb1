// script.js

// Perbarui event listener dengan kelas "nav_about"
document.querySelector('.nav_about').addEventListener('click', showAboutMe);

// Fungsi untuk menampilkan "About me" dengan efek fade
function showAboutMe() {
    const aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.classList.add('active');
}

function showCaption(number) {
    const caption = document.getElementById(`caption${number}`);
    caption.style.opacity = '1';
}

function hideCaption(number) {
    const caption = document.getElementById(`caption${number}`);
    caption.style.opacity = '0';
}

