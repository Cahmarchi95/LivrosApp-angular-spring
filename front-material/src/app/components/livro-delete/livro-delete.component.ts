import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from './../../services/cadastro.service';
import { Livro } from './../../model/Livro';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.scss'],
})
export class LivroDeleteComponent implements OnInit {
  formulario!: FormGroup;
  livro!: Livro;
  livroId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      titulo: [{ value: '', disabled: true }],
      autor: [{ value: '', disabled: true }],
      editora: [{ value: '', disabled: true }],
      descricao: [{ value: '', disabled: true }],
      genero: [{ value: '', disabled: true }],
      anoLancamento: [{ value: '', disabled: true }],
    });

    this.route.params.subscribe((params) => {
      this.livroId = +params['id'];
      if (this.livroId) {
        this.cadastroService.listById(this.livroId).subscribe((livro) => {
          this.livro = livro;

          this.formulario.patchValue({
            titulo: livro.titulo,
            autor: livro.autor,
            editora: livro.editora,
            descricao: livro.descricao,
            genero: livro.genero,
            anoLancamento: livro.anoLancamento,
          });
        });
      }
    });
  }

  excluir(): void {
    this.cadastroService.delete(this.livro).subscribe(() => {
      alert('Livro excluído com sucesso!');
      this.router.navigate(['listaLivros']);
    });
  }

  cancel(): void {
    this.router.navigate(['listaLivros']);
  }
}
