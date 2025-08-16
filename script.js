const root = document.documentElement;
const btnTheme = document.getElementById("altTheme");
const logo = document.getElementById("logo"); 

const lightTheme = {
  '--bg': 'white',
  '--text-color': 'black',
  '--logo': '#3e3e3e',
  '--link-selected': '#303f9f',
  '--button-hver': '#1a237e',
  '--recent-bg': '#dbedf2',
  '--feautured-bg': '#e0e0e0',
  '--cinza': '#8695a4',
  '--alt-color': 'rgb(101, 101, 101)'
};

const darkTheme = {
  '--bg': '#121212',
  '--text-color': '#f5f5f5',
  '--logo': '#e0e0e0',
  '--link-selected': '#7986ff',
  '--button-hver': '#5c6bc0',
  '--recent-bg': '#1e2a30',
  '--feautured-bg': '#2c2c2c',
  '--cinza': '#aebac7',
  '--alt-color': 'orange'
};

// Verifica se existe tema salvo no localStorage
let isDark = localStorage.getItem("theme") === "dark";

// Aplica o tema inicial
function setTheme(theme, darkMode) {
  for (let prop in theme) {
    root.style.setProperty(prop, theme[prop]);
  }
  // muda a logo de acordo com o tema
  logo.src = darkMode ? "assets/logow.png" : "assets/logo.png";
}

// Aplica tema e ícone ao carregar a página
setTheme(isDark ? darkTheme : lightTheme, isDark);
btnTheme.classList.add(isDark ? "bx-sun" : "bx-moon");

btnTheme.addEventListener("click", () => {
  isDark = !isDark;
  setTheme(isDark ? darkTheme : lightTheme, isDark);

  if (isDark) {
    btnTheme.classList.remove("bx-moon");
    btnTheme.classList.add("bx-sun");
  } else {
    btnTheme.classList.remove("bx-sun");
    btnTheme.classList.add("bx-moon");
  }

  // Salva a escolha no localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
