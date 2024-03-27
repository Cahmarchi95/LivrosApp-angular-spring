export class Livro {
  id?: number;
  titulo: string = '';
  autor: string = '';
  editora: string = '';
  descricao: string = '';
  genero: string = '';
  anoLancamento!: number;

  constructor(
    titulo: string,
    autor: string,
    editora: string,
    descricao: string,
    genero: string,
    anoLancamento: number
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.descricao = descricao;
    this.genero = genero;
    this.anoLancamento = anoLancamento;
  }
}
