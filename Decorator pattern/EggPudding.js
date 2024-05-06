const MilkTeaDecorator = require('./MilkTeaDecorator');

class EggPudding extends MilkTeaDecorator {
    constructor(inner) {
        super(inner);
    }

    cost() {
        return 3 + super.cost();
    }
}

module.exports = EggPudding;