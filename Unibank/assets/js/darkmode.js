let darkmoderesp = document.querySelector('.night')
let lightmoderesp = document.querySelector('.morning')


darkmoderesp.onclick = function() {
    document.body.classList.add('darkmode')
}

lightmoderesp.onclick = function() {
    document.body.classList.remove('darkmode')
}

let darkmode = document.querySelector('.nightcomp')
let lightmode = document.querySelector('.morningcomp')


darkmode.onclick = function() {
    document.body.classList.add('darkmode')
}

lightmode.onclick = function() {
    document.body.classList.remove('darkmode')
}

let local_date = new Date()
let hour = local_date.getHours()
let minute = local_date.getMinutes()
let second = local_date.getSeconds()
let time = (hour * 60 * 60) + (minute * 60) + second

if(time > 21600 && time <= 64800) {
    document.body.classList.remove('darkmode')
    darkmode.classList.remove('d-none')
    darkmoderesp.classList.remove('d-none')
    lightmode.classList.add('d-none')
    lightmoderesp.classList.add('d-none')
    document.querySelector('.fixed').classList.remove('d-none')
}

else if((time > 64800 && time <= 86400) || (time >= 0 && time <= 21600)) {
    document.body.classList.add('darkmode')
    darkmode.classList.add('d-none')
    darkmoderesp.classList.add('d-none')
    lightmode.classList.remove('d-none')
    lightmoderesp.classList.remove('d-none')
    document.querySelector('.fixed').classList.add('d-none')
}