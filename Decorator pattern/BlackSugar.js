const MilkTeaDecorator = require('./MilkTeaDecorator');

class BlackSugar extends MilkTeaDecorator {
    constructor(inner) {
        super(inner);
    }

    cost() {
        return 2 + super.cost();
    }
}

module.exports = BlackSugar;