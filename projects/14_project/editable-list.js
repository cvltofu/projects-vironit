let array = ['One', 'Two', 'Three', 'Four']

editableList(array)
addValue()
deleteValue()
editValue()

function editableList(array) {
    let elems = array.map((element) => `<li>${element}</li>`)

    document.querySelector('.elem_list').innerHTML = elems.join('')
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
            let prevText = elem.target.innerText
            elem.target.innerHTML = `<input type="text" class="editable_text" value ="${prevText}" />`

            document.querySelector('.editable_text').onblur = () => {
                elem.target.innerHTML =
                    document.querySelector('.editable_text').value
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
