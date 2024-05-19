const Observer = require('./Observer');

class ConcreteObserverB extends Observer {
    update(subject) {
        if (subject.state === 0 || subject.state >= 2) {
            console.log("ConcreteObserverB: Reacted to the event B");
        }
    }
}

module.exports = ConcreteObserverB;