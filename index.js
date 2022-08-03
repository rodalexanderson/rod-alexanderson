// MOUNTAIN SECTION ANIMATION STARTS

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
    nube3.style.bottom = nubeYBottom + incrementer * 0.2 + '%'
    arbusto1.style.left = arbusto1YLeft + incrementer * 0.005 + '%'
}

window.addEventListener('scroll', move)
// MOUNTAIN SECTION ANIMATION ENDS


// EASTER EGGS MARIO STARTS
function showMario() {
    const mario2 = document.getElementById('mario')
    if (mario2.style.display = "none"){
        mario2.style.display = "block"
    } else {
        mario2.style.display = "none"
    }
}

function showMario2() {
    const control = document.getElementById('control')
    const mario2 = document.getElementById('mario2')
    if (mario2.style.display = "none"){
        (mario2.style.display = "block") && (control.style.display = "none")
    } else {
        mario2.style.display = "none"
    }
}

// EASTER EGGS MARIO END

// MY SKILLS ANIMATION STARTS
function ghostShown() {
    const ghost = document.getElementById('ghost')
    ghost.style.top = -20 + '%' 
}
function monedaShown() {
    const moneda = document.getElementById('moneda')
    moneda.style.top = -20 + '%' 
}
function flowerShown() {
    const flower = document.getElementById('flower')
    flower.style.top = -20 + '%' 
}
function starShown() {
    const star = document.getElementById('star')
    star.style.top = -20 + '%' 
}
function hongoShown() {
    const hongo = document.getElementById('hongo')
    hongo.style.top = -20 + '%' 
}
