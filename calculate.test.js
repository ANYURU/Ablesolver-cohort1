const sum = require('./calculate')
 
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0)
})

test('returns false if no argument is provided',() => {
    expect(sum()).toBe(false)
} )

test('returns false if no argument is provided',() => {
    expect(sum(2)).toBe(false)
} )

test('returns false if a string argument is provided', () => {
    expect(sum(1,'1')).toBe(false)
})

// test('returns false if an undefined argument is provided', () => {
//     expect(sum(1, a)).toBe(false)
// })