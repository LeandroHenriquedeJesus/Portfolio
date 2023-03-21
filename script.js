const texto = document.querySelector('p')
 typeWriter(texto)

function typeWriter(p) {
    const textoArray = p.innerHTML.split('')
    p.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => p.innerHTML += letra, 60 * i)});
}

const btnMobile = document.querySelector('.btn-mobile');
    
function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefaut()
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }

    else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}       
    
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
