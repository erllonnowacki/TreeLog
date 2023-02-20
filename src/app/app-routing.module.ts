import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './pages/form/form.component';
import { HomePageComponent } from './pages/home/home.component';
import { ProdutoComponent } from './pages/produto/produto.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'novo', component: ProdutoComponent},
  // {path: 'editar/:id', component: ProdutoComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {}
