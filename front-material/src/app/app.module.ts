import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroService } from './services/cadastro.service';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TabelaComponent } from './components/tabela/tabela.component';
import { LivroUpdateComponent } from './components/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/livro-delete/livro-delete.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    TabelaComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
