import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';

  constructor() {}
  ngOnChanges(): void {
    console.log('ngOnChanges chamado:', this.nome);
  }

  ngOnInit(): void {
    this.nome = `Olá ${this.nome}`;
  }
}
