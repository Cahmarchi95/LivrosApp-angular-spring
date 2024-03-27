import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './../model/Livro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  baseUrl: string = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro);
  }

  listAll(): Observable<Livro[]> {
    return this.http.get<any>(this.baseUrl);
  }

  listById(id: number): Observable<Livro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livro>(url);
  }

  update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`;
    return this.http.put<Livro>(url, livro);
  }

  delete(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`;
    return this.http.delete<Livro>(url);
  }
}
