import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Produto } from '../interfaces/produto'
import { tap, delay, take } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ProdutoService {
    private readonly API = `${environment.API}produto`

    constructor(private http: HttpClient) {}

    private createProduto(produto: any) {
        return this.http.post(this.API, produto).pipe(take(1))
    }

    private updateProduto(produto: any) {
        return this.http.put(`${this.API}/${produto.id}`, produto).pipe(take(1))
    }

    listProduto() {
        return this.http
            .get<Produto[]>(this.API)
            .pipe(delay(1000), tap(console.log))
    }

    getByIdProduto(id: any) {
        return this.http.get<Produto>(`${this.API}/${id}`).pipe(take(1))
    }

    saveProduto(produto: any) {
        if (produto.id) {
            return this.updateProduto(produto)
        }
        return this.createProduto(produto)
    }

    deleteProduto(id: any) {
        return this.http.delete<Produto>(`${this.API}/${id}`).pipe(take(1))
    }

    // create(produto: any, imageBase64: string) {
    //     const payload = {
    //         ...produto,
    //         image: imageBase64,
    //     }
    //     return this.http.post(this.API, payload).pipe(take(1))
    // }
    // put() {
    //   return this.http.put<Produto[]>(this.API).pipe(tap(console.log));
    // }
}
