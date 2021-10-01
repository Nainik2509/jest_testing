const reverseString = require('./reverseString')

test('Reverse String function exists', () => {
    expect(reverseString).toBeDefined()
})

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})