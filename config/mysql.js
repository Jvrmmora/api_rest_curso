const { Sequelize } = require("sequelize") //INSTANCIAMIENTO DE SQL

const NODE_ENV = process.env.NODE_ENV

const database = (NODE_ENV === 'test') ? process.env.SQL_DATABASE_TEST : process.env.SQL_DATABASE || 'API_CURSO'
const username = process.env.SQL_USER || 'root'
const password = process.env.SQL_PASS || 'Rootjavimora280615.'
const host = process.env.SQL_HOST || 'localhost'


const sequelize = new Sequelize(
    database,
    username,
    password,
    {   host,
        dialect:"mysql"
    }
)
// VIDEO #25 MODELOS MYSQL
const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log("*********MYSQL Conexion correcta******")
    } catch (error) {
        console.log("*****MYSQL Error de conexion :( *****", error)
    }
}

module.exports = {sequelize,dbConnectMySql}