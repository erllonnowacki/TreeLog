import { Produto } from './../interfaces/produto'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable, of } from 'rxjs'
import { ProdutoService } from '../services/produtos.service'

@Injectable({
    providedIn: 'root',
})
export class ProdutoResolverGuard implements Resolve<Produto> {
    constructor(private service: ProdutoService) {}

    resolve(
        route: ActivatedRouteSnapshot
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): Observable<Produto> | Observable<any> {
        if (route.params && route.params['id']) {
            return this.service.getByIdProduto(route.params['id'])
        }
        return of({
            id: null,
            nome: null,
            descricao: null,
            preco: null,
        })
    }
}
