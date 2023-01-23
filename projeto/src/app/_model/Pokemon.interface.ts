import { Type } from '../_model/Types';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
