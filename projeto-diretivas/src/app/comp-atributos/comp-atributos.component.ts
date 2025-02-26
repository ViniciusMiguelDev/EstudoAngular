import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css',
})
export class CompAtributosComponent {
  estilo: string = 'enable';
  corFundo: string = 'red';
  corText: string = 'white';
  item: string = '';
  lista: string[] = [];
  isEnableBlock: boolean = true;

  addLista() {
    this.lista.push(this.item);
  }

  change() {
    if(this.isEnableBlock) {
      this.isEnableBlock = false
    } else {
      this.isEnableBlock = true
    }
  }

  mudarEstilo() {
    if (this.estilo == 'enable') {
      this.estilo = 'disable';
    } else {
      this.estilo = 'enable';
    }
  }
}
