const Subject = require('./Subject');
const ConcreteObserverA = require('./ConcreteObserverA');
const ConcreteObserverB = require('./ConcreteObserverB');


const subject = new Subject();

const observerA = new ConcreteObserverA();
subject.attach(observerA);

const observerB = new ConcreteObserverB();
subject.attach(observerB);

console.log(subject + '       hello');

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observerA);

subject.someBusinessLogic();
