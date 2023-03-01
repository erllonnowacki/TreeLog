import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'app-confirm-dialog',
    template: `
        <h1 mat-dialog-title>Confirmação</h1>
        <div mat-dialog-content>Tem certeza que deseja excluir este item?</div>
        <div mat-dialog-actions>
            <button mat-button [mat-dialog-close]="false">Cancelar</button>
            <button mat-button [mat-dialog-close]="true">Excluir</button>
        </div>
    `,
})
export class ConfirmDialogComponent {
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}
}
