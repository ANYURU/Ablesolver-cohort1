/**
 * Examples of destructuring
 */

let a = 4;
let b = 2;

[a, b] = [b, a]
console.log(a);
console.log(b); 
 
const person = {
     'firstname':'David',
     'lastname':'Anyuru',
     'middlename':'Derrick',
     'town':'Busega'
}
 
 // Destructured variables 
const {firstname, lastname} = person
 
console.log(firstname)
 
 // None destructured variables 
console.log(person['firstname'])
console.log(person.firstname)