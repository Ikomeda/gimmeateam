const Intern = require('../lib/intern');

test('creates an Intern employee', () => {
    const intern = new Intern('Karen', 5, 'truekaren@yahoo.com', 'UsU');

    expect(intern.school).toEqual(expect.any(String));
})

test('gets the name of Interns school', () => {
    const intern = new Intern('Karen', 5, 'truekaren@yahoo.com', 'UsU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets the role of the intern', () => {
    const intern = new Intern('Karen', 5, 'truekaren@yahoo.com', 'UsU');

    expect(intern.getRole()).toEqual('Intern');
})