document.addEventListener('click', function (event) {
    if (event.target.dataset.counter != undefined) {
        // если есть атрибут...
        event.target.value++
    }
})
