import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { TabelaComponent } from './components/tabela/tabela.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
  },
  { path: 'listaLivros', component: TabelaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
