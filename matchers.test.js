/**
 * Visit site: https://jestjs.io/docs/using-matchers 
 * for more mathers 
 */
const {evaluation, person, fetchData} = require('./matchers')

//Using toBe on person
test('person.firstname toBe David', () => {
    expect(person.firstname).toBe('David')
})

//to<be matcher is btter for single values but toEqual and toStrictEqual are good for objects since they recursively run through the object keys 

// This test will fail
// test('Object values', () => {
//     expect(person).toBe({
//         'firstname': 'David',
//         'lastname': 'Anyuru',
//         'middlename': 'Derrick'
//      })
// }) 

// This test will pass 
test('Object values', () => {
    expect(person).toStrictEqual({
                'firstname': 'David',
                'lastname': 'Anyuru',
                'middlename': 'Derrick'
             })
})

// In JavaScript everything that the if statement will evaluate as false is considered falsy. So 0, null, undefined, false, [] 

test('Test null', () => {
    expect(null).toBeNull()
})

test('Null toBeFalsy', () => {
    expect(null).toBeFalsy()
})

test('Empty array is considered false', () => {
    expect([]).toBeTruthy()
})

// Asynchronous 

// Do not do this!
// test('The data is peanut butter', () =>  {
//     function callback(data){
//         expect(data).toBe('peanut butter')
//     }

//     fetchData
// })


//async / await
/*
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();

        } catch (error) {
            done(error);
        }
    }
    fetchData(callback)
})


test('The data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});
*/

test('the data is peanut butter', async () => {
    let data = await fetchData()
    expect(data).toBe('peanut butter');
});