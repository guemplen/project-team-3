const menu = document.getElementById('menu');
const toggleMenuButton = document.getElementById('toggleMenuButton');

toggleMenuButton.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

const menuLinks = menu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});


