require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// Config
    // Definição da porta
    const port = process.env.PORT || 3000;
    
    // Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
//

// Rotas
app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    res.send('Título: ' + req.body.titulo + '. Conteúdo: ' + req.body.conteudo);
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
