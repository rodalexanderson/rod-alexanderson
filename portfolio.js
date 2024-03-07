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
    nube1.style.left = nubeYBottom + incrementer * 0.2 + '%'
    arbusto1.style.left = arbusto1YLeft + incrementer * 0.005 + '%'
}

window.addEventListener('scroll', move)
// MOUNTAIN SECTION ANIMATION ENDS

// ABOUT ME SECTION STARTS

function showText() {
    const personal = document.getElementById('personal-text')
    const profesional = document.getElementById('prof-text')
    const levelUp = document.getElementById('levelup')
    const clickAgain = document.getElementById('clickagain')
    clickAgain.style.display = 'block'
    levelUp.style.display = 'block'
    if (personal.style.display === 'none' ) {
        ((personal.style.display = 'block') && (profesional.style.display = 'none'))
    } else {
        ((personal.style.display = 'none') && ((profesional.style.display = 'block')))
    }
}

// ABOUT ME SECTION ENDS

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
    const css = document.getElementById('css-text')
    ghost.style.top = -20 + '%'
    css.style.display = "block"
}
function monedaShown() {
    const moneda = document.getElementById('moneda')
    const management = document.getElementById('management-text')
    moneda.style.top = -20 + '%'
    management.style.display = "block"
    
}
function flowerShown() {
    const flower = document.getElementById('flower')
    const js = document.getElementById('js-text')
    flower.style.top = -20 + '%' 
    js.style.display = "block"
}
function starShown() {
    const star = document.getElementById('star')
    const seo = document.getElementById('seo-text')
    star.style.top = -20 + '%' 
    seo.style.display = "block"
}
function hongoShown() {
    const hongo = document.getElementById('hongo')
    const react = document.getElementById('react-text')
    react.style.display = "block"
    hongo.style.top = -20 + '%' 
    
}
