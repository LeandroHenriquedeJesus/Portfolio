const texto = document.querySelector('p')
 typeWriter(texto)

function typeWriter(p) {
    const textoArray = p.innerHTML.split('')
    p.innerHTML = ''
    textoArray.forEach((letra, i) => {
           setTimeout(() => p.innerHTML += letra, 60 * i)});
}
