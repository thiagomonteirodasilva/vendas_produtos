import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiUrlService } from '../services/api-url.service';

import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

  clientes: any = [];
  produtos: any = [];
  dropdownSettings: IDropdownSettings;
  valorTotal: number;

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
    this.apiService.apiGet('listar-produtos').subscribe(data => {
      this.produtos = data;
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Remover toda a seleção',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  somarValores(valor: any){
    console.log(valor)
    // this.valorTotal += valor;
    // console.log(this.valorTotal);
  }

  cadastrarPedido(form: NgForm){
    
  }
}
