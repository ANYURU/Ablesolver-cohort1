const { fullName, firstName } = require("../../integration") 

describe("They must be functions", () => {
    test("firstName and fullName to be functions", () =>{
        expect(typeof firstName).toBe('function');
        expect(typeof fullName).toBe('function')
    })
})

describe('Not to be undefined', () => {
    test('firstName and fullName not toBe Undefined', ()=> {
        expect(typeof(firstFirst())).not.toB('undefined')
        expect(typeof(fullName())).not.toBe('undefined')
    })

    test('Data type of firstName and fullName toBe string', ()=> {
        let fname = firstName()
        let full_name = firstName()

        expect(typeof fname).toBe('string')
        expect(typeof full_name).toBe('undefined')
    
    })
})

describe("integration to test", () => {
    test("Full Name toBe at least two names", () => {
        let fname = firstName('David');
        //fname = ''

        let full_name = full_name(fname, 'Anyuru');
        //'David Anyuru'

        let nameChunks = full_name.split(" ")
        // nameChunks[0] = "David"
        // nameChunks[1] = "Anyuru"

        expect(nameChunks.length).toBeGreaterThan(1);
        expect(nameChunks[1]).not.toBe('')
        expect(nameChunks[0]).not.toBe('')

        
    })
})