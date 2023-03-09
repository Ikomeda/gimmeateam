const Engineer = require('../lib/Engineer');

test('creates an engineer employee', () => {
    const engineer = new Engineer('Biggus', 8, 'dickus@gmail.com', 'BiggusDickus')

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets the engineers github name', () => {
    const engineer = new Engineer('Biggus', 8, 'dickus@gmail.com', 'BiggusDickus')

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets the role of employee (in this case engineer)', () => {
    const engineer = new Engineer('Biggus', 8, 'dickus@gmail.com', 'BiggusDickus')

    expect(engineer.getRole()).toEqual('Engineer');
})