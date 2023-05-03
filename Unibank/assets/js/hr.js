document.querySelectorAll('.hrsection a').forEach(function(selected) {
    selected.addEventListener('click', function() {
        document.querySelector('.hrsection .selectloc').classList.remove('selectloc')
        selected.classList.add('selectloc')
    })
})