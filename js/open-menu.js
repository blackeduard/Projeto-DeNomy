const abrir = document.getElementById('abrir-menu')
const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

document.body.addEventListener('click', (e) => {
  if (e.target !== abrir && e.target !== nav && !nav.contains(e.target)) {
    menu.classList.remove('show')
  }
})

abrir.addEventListener('click', () => {
  menu.classList.toggle('show')
})