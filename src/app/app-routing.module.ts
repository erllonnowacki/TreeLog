import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormComponent } from './pages/form/form.component'
import { HomePageComponent } from './pages/home/home.component'
import { ProdutoComponent } from './pages/produto/produto.component'
import { ProdutoResolverGuard } from './guards/produto-resolver.guard'

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'produtos', component: ProdutoComponent },
    {
        path: 'produtos/editar/:id',
        component: FormComponent,
        resolve: {
            produto: ProdutoResolverGuard,
        },
    },
    {
        path: 'produtos/novo',
        component: FormComponent,
        resolve: {
            produto: ProdutoResolverGuard,
        },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
