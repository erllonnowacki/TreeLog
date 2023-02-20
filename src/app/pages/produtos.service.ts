import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly API = `${environment.API}produtos`;

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Produto[]>(this.API).pipe(delay(1000), tap(console.log));
  }
  // post() {
  //   return this.http.post<Produto[]>(this.API).pipe(tap(console.log));
  // }
  // put() {
  //   return this.http.put<Produto[]>(this.API).pipe(tap(console.log));
  // }
}
