import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { Observable, of, Subject} from 'rxjs'
import { catchError} from 'rxjs/operators'

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent implements OnInit{


  produtos$!: Observable<Produto[]>; //$ significa observable
  error$ = new Subject<boolean>

  constructor(private service: ProdutoService
    ){}

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
