const bibliotecaService = require("./biblioteca.service")

test("Verificar se o nome do livro é obrigatório", () => {
    const testeNome = bibliotecaService.createBook("",)
    expect(testeNome).toBe("ERROR: Nome é obrigatório.")
} )

test("Verificar se o autor do livro é obrigatório", () => {
    const testeNome = bibliotecaService.createBook("Harry Potter", "")
    expect(testeNome).toBe("ERROR: Autor é obrigatório.")
} )