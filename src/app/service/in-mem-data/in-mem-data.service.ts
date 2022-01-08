import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Villain } from 'src/app/model/villain';
import { Hero } from '../../model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 12, name: 'Narco', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 13, name: 'Bombasto', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 14, name: 'Celeritas', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 15, name: 'Magneta', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 16, name: 'RubberMan', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 17, name: 'Dynama', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 18, name: 'Dr IQ', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 19, name: 'Magma', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 20, name: 'Tornado', power: 'Really Smart', alterEgo: 'AlterEgo' }
    ];
    const villains = [
      { id: 11, name: 'Dr Nice', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 12, name: 'Narco', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 13, name: 'Bombasto', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 14, name: 'Celeritas', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 15, name: 'Magneta', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 16, name: 'RubberMan', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 17, name: 'Dynama', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 18, name: 'Dr IQ', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 19, name: 'Magma', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 20, name: 'Tornado', power: 'Really Smart', alterEgo: 'AlterEgo' }
    ];
    return {heroes, villains};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }  
  genVillainId(villains: Villain[]): number {
    return villains.length > 0 ? Math.max(...villains.map(villain => villain.id)) + 1 : 11;
  }  
  constructor() { }
}
