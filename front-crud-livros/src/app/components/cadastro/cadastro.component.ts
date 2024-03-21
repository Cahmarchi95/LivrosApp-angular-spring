import { Component, OnInit } from '@angular/core';
import { Livro } from './../../model/Livro';
import { LivroService } from './../../services/livro.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  cadastroForm!: FormGroup;
  submitted = false;

  livro = new Livro();
  livros: Livro[] = [];

  constructor(
    private livroService: LivroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //validations
    this.cadastroForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      descricao: ['', Validators.minLength(10)],
      genero: ['', Validators.required],
      anoLancamento: ['', Validators.required],
    });
  }

  cadastrarLivros(): void {
    this.submitted = true;
    if (this.cadastroForm.invalid) {
      return;
    }

    this.livroService.cadastrarLivros(this.livro).subscribe((retorno) => {
      this.livros.push(retorno);
      this.livro = new Livro();
      alert('Livro cadastrado com sucesso!');
      this.router.navigate(['listaLivros']);
    });
  }
}
