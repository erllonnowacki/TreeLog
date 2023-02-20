import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit{

  produtos$!: Observable<Produto[]>; //$ significa observable
  error$ = new Subject<boolean>


  constructor (private service: ProdutoService) {}

  ngOnInit(){
    this.onRefresh()
  }
    onRefresh(){
      this.produtos$ = this.service.list().pipe(catchError(error => {
        this.error$.next(true)
        console.log(error)
        return of()
    }))
  }
}
