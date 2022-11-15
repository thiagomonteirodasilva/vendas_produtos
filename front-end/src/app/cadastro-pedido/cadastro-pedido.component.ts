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
  valorTotal = 0;
  valorEmTela: string = '';

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
    let valorSelecionado = valor['nome'].split(' ');
    valorSelecionado = valorSelecionado[valorSelecionado.length - 1].replace(',', '.')
    
    let valorUnitario = parseFloat(valorSelecionado);
    this.valorTotal += valorUnitario;
    this.valorEmTela = this.valorTotal.toFixed(2);
    this.valorEmTela = this.valorEmTela.replace('.', ',');
    console.log(this.valorEmTela);
  }

  subtrairValores(valor: any){
    let valorDesmarcado = valor['nome'].split(' ');
    valorDesmarcado = valorDesmarcado[valorDesmarcado.length - 1].replace(',', '.')
    
    let valorUnitario = parseFloat(valorDesmarcado);
    this.valorTotal -= valorUnitario;
    this.valorEmTela = this.valorTotal.toFixed(2);
    this.valorEmTela = this.valorEmTela.replace('.', ',');
    console.log(this.valorEmTela);
  }

  cadastrarPedido(form: NgForm){
    
  }
}
