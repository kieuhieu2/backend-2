// index.js
const MilkTea = require('./MilkTea');
const BlackSugar = require('./BlackSugar');
const Bubble = require('./Bubble');
const EggPudding = require('./EggPudding');
const FruitPudding = require('./FruitPudding');
const WhiteBubble = require('./WhiteBubble');

// Create an EggPuddingAndFruitPuddingBlackSugarBubbleMilkTea
const firstMilkTea = new EggPudding(
    new FruitPudding(
        new BlackSugar(
            new Bubble(
                new MilkTea()))));

console.log("EggPuddingAndFruitPuddingBlackSugarBubbleMilkTea: " + firstMilkTea.cost());

// Create an EggPuddingBlackSugarWhiteBubbleMilkTea
const secondMilkTea = new EggPudding(
    new BlackSugar(
        new WhiteBubble(
            new MilkTea())));

console.log("EggPuddingBlackSugarWhiteBubbleMilkTea: " + secondMilkTea.cost());