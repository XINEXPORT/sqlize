import {Op} from 'sequelize'
import {Department, Employee} from './model.js'

const legal = await Department.create({
    deptCode: 'legal',
    deptName: 'Legal',
    phone: '123-4567',
});

await Department.create({
    deptCode: 'human',
    deptName: 'Human Resources',
    phone: '555-5555',
});

const leonard = await Employee.create({
    name: 'Leonard',
    deptCode: 'legal',
    salary: 90000,
})

const eric = await Employee.create({
    name: 'Eric',
    deptCode: 'human',
    salary: 10000,
})

await Employee.create({
    name: 'June',
    deptCode: 'human',
    salary: 50000,
})

// //update
leonard.salary = 1000000
await leonard.save();

// //delete
await leonard.destroy();

//converts all fiends to JSON

//find all
// const emps = await Employee.findAll();

// //find by key
// const emp3 = await Employee.findByPk(3)

// //adding WHERE clause
// const caEmps = await Employee.findAll({
//     where: {state: 'TX', salary: 10000}
// });

// //Operators (import Op)
// const makesGoodMoney = await Employee.findAll({
//     where: {
//         salary: {[Op.gte]: 101}
//     }
// })

console.log(leonard)
