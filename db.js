import{Sequelize} from "sequelize";

async function connectToDB (dbURI){
    console.log(`Connecting to DB: ${dbURI}`);


const sequelize= new Sequelize(dbURI,{
    logging: console.log,
    define: {
        timestamps: false,
        underscore: true,
    }
})

try{
    await sequelize.authenticate();
    console.log('connecting to db')
}catch(error){
    console.error("Unable to connect to db :(", error)
}
return sequelize
}
export default connectToDB

//This goes into a separate db folder
//This could also go into the server folder
//This can be templated