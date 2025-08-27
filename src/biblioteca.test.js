const bibliotecaService = require("./biblioteca.service")
const bibliotecaModel = require("./biblioteca.model")

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
    const teste = bibliotecaService.createBook("Harry Potter", "J.K. Rowlling", "1997")
    expect(teste.nome).toBe("Harry Potter")

} )

//___________________//
test("Verificar se está retornando a busca com sucesso", () => {
    const teste = bibliotecaService.buscarLivrosPorNome("Rodrigo")
    expect(teste).toBe("Rodrigo")

} )