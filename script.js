const elements = {
  toggleSwitch: document.querySelector('input[type="checkbox"]'),
  nav: document.getElementById('nav'),
  toggleIcon: document.getElementById('toggle-icon'),
  image1: document.getElementById('image1'),
  image2: document.getElementById('image2'),
  image3: document.getElementById('image3'),
  textBox: document.getElementById('text-box'),
};

// Dark or Light images
function setImageMode(color) {
  const images = ['undraw_proud_coder', 'undraw_conceptual_idea', 'undraw_feeling_proud'];
  images.forEach((imageName) => {
    const image = elements[`${imageName}`];
    image.src = `img/${imageName}_${color}.svg`;
  });
}

function setTheme(isDark) {
  const bgColors = {
    dark: 'rgb(0 0 0 / 50%)',
    light: 'rgb(255 255 255 / 50%)',
  };
  elements.nav.style.backgroundColor = bgColors[isDark ? 'dark' : 'light'];
  elements.textBox.style.backgroundColor = bgColors[isDark ? 'light' : 'dark'];
  elements.toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  const iconClasses = {
    sun: 'fa-sun',
    moon: 'fa-moon',
  };
  const iconClassToRemove = isDark ? iconClasses['sun'] : iconClasses['moon'];
  const iconClassToAdd = isDark ? iconClasses['moon'] : iconClasses['sun'];
  elements.toggleIcon.children[1].classList.replace(iconClassToRemove, iconClassToAdd);
  setImageMode(isDark ? 'dark' : 'light');
}

function switchTheme(event) {
  const isDark = event.target.checked;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  setTheme(isDark);
}

elements.toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme preference of user
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const isDark = currentTheme === 'dark';
  elements.toggleSwitch.checked = isDark;
  setTheme(isDark);
}
