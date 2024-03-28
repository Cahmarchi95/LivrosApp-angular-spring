import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from './../../services/cadastro.service';
import { Livro } from './../../model/Livro';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.scss'],
})
export class LivroUpdateComponent implements OnInit {
  constructor(
    private cadastroService: CadastroService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formulario!: FormGroup;
  submitted: boolean = false;
  livros: Livro[] = [];
  livro!: Livro;
  livroId!: number;

  ngOnInit(): void {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      descricao: [
        '',
        [
          Validators.required,
          Validators.minLength(100),
          Validators.maxLength(500),
        ],
      ],
      genero: ['', Validators.required],
      anoLancamento: ['', Validators.required],
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

  submit() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    const formValues = this.formulario.value;
    if (this.livro) {
      this.livro.titulo = formValues.titulo;
      this.livro.autor = formValues.autor;
      this.livro.editora = formValues.editora;
      this.livro.descricao = formValues.descricao;
      this.livro.genero = formValues.genero;
      this.livro.anoLancamento = formValues.anoLancamento;

      this.cadastroService.update(this.livro).subscribe(() => {
        this.cadastroService.showMessage('Livro editado com sucesso!');
        setTimeout(() => {
          this.router.navigate(['listaLivros']);
        }, 1050);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['listaLivros']);
  }
}
