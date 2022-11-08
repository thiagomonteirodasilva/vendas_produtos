import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiUrlService } from '../services/api-url.service';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

  clientes: any = [];
  produtos: any = [];

  constructor(public apiService: ApiUrlService) { }

  ngOnInit(): void {
    this.listarClientes();
    this.listarProdutos();
  }

  listarClientes(){
    return this.apiService.apiGet('listar-clientes').subscribe(data => {
      this.clientes = data;
    })
  }

  listarProdutos(){
    return this.apiService.apiGet('listar-produtos').subscribe(data => {
      this.produtos = data;
    })
  }

  cadastrarPedido(form: NgForm){
    
  }
}
