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

module.exports = Subject;