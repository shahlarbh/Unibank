let fixed = document.querySelector('.fixed')
let chatclose = document.querySelector('.chatclose')
let chatdiv = document.querySelector('.chatdiv')

fixed.onclick = function() {
    chatdiv.classList.remove('d-none')
    fixed.classList.add('d-none')
}

chatclose.onclick = function() {
    chatdiv.classList.add('d-none')
    fixed.classList.remove('d-none')
}

let volumechanger = document.querySelector('.volumechanger')
let volumer = document.querySelector('.volumer')
let maxvolume = document.querySelector('.maxvolume')
let minvolume = document.querySelector('.minvolume')

volumer.onclick = function() {
    volumechanger.classList.toggle('margintransfer')
    volumer.classList.toggle('colortransfer')
    maxvolume.classList.toggle('d-none')
    minvolume.classList.toggle('d-none')
}

let dottext = document.querySelector('.dottext')
let chatfulloptions = document.querySelector('.chatfulloptions')

dottext.onclick = function() {
    chatfulloptions.classList.toggle('d-none')
}