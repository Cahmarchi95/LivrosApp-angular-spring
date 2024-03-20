# crud-livros
Projeto de estudo para desenvolvimento de uma API de livros feita em Spring Boot e Frontend em Angular

# :computer: Tecnologias utilizadas
- Java, SpringBoot, Jpa, H2, Angular, Bootstrap

# :white_check_mark: Endpoint principal
- "/livros"
  
# :hammer: Funcionalidades do projeto

- Metódo: POST Endpoint:"/livros" - Cadastra um livro com os seguintes atributos "titulo","autor","editora", "descricao", "genero" e "anoLancamento".
  
- Metódo: GET - Endpoint: "/livros" - Retorna uma lista das contas cadastradas exibindo os atributos "id", "titulo","autor","editora","descricao","genero" e "anoLancamento"
  
- Metódo: GET - Endpoint: "livros/{id}" - Retorna os atributos de um livro específico, recebendo como parâmetro o id do livro.
  
- Método: PUT - Endpoint: "livros/{id}" - Faz o update de um ou mais atributos de um livro em específico, recebendo como parâmetro o id do livro
  
- Método: DELETE - Endpoint: "livros/{id}" - Faz a exclusão de um livro em específico, recebendo como parâmetro o id do livro

