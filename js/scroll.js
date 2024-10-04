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

const sections = document.querySelectorAll('#nav ul li');
const navbar = document.getElementById('nav')
const navLinks = navbar.querySelectorAll('a')


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 500
  sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      const id = section.getAttribute('id')
      navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active')
          }
      })
      }
  })
})