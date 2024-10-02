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