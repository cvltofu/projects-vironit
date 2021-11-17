class HashStorage {
    constructor() {
        this.hash = {}
    }

    addValue(key, value) {
        this.hash[key] = value
    }

    getValue(key) {
        if (key) return this.hash[key]
    }

    deleteValue(key) {
        if (key in this.hash) delete this.hash[key]
    }

    getKeys() {
        const drinks = []
        let i = 0
        for (const key in this.hash) {
            drinks[i] = key
            i++
        }
        return drinks
    }
}

const coctailsStorage = new HashStorage()

function addDrink() {
    let drink = {},
        drinkName = ''

    drinkName = prompt('Введите название напитка: ')
    if (drinkName !== null) {
        drink.alco = confirm('Напиток алкогольный?')
            ? 'алкогольный'
            : 'безалкогольный'

        drink.ingredients = []
        drink.numberOfIngredients = prompt('Назовите количество ингредиентов: ')
        alert('Вводите ингредиенты: ')
        for (let i = 0; i < drink.numberOfIngredients; i++) {
            drink.ingredients[i] = prompt()
        }
        drink.recipe = prompt('Введите рецепт: ')

        coctailsStorage.addValue(drinkName, drink)
        console.log(`Напиток ${drinkName} сохранён в меню.`)
    }
}

function getDrink() {
    let drinkName = prompt('Напиток, рецепт которого хотите увидеть: ')
    drinkInfo = coctailsStorage.getValue(drinkName)
    if (drinkInfo === undefined) return alert('Такого напитка нет в меню.')
    console.log(
        `Коктейль ${drinkName} (алкогольный: ${
            'алкогольный' ? 'да' : 'нет'
        })\nНеобходимые ингредиенты: `
    )

    for (let i = 0; i < drinkInfo.ingredients.length; i++) {
        console.log(`${drinkInfo.ingredients[i]}\n`)
    }
    console.log(`Рецепт: ${drinkInfo.recipe}`)
}

function deleteDrink() {
    let drinkName = prompt(
        'Введите название напитка, который хотите удалить из меню: '
    )
    coctailsStorage.deleteValue(drinkName)
    console.log(`Напиток ${drinkName} удален!`)
}

function getAllDrinks() {
    console.log(`Список всех напитков: ${coctailsStorage.getKeys()}`)
}
