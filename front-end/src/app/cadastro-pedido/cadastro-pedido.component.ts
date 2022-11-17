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
  arrProdutosId: any = [];

  dropdownSettings: IDropdownSettings;
  
  
  valorTotal = 0;
  valorEmTela: string = '';

  //ngModel
  totalVenda = 0;
  produtosId: string = '';

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
      searchPlaceholderText: 'Digite algo',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }

  somarValores(valor: any){
    let valorSelecionado = valor['nome'].split(' ');
    valorSelecionado = valorSelecionado[valorSelecionado.length - 1].replace(',', '.')
    
    let valorUnitario = parseFloat(valorSelecionado);
    this.valorTotal += valorUnitario;
    this.valorEmTela = this.valorTotal.toFixed(2);

    this.adicionandoProdutoId(valor['id'])
  }

  subtrairValores(valor: any){
    let valorDesmarcado = valor['nome'].split(' ');
    valorDesmarcado = valorDesmarcado[valorDesmarcado.length - 1].replace(',', '.')
    
    let valorUnitario = parseFloat(valorDesmarcado);
    this.valorTotal -= valorUnitario;
    this.valorEmTela = this.valorTotal.toFixed(2);

    this.removendoProdutoId(valor['id']);
  }

  adicionandoProdutoId(produtoId: number){
    this.arrProdutosId.push(produtoId);
    this.produtosId = this.arrProdutosId.toString();
  }

  removendoProdutoId(produtoId: number){
    const index = this.arrProdutosId.indexOf(produtoId);
    if(index > -1){
      this.arrProdutosId.splice(index, 1)
      this.produtosId = this.arrProdutosId.toString();
    }
  }

  cadastrarPedido(form: NgForm){
    this.apiService.apiPost('criar-pedido-venda', form.value)
  }
}