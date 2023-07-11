import { Component, OnInit } from '@angular/core';
import {hasOneOfTypes} from "@angular/core/schematics/utils/typescript/symbol";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'Henrique Assis',
    modelo: 'modelo1'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("funcionou")
  }

  cancelar(){
    alert('Cancelou')
  }

  protected readonly hasOneOfTypes = hasOneOfTypes;
}
