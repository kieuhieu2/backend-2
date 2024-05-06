const MilkTeaDecorator = require('./MilkTeaDecorator');

class Bubble extends MilkTeaDecorator {
    constructor(inner) {
        super(inner);
    }

    cost() {
        return 1 + super.cost();
    }
}

module.exports = Bubble;