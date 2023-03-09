const Employee = require('../lib/Employee');

test('creating a new employee', () => {
    const employee = new Employee('Biggus', 8, 'dickus@gmail.com');

    expect(employee.name).toEqual('Biggus');
    expect(employee.id).toEqual('8');
    expect(employee.email).toEqual('biggus@gmail.com');
});

test('gets the name of an employee', () => {
    const employee = new Employee('Biggus', 8, 'dickus@gmail.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
})

test('gets the id of an employee', () => {
    const employee = new Employee('Biggus', 8, 'dickus@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets the email of an employee', () => {
    const employee = new Employee('Biggus', 8, 'dickus@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets the role of an employee', () => {
    const employee = new Employee('Biggus', 8, 'dickus@gmail.com');

    expect(employee.getRole()).toEqual("Employee")
});