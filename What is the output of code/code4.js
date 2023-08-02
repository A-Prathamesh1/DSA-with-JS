var Employee = {
        company: 'xyz',
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
/**
 * emp1.company can not be deleted cause company is not it's own property,
 * it belongs to it's proto type
 * to delete the company property there are two ways
 * delete Employee.company or delete emp1.__proto__.company
 */

// delete Employee.company;
console.log(Employee.company); // it should delete the property from employee

// delete emp1.__prototype__.company; //<- does not delete the company
console.log(emp1.company);
