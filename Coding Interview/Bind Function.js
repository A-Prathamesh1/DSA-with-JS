/**
 * Bind function, binds the "this" to passed object
 * bind is used to call a function which is not defined with the object
 *
 */
const company = {
        firstName: 'John',
        lastName: 'doe',
        fullName: function () {
                return `my name is ${this.firstName}  ${this.lastName}`;
        },
};

const person = { firstName: 'Prat', lastName: 'Ausekar' };
let fn = company.fullName.bind(person);

console.log(fn());

let person2 = { firstName: 'Avyann', lastName: 'Nandode' };

console.log(company.fullName.bind(person2)());
