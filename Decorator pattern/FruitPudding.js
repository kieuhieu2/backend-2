// FruitPudding.js
const MilkTeaDecorator = require('./MilkTeaDecorator');

class FruitPudding extends MilkTeaDecorator {
    constructor(inner) {
        super(inner);
    }

    cost() {
        return 3 + super.cost();
    }
}

module.exports = FruitPudding;
