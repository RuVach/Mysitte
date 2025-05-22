document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const elementsToChange = document.querySelectorAll('.container, section, h2, p, .li, .link, .links, h4, .main-title, .main-description, .skill, .hobbi, .vol, #social a'); 
    let isSun = true;

    themeToggle.addEventListener('click', () => {
        themeToggle.style.animation = 'riseUp 2s ease-in-out forwards';

        setTimeout(() => {
            themeToggle.style.animation = 'fallDown 2s ease-in-out forwards';

            if (isSun) {
                themeToggle.classList.remove('sun');
                themeToggle.classList.add('moon');
                body.classList.add('dark-theme');
                elementsToChange.forEach(el => el.classList.add('dark-theme'));
                isSun = false;
            } else {
                themeToggle.classList.remove('moon');
                themeToggle.classList.add('sun');
                body.classList.remove('dark-theme');
                elementsToChange.forEach(el => el.classList.remove('dark-theme'));
                isSun = true;
            }
        }, 2000);
    });
});
