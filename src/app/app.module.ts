import { ConfirmDialogComponent } from 'src/app/components/ConfirmDialogComponent/ConfirmDialogComponent'
import { ProdutoComponent } from './pages/produto/produto.component'
import { AppRoutingModule } from './app-routing.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomePageComponent } from './pages/home/home.component'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http'
import { FormComponent } from './pages/form/form.component'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatTabsModule } from '@angular/material/tabs'
import { HeaderComponent } from './components/header/header.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { ProdutoService } from './services/produtos.service'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        FormComponent,
        ProdutoComponent,
        HeaderComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [ProdutoService],
    bootstrap: [AppComponent],
})
export class AppModule {}
