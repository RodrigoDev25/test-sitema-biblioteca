const bibliotecaModel = require("./biblioteca.model")

function createBook(nome, autor, anoPublicacao, categoria) {
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
function listarLivros() {
  return bibliotecaModel.buscarTodosOsLivros();
}

function buscarLivroPorNome(titulo) {
  if (!titulo) {
    return "Erro: Título é obrigatório para busca";
  }

  return bibliotecaModel.buscarLivroPorNome(titulo);
}

function buscarLivroPorCategoria(categoria) {
  if (!categoria) {
    return "Erro: Categoria é obrigatória para busca";
  }

  return bibliotecaModel.buscarLivroPorCategoria(categoria);
}

module.exports = {
    createBook,
    listarLivros,
    buscarLivroPorNome,
    buscarLivroPorCategoria
}