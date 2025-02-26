import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor() {}
  async getPokemon(pokemonName: string): Promise<any> {
    // 🚀 Agora retorna Promise<any>
    try {
      const response = await fetch(`${this.baseURL}${pokemonName}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar o Pokémon: ${response.statusText}`);
      }
      return await response.json(); // Retorna os dados JSON
    } catch (error) {
      console.error('Erro na requisição:', error);
      return null; // Retorna null em caso de erro para evitar quebras
    }
  }
}
