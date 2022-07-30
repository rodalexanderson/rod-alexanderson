const nube = document.getElementById('nube')
const nube1 = document.getElementById('nube1')
const nube2 = document.getElementById('nube2')
const nube3 = document.getElementById('nube3')
const divarbusto1 = document.getElementById('divarbusto1')
const nubeYBottom = 38
const nube1YBottom = 33
const nube2YBottom = 30
const arbusto1YLeft = 19
nube.style.bottom = nubeYBottom + '%'
nube1.style.bottom = nube1YBottom + '%'
nube2.style.bottom = nube2YBottom + '%'
nube3.style.bottom = nube1YBottom + '%'
arbusto1.style.left = arbusto1YLeft + '%'


function move() {
    const incrementer = window.scrollY
    nube.style.bottom = nubeYBottom + incrementer * 0.1 + '%'
    nube1.style.bottom = nubeYBottom + incrementer * 0.2 + '%'
    nube2.style.bottom = nubeYBottom + incrementer * 0.1 + '%'
    nube3.style.bottom = nubeYBottom + incrementer * 0.1 + '%'
    arbusto1.style.left = arbusto1YLeft + incrementer * 0.005 + '%'
}

window.addEventListener('scroll', move)