import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../_model/Pokemon.interface';
import { Type } from '../_model/Types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    number: 1,
    name: 'Bulbasaur',
    types:[
      Type.Grass,
      Type.Poison
    ]
}];

constructor(
  public pokemonService: PokemonService,
){}
}



