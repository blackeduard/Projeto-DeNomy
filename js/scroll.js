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

// Seleciona todos os links dentro da navegação
const navLinks = document.querySelectorAll('#nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Remove a classe 'active' de todos os links
    navLinks.forEach((l) => {
      l.classList.remove('active')
    })
    // Adiciona a classe 'active' ao link atual
    link.classList.add('active')
    // Faz a página scroll para a seção correspondente
    const href = link.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({ behavior: 'smooth' })
  })
})
// Adiciona evento de click para remover classe active quando clica fora dos links
document.addEventListener('click', (e) => {
  if (!e.target.closest('a')) {
    navLinks.forEach((link) => link.classList.remove('active'));
  }
});