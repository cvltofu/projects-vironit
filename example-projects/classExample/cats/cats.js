class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
    }

    voice() {
        console.log('I am animal')
    }
}

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am cat')
    }

    //cat.ageInfo = 8
    get ageInfo() {
        return this.age * 7
    }

    //cat.ageInfo
    //56
    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'cat',
    age: 5,
    color: 'black',
})
