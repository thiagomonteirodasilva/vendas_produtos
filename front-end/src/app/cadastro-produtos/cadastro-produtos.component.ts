import { Component, OnInit } from '@angular/core';
import { ApiUrlService } from '../services/api-url.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  constructor(public apiService: ApiUrlService) { }

  ngOnInit(): void {
  }

  cadastrarProduto(form: NgForm){
    return this.apiService.apiPost('criar-produto', form.value);
  }

}
