function Sobremim(){
    const text = document.getElementById('my-text')
    text.classList.add('open')


    addEventListener('click', (e) => {
        if(e.target.id == 'apresentacao'){
            text.classList.remove('open')
        }
    })
}