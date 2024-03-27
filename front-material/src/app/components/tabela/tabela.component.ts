import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Livro } from './../../model/Livro';
import { CadastroService } from './../../services/cadastro.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  livros: Livro[] = [];
  colunas = [
    'id',
    'titulo',
    'editora',
    'descricao',
    'genero',
    'anoLancamento',
    'action',
  ];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.listarLivros();
  }

  listarLivros(): void {
    this.cadastroService
      .listAll()
      .subscribe((retorno) => (this.livros = retorno));
  }
}
