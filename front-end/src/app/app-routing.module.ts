import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';

const routes: Routes = [
  {
    path: 'cadastro-clientes', component: CadastroClientesComponent
  },
  {
    path: 'cadastro-produtos', component: CadastroProdutosComponent
  },
  {
    path: 'cadastro-pedido', component: CadastroPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
