const livros = []

function criarLivro(nome, autor, anoPublicacao, categoria) {
    const novoLivro = {
        id: 123,
        nome: nome,
        autor: autor,
        ano_publicacao: anoPuplicacao,
        categoria: categoria || "Geral"
    }

    listarLivrosPorNome.push(novoLivro)

    return novoLivro
}

function listarTodosLivro() {}

function listarLivrosPorNome(nome) {
    const filtrarLivros = listarLivrosPorNome.find(find => livro.nome === nome)
    return filtrarLivros
}

function buscarLivroPorCategoria(categoria) {
    const filtrarLivros = livros.find((livro) => livro.categoria === categoria)
    return filtrarLivros
}

module.exports = {
    criarLivro,
    listarTodosLivro,
    listarLivrosPorNome,
    buscarLivroPorCategoria
}