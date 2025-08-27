const bibliotecaModel = require("./biblioteca.model")

function createBook(nome, autor, ano_publicacao, categoria) {
    if(!nome) {
        return "ERROR: Nome é obrigatório."
    }

    if(!autor) {
        return "ERROR: Autor é obrigatório."
    }    

    if(!anoPublicacao) {
        return "ERROR: Ano de publicação é obrigatório."
    }

    const novoLivro = bibliotecaModel.criarLivro(nome, autor, anoPublicacao, categoria)
    return novoLivro;
}

module.exports = {
    createBook
}