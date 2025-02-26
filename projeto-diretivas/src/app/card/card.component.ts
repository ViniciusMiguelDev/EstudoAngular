import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = 'superuser';

  constructor() {
    this.produtos = ['Iphone 14', 'Pc gamer', 'Nintendo Switch', 'Projetor'];
  }

  isAliveCard = true;
  changeLive() {
    if (this.isAliveCard) {
      this.isAliveCard = false;
    } else {
      this.isAliveCard = true;
    }
  }

  adicionar() {
    this.produtos.push('Mouse Gamer');
  }
  remover() {
    this.produtos.pop();
  }
}
