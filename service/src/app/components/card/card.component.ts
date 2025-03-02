import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { MeuPipePipe } from "../../meu-pipe.pipe";

@Component({
  selector: 'app-card',
  imports: [CommonModule, MeuPipePipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  name: string = '';
  photo: string = '';
  types: string[] = [];

  constructor(private service: PokemonServiceService) {}

  ngOnInit() {
    this.service.getPokemon("pikachu").then((data) => {
      this.name = data.name;
      this.types = data.types.map((t: any) => t.type.name);
      this.photo = data.sprites.front_default;
    });
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).then((data) => {
      this.name = data.name;
      this.types = data.types.map((t: any) => t.type.name);
      this.photo = data.sprites.front_default;
    });
  }
}
