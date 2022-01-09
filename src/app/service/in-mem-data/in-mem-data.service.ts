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
      { id: 11, name: 'Dr Strange', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 12, name: 'Spider Man', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 13, name: 'Iron Man', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 14, name: 'Ant Man', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 15, name: 'Spider Woman', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 16, name: 'Wolverine', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 17, name: 'Dr Fantastic', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 18, name: 'Thor', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 19, name: 'Professor Xavier', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 20, name: 'Colossus', power: 'Really Smart', alterEgo: 'AlterEgo' }
    ];
    const villains = [
      { id: 11, name: 'Ultron', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 12, name: 'Galactus', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 13, name: 'Kang the Conqueror', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 14, name: 'Bullseye', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 15, name: 'Venom', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 16, name: 'Green Goblin', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 17, name: 'Juggernaut', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 18, name: 'Sabretooth', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 19, name: 'Mystique', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 20, name: 'Kingpin', power: 'Really Smart', alterEgo: 'AlterEgo' }
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
