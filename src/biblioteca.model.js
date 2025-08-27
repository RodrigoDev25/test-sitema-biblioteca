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

function listarTodosLivro() {}

function buscarLivrosPorNome(nome) {
    const filtrarLivros = buscarLivrosPorNome.find((livro) => livro.nome === nome)
    return filtrarLivros
}

function buscarLivroPorCategoria(categoria) {
    const filtrarLivros = livros.find((livro) => livro.categoria === categoria)
    return filtrarLivros
}

module.exports = {
    criarLivro,
    listarTodosLivro,
    buscarLivrosPorNome,
    buscarLivroPorCategoria
}