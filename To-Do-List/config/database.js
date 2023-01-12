const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('strictQuery', true); // tirar aviso que foi introduzido para notificar os usuários sobre a mudança que será introduzida no Mongoose 7 para o valor padrão de strictQuery.

mongoose.connect('mongodb://127.0.0.1/to-do-list', { useNewUrlParser: true, useUnifiedTopology: true})  // tive que trocar localhost para 127.0.0.1 pois estava dando erro
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err));