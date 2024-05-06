const MilkTeaDecorator = require('./MilkTeaDecorator');

class WhiteBubble extends MilkTeaDecorator {
    constructor(inner) {
        super(inner);
    }

    cost() {
        return 1.5 + super.cost();
    }
}

module.exports = WhiteBubble;