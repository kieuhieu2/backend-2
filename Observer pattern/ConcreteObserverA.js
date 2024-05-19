const Observer = require('./Observer');

class ConcreteObserverA extends Observer {
    update(subject) {
        if (subject.state < 3) {
            return "ConcreteObserverA: Reacted to the event A"; // Return the message
        }
    }
}

module.exports = ConcreteObserverA;
