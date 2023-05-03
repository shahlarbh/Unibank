function GetCards() {
    let cardlist = JSON.parse(localStorage.getItem('Cards'))

    let x = ''

    cardlist.forEach(card => {
        x += `
        <tr>
            <th id="${card.Id}" scope="row">${card.Id}</th>
            <td class="img"><img src=${card.Image}></td>
            <td>${card.Card}</td>
            <td><input id="cardinput" type="number" min="1" value="${card.Count}"></td>
            <td>${card.Price}</td>
            <td>${((Number(card.Count)) * (Number(card.Price))).toFixed(2)}</td>
            <td><button class="btn">Delete</button></td>
        </tr>
        `
    });

    document.querySelector('tbody').innerHTML = x

    if(cardlist.length === 0) {
        document.querySelector('.foralert').classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }

    else{
        document.querySelector('.foralert').classList.add('d-none')
        document.querySelector('table').classList.remove('d-none')
    }
}

GetCards()

let cardlist = JSON.parse(localStorage.getItem('Cards'))
let btns = document.querySelectorAll('.btn')

for(let btn of btns) {
    btn.onclick = function() {
        let id = this.parentElement.parentElement.firstElementChild.id
        let filteredCard = cardlist.filter(card => card.Id !== id)
        localStorage.setItem('Cards', JSON.stringify(filteredCard))

        let x = ''

        filteredCard.forEach(card => {
            x += `
            <tr>
                <th id="${card.Id}" scope="row">${card.Id}</th>
                <td class="img"><img src=${card.Image}></td>
                <td>${card.Card}</td>
                <td><input type="number" min="1" value="${card.Count}"></td>
                <td>${card.Price}</td>
                <td>${((Number(card.Count)) * (Number(card.Price))).toFixed(2)}</td>
                <td><button class="btn">Delete</button></td>
            </tr>
            `
        })

        document.querySelector('tbody').innerHTML = x
        location.reload()
    }
}

let cardinput = document.querySelectorAll('#cardinput')

for(let i = 0; i < cardinput.length; i++) {
    cardinput[i].addEventListener('input', countIncreaser)
}

function countIncreaser() {
    let cardlist = JSON.parse(localStorage.getItem('Cards'))

    for(let i = 0; i < cardinput.length; i++) {
        let count = Number(cardinput[i].value)
        cardlist[i].Count = count
    }

    localStorage.setItem('Cards', JSON.stringify(cardlist))
    window.location.reload()
}