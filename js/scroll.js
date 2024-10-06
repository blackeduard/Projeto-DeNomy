// ScrollReveal().reveal('.sobre-texto', { 
//   delay: 500,
//   duration: 1000,
//   reset: true
// })
const scroll = document.getElementById('nav')

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) { 
    scroll.classList.add('fixed')
  } else {
    scroll.classList.remove('fixed')
  }
})

const navLinks = document.querySelectorAll('#nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((l) => {
      l.classList.remove('active')
    })
    link.classList.add('active')
    const href = link.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({ behavior: 'smooth' })
  })
})
document.addEventListener('click', (e) => {
  if (!e.target.closest('a')) {
    navLinks.forEach((link) => link.classList.remove('active'))
  }
})