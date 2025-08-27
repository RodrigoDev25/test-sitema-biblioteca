const bibliotecaService = require("./biblioteca.service")


test("Verificar se o nome do livro é obrigatório", () => {
    const teste = bibliotecaService.createBook("",)
    expect(teste).toBe("ERROR: Nome é obrigatório.")
} )

test("Verificar se o autor do livro é obrigatório", () => {
    const teste = bibliotecaService.createBook("Harry Potter", "")
    expect(teste).toBe("ERROR: Autor é obrigatório.")
} )

test("Verificar se o ano de piblicação do livro é obrigatório", () => {
    const teste = bibliotecaService.createBook("Harry Potter", "J.K. Rowlling", "")
    expect(teste).toBe("ERROR: Ano de publicação é obrigatório.")
} )

test("Verificar se esta sendo criado um cadastro de livro", () => {
    const teste = bibliotecaService.createBook("Harry Potter", "J.K. Rowlling", "1997", "categoria")
    expect(teste.nome).toBe("Harry Potter")

} )

//___________________//
test("Verificar se está retornando a busca por nome com sucesso", () => {
    bibliotecaService.createBook("Nome1", "Autor1", "2000", "categoria1")
    const teste = bibliotecaService.buscarLivroPorNome("Nome1")
    expect(teste.nome).toBe("Nome1")
} )

test("Verificar se a o título do livro está vazio e retornando erro", () => {
    const teste = bibliotecaService.buscarLivroPorNome("")
    expect(teste).toBe("Erro: Título é obrigatório para busca")
} )

test("Verificar se está retornando a busca por nome com sucesso", () => {
    bibliotecaService.createBook("Nome2", "Autor2", "2000", "categoria2")
    const teste = bibliotecaService.buscarLivroPorCategoria("categoria2")
    expect(teste.categoria).toBe("categoria2")
} )