/* eslint-disable @typescript-eslint/no-explicit-any */
import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/ConfirmDialogComponent/ConfirmDialogComponent';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  produtos$!: Observable<Produto[]>; //$ significa observable
  error$ = new Subject<boolean>();

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.produtos$ = this.service.listProduto().pipe(
      catchError((error) => {
        this.error$.next(true);
        console.log(error);
        return of();
      })
    );
  }

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  novoProduto() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onDelete(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.service.deleteProduto(id).subscribe({
          complete: () => this.onRefresh(),
          error: (e) => console.error(e),
        });
      }
    });
  }
}
