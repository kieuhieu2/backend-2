const Subject = require('../Subject');
const ConcreteObserverA = require('../ConcreteObserverA');
const ConcreteObserverB = require('../ConcreteObserverB');

test('Observers react to changes in the subject', () => {
    // Create a new subject
    const subject = new Subject();

    // Create observers
    const observerA = new ConcreteObserverA();
    const observerB = new ConcreteObserverB();

    // Attach observers to the subject
    subject.attach(observerA);
    subject.attach(observerB);

    // Mock console.log to capture output
    console.log = jest.fn();


    subject.state = 2;

    // Assert that observers reacted appropriately
    expect(console.log).toHaveBeenCalledWith('ConcreteObserverA: Reacted to the event A');
    expect(console.log).toHaveBeenCalledWith('ConcreteObserverB: Reacted to the event A');

    // Reset mock
    console.log.mockReset();

    // Call someBusinessLogic again on the subject
    subject.someBusinessLogic();

    // Assert that observers reacted appropriately again
    expect(console.log).toHaveBeenCalledWith('ConcreteObserverA: Reacted to the event A');
    expect(console.log).toHaveBeenCalledWith('ConcreteObserverB: Reacted to the event A');

    // Detach observerA from the subject
    subject.detach(observerA);

    // Reset mock
    console.log.mockReset();

    // Call someBusinessLogic on the subject after detaching observerA
    subject.someBusinessLogic();

    // Assert that observerA is no longer reacting to changes
    expect(console.log).not.toHaveBeenCalledWith('ConcreteObserverA: Reacted to the event A');

    // Assert that observerB still reacts to changes
    expect(console.log).toHaveBeenCalledWith('ConcreteObserverB: Reacted to the event A');
});
