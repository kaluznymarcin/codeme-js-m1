function Constructor(param) {
    this.param = param

    return {d: 1}
}

Object.assign(Constructor.prototype, {
    metoda1: function () {},
    metoda2: function () {}
});



class MyClass {
    constructor(param) {
        this.param = param
    }

    metoda1() {

    }

    metoda2() {

    }
}

const obj = {
    metoda1: function () {

    }
}

const newInstance = Object.create(obj, {
    color: {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 'blue'
    },
    changeColor: {
        value: function (newColor) {
            this.color = newColor
        }
    }   
})

Object.defineProperty(obj, 'color', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: 'blue'
});


Object.defineProperty(obj, 'color', {
    configurable: false,
    enumerable: false,
    get: function () {
        return 'Moj color: ' + this.cos;
    },
    set: function (value) {
        this.cos = value;
    }
});







