document.querySelectorAll('.menu a').forEach(function(menu) {
    menu.addEventListener('click', function() {
        document.querySelector('.menu .active').classList.remove('active')
        menu.classList.add('active')
    })
})

document.querySelectorAll('.menuhamburger a').forEach(function(menuhamburger) {
    menuhamburger.addEventListener('click', function() {
        document.querySelector('.menuhamburger .active').classList.remove('active')
        menuhamburger.classList.add('active')
    })
})

document.querySelectorAll('.theme i').forEach(function(theme) {
    theme.addEventListener('click', function() {
        document.querySelector('.theme .d-none').classList.remove('d-none')
        theme.classList.add('d-none')
    })
})

document.querySelectorAll('.themehamburger i').forEach(function(themehamburger) {
    themehamburger.addEventListener('click', function() {
        document.querySelector('.themehamburger .d-none').classList.remove('d-none')
        themehamburger.classList.add('d-none')
    })
})

let langs = document.querySelectorAll('.lang a')

for(let lang of langs) {
    lang.onclick = function(e) {
        e.preventDefault()
        
        for(let lang of langs) {
            this.classList.add('d-none')
            lang.classList.remove('d-none')

            if(lang.innerHTML == 'RUS') {
                this.classList.add('d-none')
            }
        }
    }
}

let langshamburger = document.querySelectorAll('.langhamburger a')

for(let langhamburger of langshamburger) {
    langhamburger.onclick = function(e) {
        e.preventDefault()
        
        for(let langhamburger of langshamburger) {
            this.classList.add('d-none')
            langhamburger.classList.remove('d-none')

            if(langhamburger.innerHTML == 'RUS') {
                this.classList.add('d-none')
            }
        }
    }
}

let searchloop = document.querySelector('.searchloop')
let secondheader = document.querySelector('.secondheader')
let searchdiv = document.querySelector('.searchdiv')

searchloop.onclick = function() {
    searchdiv.classList.toggle('d-none')
}

let close = document.querySelector('.close')

close.onclick = () => searchloop.onclick()

let loop = document.querySelector('.loop')
let searchextension = document.querySelector('.searchextension')

loop.onclick = () => searchextension.classList.toggle('d-none')

let slider = document.querySelector('.slider')

document.querySelectorAll('.controls ul li').forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
        document.querySelector('.controls .selected').classList.remove('selected')
        indicator.classList.add('selected')
        slider.style.transform = `translate(${index * -25}%)`
    })

    let x = 0

    setInterval(() => {
        if(x <= (-75)) {
            x = 0
            slider.style.transform = `translate(${x})`
        }

        else if(x >= (-75)) {
            slider.style.transform = `translate(${x - 25}%)`
            x -= 25
        }

        switch(x) {
            case 0:
                document.querySelector('.controls .selected').classList.remove('selected')
                document.querySelector('.dot1').classList.add('selected')
                break;
            case -25:
                document.querySelector('.controls .selected').classList.remove('selected')
                document.querySelector('.dot2').classList.add('selected')
                break;
            case -50:
                document.querySelector('.controls .selected').classList.remove('selected')
                document.querySelector('.dot3').classList.add('selected')
                break;
            case -75:
                document.querySelector('.controls .selected').classList.remove('selected')
                document.querySelector('.dot4').classList.add('selected')
        }
    }, 2500);
})

let hamburgermenu = document.querySelector('.hamburgermenu i')
let hamburgermenudiv = document.querySelector('.hamburgermenudiv')

hamburgermenu.onclick = () => { 
    hamburgermenudiv.classList.toggle('d-none')
    document.body.classList.toggle('scroll')
}

let link1 = document.querySelector('#link1')
let link2 = document.querySelector('#link2')
let link3 = document.querySelector('#link3')
let table1 = document.querySelector('#table1')
let table2 = document.querySelector('#table2')
let table3 = document.querySelector('#table3')

link1.onclick = function(e) {
    e.preventDefault()
    link1.classList.add('selecttab')
    link2.classList.remove('selecttab')
    link3.classList.remove('selecttab')
    table1.classList.remove('displaynone')
    table2.classList.add('displaynone')
    table3.classList.add('displaynone')
}

link2.onclick = function(e) {
    e.preventDefault()
    link2.classList.add('selecttab')
    link1.classList.remove('selecttab')
    link3.classList.remove('selecttab')
    table2.classList.remove('displaynone')
    table1.classList.add('displaynone')
    table3.classList.add('displaynone')
}

link3.onclick = function(e) {
    e.preventDefault()
    link3.classList.add('selecttab')
    link1.classList.remove('selecttab')
    link2.classList.remove('selecttab')
    table3.classList.remove('displaynone')
    table1.classList.add('displaynone')
    table2.classList.add('displaynone')
}

let maincurrency = document.querySelector('#maincurrency')
let firstchevron = document.querySelector('.firstchevron')

firstchevron.onclick = function() {
    document.querySelector('.reserveoptions').classList.toggle('d-none')
    firstchevron.classList.toggle('rotate')
}

maincurrency.onclick = () => firstchevron.onclick()

let changecurrency = document.querySelectorAll('.reserveoptions a')

for(let currency of changecurrency) {
    currency.onclick = function(e) {
        e.preventDefault()
        for(let currency of changecurrency) {
            this.classList.add('d-none')
            currency.classList.remove('d-none')
            maincurrency.onclick()
        }

        let changecurr = currency.querySelectorAll('span')
        maincurrency.innerHTML = changecurr[1].innerHTML

        if(changecurr[1].innerHTML == 'AZN') {
            maincurrency.innerHTML = 'AZN'
            document.querySelector('.azejs').classList.add('d-none')
        }
    }
}


let secondcurrency = document.querySelector('#secondcurrency')
let secondchevron = document.querySelector('.secondchevron')

secondchevron.onclick = function() {
    document.querySelector('.reserveoptions2').classList.toggle('d-none')
    secondchevron.classList.toggle('rotate')
}

secondcurrency.onclick = () => secondchevron.onclick()

let changecurrency2 = document.querySelectorAll('.reserveoptions2 a')

for(let currency2 of changecurrency2) {
    currency2.onclick = function(e) {
        e.preventDefault()
        for(let currency2 of changecurrency2) {
            this.classList.add('d-none')
            currency2.classList.remove('d-none')
            secondcurrency.onclick()
        }

        let changecurr2 = currency2.querySelectorAll('span')
        secondcurrency.innerHTML = changecurr2[1].innerHTML
        
        if(changecurr2[1].innerHTML == 'USD') {
            secondcurrency.innerHTML = 'USD'
            document.querySelector('.usajs').classList.add('d-none')
        }
    }
}

let firstinput = document.querySelector('#firstinput')
let secondinput = document.querySelector('#secondinput')
let firstinputspan = document.querySelector('#firstinputspan')
let secondinputspan = document.querySelector('#secondinputspan')

firstinput.oninput = function() {
    let firstvalue = firstinput.value
    firstinputspan.innerHTML = firstvalue

    if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'AZN') {
        secondinputspan.innerHTML = (firstvalue * 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'RUB') {
        secondinputspan.innerHTML = ((firstvalue * 1.7) / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'GBP') {
        secondinputspan.innerHTML = ((firstvalue * 1.7) / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'EUR') {
        secondinputspan.innerHTML = ((firstvalue * 1.7) / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'USD') {
        secondinputspan.innerHTML = firstvalue
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'AZN') {
        secondinputspan.innerHTML = firstvalue
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'USD') {
        secondinputspan.innerHTML = (firstvalue / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'EUR') {
        secondinputspan.innerHTML = (firstvalue / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'GBP') {
        secondinputspan.innerHTML = (firstvalue / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'RUB') {
        secondinputspan.innerHTML = (firstvalue / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'RUB') {
        secondinputspan.innerHTML = ((firstvalue * 1.85) / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'AZN') {
        secondinputspan.innerHTML = (firstvalue * 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'GBP') {
        secondinputspan.innerHTML = ((firstvalue * 1.85) / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'USD') {
        secondinputspan.innerHTML = ((firstvalue * 1.85) / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'EUR') {
        secondinputspan.innerHTML = firstvalue
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'EUR') {
        secondinputspan.innerHTML = ((firstvalue * 2.15) / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'USD') {
        secondinputspan.innerHTML = ((firstvalue * 2.15) / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'RUB') {
        secondinputspan.innerHTML = ((firstvalue * 2.15) / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'AZN') {
        secondinputspan.innerHTML = (firstvalue * 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'GBP') {
        secondinputspan.innerHTML = firstvalue
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'GBP') {
        secondinputspan.innerHTML = ((firstvalue * 0.02) / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'USD') {
        secondinputspan.innerHTML = ((firstvalue * 0.02) / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'EUR') {
        secondinputspan.innerHTML = ((firstvalue * 0.02) / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'AZN') {
        secondinputspan.innerHTML = (firstvalue * 0.02).toFixed(4)
    }

    else{
        secondinputspan.innerHTML = firstvalue
    }
}


secondinput.oninput = function() {
    let secondvalue = secondinput.value
    secondinputspan.innerHTML = secondvalue

    if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'AZN') {
        firstinputspan.innerHTML = (secondvalue / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'RUB') {
        firstinputspan.innerHTML = ((secondvalue * 0.02) / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'GBP') {
        firstinputspan.innerHTML = ((secondvalue * 2.15) / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'EUR') {
        firstinputspan.innerHTML = ((secondvalue * 1.85) / 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'USD' && secondcurrency.innerHTML == 'USD') {
        firstinputspan.innerHTML = secondvalue
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'AZN') {
        firstinputspan.innerHTML = secondvalue
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'USD') {
        firstinputspan.innerHTML = (secondvalue * 1.7).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'EUR') {
        firstinputspan.innerHTML = (secondvalue * 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'GBP') {
        firstinputspan.innerHTML = (secondvalue * 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'AZN' && secondcurrency.innerHTML == 'RUB') {
        firstinputspan.innerHTML = (secondvalue * 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'RUB') {
        firstinputspan.innerHTML = ((secondvalue * 0.02) / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'AZN') {
        firstinputspan.innerHTML = (secondvalue / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'GBP') {
        firstinputspan.innerHTML = ((secondvalue * 2.15) / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'USD') {
        firstinputspan.innerHTML = ((secondvalue * 1.7) / 1.85).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'EUR' && secondcurrency.innerHTML == 'EUR') {
        firstinputspan.innerHTML = secondvalue
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'EUR') {
        firstinputspan.innerHTML = ((secondvalue * 1.85) / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'USD') {
        firstinputspan.innerHTML = ((secondvalue * 1.7) / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'RUB') {
        firstinputspan.innerHTML = ((secondvalue * 0.02) / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'AZN') {
        firstinputspan.innerHTML = (secondvalue / 2.15).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'GBP' && secondcurrency.innerHTML == 'GBP') {
        firstinputspan.innerHTML = secondvalue
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'GBP') {
        firstinputspan.innerHTML = ((secondvalue * 2.15) / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'USD') {
        firstinputspan.innerHTML = ((secondvalue * 1.7) / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'EUR') {
        firstinputspan.innerHTML = ((secondvalue * 1.85) / 0.02).toFixed(4)
    }

    else if(maincurrency.innerHTML == 'RUB' && secondcurrency.innerHTML == 'AZN') {
        firstinputspan.innerHTML = (secondvalue / 0.02).toFixed(4)
    }

    else{
        firstinputspan.innerHTML = secondvalue
    }
}