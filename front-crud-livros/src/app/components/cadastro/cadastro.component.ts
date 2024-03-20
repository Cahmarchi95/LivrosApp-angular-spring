import { Component } from '@angular/core';
import { Livro } from './../../model/Livro';
import { LivroService } from './../../services/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  livro = new Livro();
  livros: Livro[] = [];

  constructor(private livroService: LivroService, private router: Router) {}

  cadastrarLivros(): void {
    this.livroService.cadastrarLivros(this.livro).subscribe((retorno) => {
      this.livros.push(retorno);
      this.livro = new Livro();
      alert('Livro cadastrado com sucesso!');
      this.router.navigate(['listaLivros']);
    });
  }
}
