import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  public item: string = '';
  public lista: Item[] = [];


  public adicionarItem(){
    let itemLista = new Item();

    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);

    this.item = '';

    console.table(this.lista);
  }

  public riscarItem(itemLista: Item){
    itemLista.comprado = !itemLista.comprado;
  }
  
}
