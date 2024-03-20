import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './../model/Livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private url: string = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url);
  }

  cadastrarLivros(obj: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.url, obj);
  }

  removerLivros(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  editarLivros(id: number, obj: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.url}/${id}`, obj);
  }
}
