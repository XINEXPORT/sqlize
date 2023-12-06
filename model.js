import {DataTypes, Model} from "sequelize";
import connectToDB from "./db.js";
import url from 'url'
import util from 'util';

const db = await connectToDB('postgresql:///employees') //This is the dbURI

class Department extends Model {};
Department.init(
    {
    deptCode: {
        type: DataTypes.STRING(5),
        primaryKey: true,

    },
    deptName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
    },
 },
 {
        modelName: 'department',
        sequelize: db,
 },
);

class Employee extends Model {
    [util.inspect.custom](){
    return this.toJSON();
    }};
Employee.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    state: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'TX'
    },
    salary:{
        type: DataTypes.INTEGER,
    },
    deptCode:{
        type: DataTypes.STRING(5),
        allowNull: true
    }
},
{   modelName: 'employee',
    sequelize: db,
}
)

Department.hasMany(Employee,{foreignKey: 'deptCode'});
Employee.belongsTo(Department, {foreignKey: 'deptCode'});

if(process.argv[1]===url.fileURLToPath(import.meta.url)){
    console.log("Syncing database")
    await db.sync({force:true});
    console.log("Finished syncing database!")
}
export {Department, Employee}



//THIS IS A SHORT HAND VERSION OF ABOVE//
// const Department = db.define('Department', {
//     deptCode: {
//       type: DataTypes.STRING(5),
//       primaryKey: true,
//     },
//     deptName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     phone: {
//       type: DataTypes.STRING
//     }
//   }, {
//     modelName: 'department',
//   });