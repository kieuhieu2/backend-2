const ConcreteObserverA = require('../ConcreteObserverA');

test('state = 6 is error ', () => {
    // Mock the subject object
    const subject = { state: 2 };
    // Create an instance of ConcreteObserverA
    const observerA = new ConcreteObserverA();
    // Call the update method and capture the output
    const result = observerA.update(subject);
    // Assert that the result is correct
    expect(result).toBe('ConcreteObserverA: Reacted to the event A');
});
