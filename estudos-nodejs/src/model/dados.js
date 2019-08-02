const mongoose = require('mongoose');
const PostPessoa = new mongoose.Schema({

    Nome: String,
    Idade: String,
    Cargo: String,

});

module.exports = mongoose.model("dados",PostPessoa);
