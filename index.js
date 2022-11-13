require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const { Sequelize } = require('sequelize');

const app = express();

// Config
    // Definição da porta
    const port = process.env.PORT || 3000;
    
    // Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Conexão com o banco de dados
    const sequelize = new Sequelize(
        process.env.DB_DATABASE,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: process.env.DB_CONNECTION
        }
    );
//

// Rotas
app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
