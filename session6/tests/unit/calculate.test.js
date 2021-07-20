// Javascript Destructuring method
const calculate = require('../../calculate') // Method 1
const {sum, subtract} = require('../../calculate') // Method2
// Test or Expect matchers 
// Assertions 
 
test('adds 1 + 2 to equal 3', () => {
    expect(calculate.sum(1,2)).toBe(3)
})

/*
test('adds 0 + 0 to equal 0', () => {g
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

test('returns false if an undefined argument is provided', () => {
    expect(sum(1, a)).toBefalsy()
})
*/

//Another test
test('Subtracts 4 - 2 toBe 2', () => {
    expect(typeof subtract(4, 2)).toBe('number')
})


test(`Subtract '4' - 2 toBe falsy`, () => {
    expect(subtract('4', 2)).toBeFalsy()
})

test(`Subtract '4' - '2' toBe falsy`, () => {
    expect(subtract('4', '2')).toBeFalsy()
})

test(`Subtract 4 - '2' toBe falsy`, () => {
    expect(subtract(4, '2')).toBeFalsy()
})

test(`Subtract 2 - 2 toBe falsy`, () => {
    expect(subtract(2, 2)).toBeFalsy()
})

test(`Subtract 10 - 10 toBe falsy`, () => {
    expect(subtract(10, 10)).toBe(0)
})

test('Subtracts 4 - 2 to equal give 2', () => {
    expect(subtract(4, 2)).toBe(2)
})