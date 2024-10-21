const openButton = document.getElementById('projeto')
const modal = document.getElementById('projeto-1')
const closeButton = document.getElementById('close')

openButton.addEventListener('click', () => {
    modal.style.visibility = 'visible' // Mostra o modal
    document.body.classList.add('no-scroll') // Desativa a rolagem do corpo
})

closeButton.addEventListener('click', () => {
    modal.style.visibility = 'hidden'; // Oculta o modal
    document.body.classList.remove('no-scroll') // Reativa a rolagem do corpo
})