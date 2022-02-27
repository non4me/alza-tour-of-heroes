import { Injectable } from '@angular/core';

import { Hero } from '../../models/hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nace', favorite: false },
  { id: 12, name: 'Narco', favorite: true },
  { id: 13, name: 'Bombasto', favorite: true },
  { id: 14, name: 'Celeritas', favorite: true },
  { id: 15, name: 'Magneta', favorite: true },
  { id: 16, name: 'RubberMan', favorite: false },
  { id: 17, name: 'Dynama', favorite: false },
  { id: 18, name: 'Dr IQ', favorite: false },
  { id: 19, name: 'Magma', favorite: false },
  { id: 20, name: 'Tornado', favorite: false },
];

@Injectable()
export class DataProviderService {

  getHeroes(): Hero[] {
    return HEROES;
  }
}

@Injectable()
export class MockDataProviderService {
  getHeroes() {
    return [
      { id: 11, name: 'Mr. Nace', favorite: false }
    ];
  }
}
