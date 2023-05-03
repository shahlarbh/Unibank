if(localStorage.getItem('Cards') == null) {
    localStorage.setItem('Cards', JSON.stringify([]))
}

let cardbtns = document.querySelectorAll('.ubankcards .box .text button')

for(let cardbtn of cardbtns) {
    cardbtn.onclick = function() {
        let cardlist = JSON.parse(localStorage.getItem('Cards'))

        let id = this.parentElement.parentElement.id
        let src = this.parentElement.previousElementSibling.firstElementChild.src
        let card = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        let price = this.previousElementSibling.firstElementChild.innerHTML

        let existCard = cardlist.find(card => card.Id === id)

        if(existCard == undefined) {
            cardlist.push({
                Id: id,
                Image: src,
                Card: card,
                Price: price,
                Count: 1,
            })
        }

        else{
            existCard.Count += 1
        }

        localStorage.setItem('Cards', JSON.stringify(cardlist))
        ShowCount()
    }
}

function ShowCount() {
    let count = document.querySelector('.creditcard a span')
    let cardlist = JSON.parse(localStorage.getItem('Cards'))

    count.innerHTML = cardlist.length
}

ShowCount()