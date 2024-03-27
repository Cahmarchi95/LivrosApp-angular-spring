import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from './../../services/cadastro.service';
import { Livro } from './../../model/Livro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private cadastroService: CadastroService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  formulario!: FormGroup;
  submitted: boolean = false;
  livros: Livro[] = [];

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
  }

  resetForm() {
    this.formulario.reset();
  }

  submit() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    const formValues = this.formulario.value;
    const livro: Livro = new Livro(
      formValues.titulo,
      formValues.autor,
      formValues.editora,
      formValues.descricao,
      formValues.genero,
      formValues.anoLancamento
    );

    this.cadastroService.save(livro).subscribe((resposta) => {
      this.livros.push(resposta);
      this.resetForm();
      alert('Livro cadastrado com sucesso!');
      this.router.navigate(['listaLivros']);
    });
  }
}
