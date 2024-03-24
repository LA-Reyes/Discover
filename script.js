function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    hamburger.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
  }


function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const content = document.querySelectorAll('.content'); 
    banner.style.background = `url("img/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    content.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');

        }
    });
}
