import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../_model/Pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;
  
  constructor(private service: PokemonService) { }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

}
