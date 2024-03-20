import { Component } from '@angular/core';
import { LivroService } from './../../services/livro.service';
import { Livro } from './../../model/Livro';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  livro = new Livro();
  livros: Livro[] = [];
  btnCadastro: boolean = true;
  btnSelecao: boolean = false;
  livroSelecionadoId!: number;
  livroSelecionado!: Livro;

  //modal
  title = 'ng-bootstrap-modal-demo';
  closeResult!: string;
  modalOptions: NgbModalOptions;
  modalReference!: any;

  constructor(
    private livroService: LivroService,
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
    };
  }

  ngOnInit(): void {
    this.listarLivros();
  }

  listarLivros(): void {
    this.livroService
      .listarLivros()
      .subscribe((retorno) => (this.livros = retorno));
  }

  selecionarLivro(id: number): void {
    const livroSelecionado = this.livros.find((livro) => livro.id === id);

    if (livroSelecionado) {
      this.livroSelecionadoId = id;
      this.livros = [livroSelecionado];
      this.btnCadastro = false;
      this.btnSelecao = true;
    } else {
      console.error('Livro não encontrado.');
    }
  }

  removerLivros(): void {
    this.livroService
      .removerLivros(this.livroSelecionadoId)
      .subscribe((retorno) => {
        let posicao = this.livros.findIndex((obj) => {
          return obj.id == this.livroSelecionadoId;
        });

        if (posicao !== -1) {
          this.livros.splice(posicao, 1);
        }

        alert('Livro removido com sucesso!');
        this.cancelar();
      });
  }

  cancelar(): void {
    this.livro = new Livro();
    this.btnSelecao = false;
    this.btnCadastro = true;
    this.listarLivros();
  }

  salvarEdicao() {
    this.livroService
      .editarLivros(this.livroSelecionado.id, this.livroSelecionado)
      .subscribe(
        (livroEditado) => {
          alert('Livro editado com sucesso!');
          this.modalReference.close();
          this.cancelar();
        },
        (error) => {
          console.error('Erro ao editar livro:', error);
        }
      );
  }

  //Modal
  open(content: any) {
    if (this.livroSelecionadoId !== null) {
      this.livroSelecionado =
        this.livros.find((livro) => livro.id === this.livroSelecionadoId) ??
        new Livro();

      this.modalReference = this.modalService.open(content);
      this.modalReference.result.then(
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    } else {
      console.error('Nenhum livro selecionado.');
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
