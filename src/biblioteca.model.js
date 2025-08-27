const livros = []

function criarLivro(nome, autor, anoPublicacao, categoria) {
    const novoLivro = {
        id: 123,
        nome: nome,
        autor: autor,
        ano_publicacao: anoPublicacao,
        categoria: categoria || "Geral"
    }

    livros.push(novoLivro)

    return novoLivro
}

function listarTodosLivro() {
    return livros;
}

function buscarLivrosPorNome(nome) {
    return livros.find((livro) => livro.nome === nome);
}

function buscarLivroPorCategoria(categoria) {
    const buscarCategoria = livros.find((livro) => livro.categoria === categoria);
     return buscarCategoria;
}


module.exports = {
    criarLivro,
    listarTodosLivro,
    buscarLivrosPorNome,
    buscarLivroPorCategoria
}