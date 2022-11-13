require('dotenv').config();
const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;

// parei aqui: https://www.youtube.com/watch?v=OFrnB7Bvznk&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=24


// Post.sync().then((res) => {
//     console.log('banco de dados criado com sucesso', res);
//     db.sequelize.close();
// });
