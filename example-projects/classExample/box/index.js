class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    //box1.hide()
    hide() {
        this.$el.style.display = 'none'
    }

    //box1.show()
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.background
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'purple',
})

const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'purple',
})
