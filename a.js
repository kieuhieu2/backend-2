// Define the Subject interface
class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }

    attach(observer) {
        console.log("Subject: Attached an observer.");
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        console.log("Subject: Notifying observers...");
        this.observers.forEach(observer => observer.update(this));
    }

    someBusinessLogic() {
        console.log("\nSubject: I'm doing something important.");
        this.state = Math.floor(Math.random() * 10);

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

//observer.js
class Observer {
    update(subject) {
        // To be implemented by concrete observers
    }
}


// ConcreteObserverA.js
class ConcreteObserverA extends Observer {
    update(subject) {
        if (subject.state < 3) {
            console.log("ConcreteObserverA: Reacted to the event A");
        }
    }
}

// ConcreteObserverB.js
class ConcreteObserverB extends Observer {
    update(subject) {
        if (subject.state === 0 || subject.state >= 2) {
            console.log("ConcreteObserverB: Reacted to the event B");
        }
    }
}

module.exports = ConcreteObserverB;


// Usage
const subject = new Subject();

const observerA = new ConcreteObserverA();
subject.attach(observerA);

const observerB = new ConcreteObserverB();
subject.attach(observerB);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observerA);

subject.someBusinessLogic();
