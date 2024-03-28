import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { LivroUpdateComponent } from './components/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/livro-delete/livro-delete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
  },
  { path: 'listaLivros', component: TabelaComponent },
  { path: 'livros/update/:id', component: LivroUpdateComponent },
  { path: 'livros/delete/:id', component: LivroDeleteComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
