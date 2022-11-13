require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION
    }
);

// Criar tabela 'postagens'
// OBS: os campos id, createdAt e updatedAt são criados automaticamente
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Postagem.create({
//     titulo: 'Um título qualquer',
//     conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus labore optio repudiandae sunt veritatis expedita, possimus qui suscipit esse pariatur neque nobis? Atque perspiciatis impedit modi harum reprehenderit enim nulla.'
// });

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Usuario.create({
//     nome: 'Hudson',
//     sobrenome: 'Andrade',
//     idade: 37,
//     email: 'hudson@teste.com',
// });


const Teste = sequelize.define('testes', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
});


Teste.sync().then((res) => {
    Teste.create({
        firstName: 'Maria',
        lastName: 'da Silva'
    }).then((res) => {
        console.log('Dados inseridos com sucesso!', res.id);
        sequelize.close();
        console.log('conexão fechada');
    });
});

// Teste.create({
//     firstName: 'Hudson',
//     lastName: 'Andrade'
// }).then((res) => {
//     console.log('Dados inseridos com sucesso!', res.id);
//     sequelize.close();
//     console.log('conexão fechada');
// });


// Rodar as migrations
// Usuario.sync({force:true});
// Postagem.sync({force: true});
