let array = ['One', 'Two', 'Three', 'Four']

editableList(array)
addValue()
deleteValue()
editValue()

function editableList(array) {
    let elems = array.map((element) => `<li>${element}</li>`)

    document.querySelector('.elem_list').innerHTML = elems.join('')

    setIndexForLis()
}

function setIndexForLis() {
    document.querySelectorAll('li').forEach((item, i) => {
        item.id = i
    })
}

function addValue() {
    document.querySelector('.input_button').addEventListener('click', () => {
        let inputText = document.querySelector('.input_text').value
        if (inputText !== '') {
            array.push(inputText)
        }

        document.querySelector('.delete_button').disabled = false

        editableList(array)
    })
}

function editValue() {
    document.querySelectorAll('.elem_list').forEach((item) => {
        item.addEventListener('click', (elem) => {
            let prevValue = elem.target.innerText
            let currentLiIndex = elem.target.closest('li').id

            if (elem.target.innerText !== '') {
                elem.target.innerHTML = `<input type="text" class="editable_text" value ="${prevValue}" />`
            }

            elem.target.onblur = () => {
                elem.target.closest('li').innerHTML = elem.target.value
                array.splice(currentLiIndex, 1, elem.target.value)
            }
        })
    })
}

function deleteValue() {
    document.querySelector('.delete_button').addEventListener('click', () => {
        array.pop()
        if (array.length === 0)
            document.querySelector('.delete_button').disabled = true

        editableList(array)
    })
}
