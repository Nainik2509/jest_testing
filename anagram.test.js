const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dity romm##"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"Hello" is not an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})