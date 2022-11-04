import { Component, OnInit } from '@angular/core';
import { ApiUrlService } from '../services/api-url.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  clienteErrors = [];

  constructor(public apiService: ApiUrlService) { }

  ngOnInit(): void {
  }

  cadastrarCliente(form: NgForm){
    return this.apiService.apiPost('criar-cliente', form.value);
  }

}
