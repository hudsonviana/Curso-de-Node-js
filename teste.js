require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Conectado com sucesso ao banco de dados.');
})
.catch((error) => {
    console.log('Falha ao se conectar: ' + error);
});

