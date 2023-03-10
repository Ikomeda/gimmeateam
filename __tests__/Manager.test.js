const Manager = require('../lib/manager');

test('creating a new manager', () => {
    const manager = new Manager('Big Boss', 1, 'boss@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
    const manager = new Manager('Big Boss', 1, 'boss@gmail.com', 1);

    expect(manager.getRole()).toEqual('Manager');
})