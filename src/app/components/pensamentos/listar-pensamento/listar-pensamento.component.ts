import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'teste 2',
      autoria: 'minha',
      modelo: 'modelo1'
    },
    {
      conteudo: 'teste 3',
      autoria: 'minha tbm',
      modelo: 'modelo2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
