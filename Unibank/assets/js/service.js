document.querySelectorAll('.atm a').forEach(function(selected) {
    selected.addEventListener('click', function() {
        document.querySelector('.atm .selectloc').classList.remove('selectloc')
        selected.classList.add('selectloc')
    })
})