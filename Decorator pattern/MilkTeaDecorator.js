// MilkTeaDecorator.js
const MilkTea = require('./MilkTea');

class MilkTeaDecorator extends MilkTea {
    constructor(inner) {
        super();
        this.milkTea = inner;
    }

    cost() {
        return this.milkTea.cost();
    }
}

module.exports = MilkTeaDecorator;
