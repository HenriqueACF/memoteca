import { Component, OnInit } from '@angular/core';
import {Pensamento} from "../pensamento";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [
    {
      id: 1,
      conteudo: 'teste 2',
      autoria: 'minha',
      modelo: 'modelo1'
    },
    {
      id: 2,
      conteudo: 'teste 3',
      autoria: 'minha tbm',
      modelo: 'modelo2'
    },
    {
      id: 3,
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at risus non convallis. Maecenas semper sem a lacinia cursus. Ut varius a lectus quis eleifend. Nunc mollis orci eu arcu scelerisque volutpat. Mauris et magna ut nunc luctus auctor eleifend eu urna. Vivamus id tristique risus. Nam ac tincidunt augue. Vivamus in tristique felis, at condimentum neque. Aenean massa libero, vulputate sed dapibus nec, pharetra sit amet odio. Cras eros turpis, facilisis vitae varius vel, elementum a sapien. Praesent sit amet tellus luctus, pretium ante maximus, vulputate tortor. Nulla sit amet rhoncus mauris. Cras hendrerit pellentesque mauris, nec scelerisque odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      autoria: 'minha tbm',
      modelo: 'modelo2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
