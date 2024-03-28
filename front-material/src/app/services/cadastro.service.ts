import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from './../model/Livro';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  baseUrl: string = 'http://localhost:8080/livros';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  listAll(): Observable<Livro[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  listById(id: number): Observable<Livro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`;
    return this.http.put<Livro>(url, livro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`;
    return this.http.delete<Livro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
