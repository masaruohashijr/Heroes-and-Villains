import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemDataService implements InMemoryDbService {
  createDb() {
    const villains = [
      { id: 1, name: 'Doctor Octopus', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 2, name: 'Galactus', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 3, name: 'Kang the Conqueror', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 4, name: 'Thanos', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 5, name: 'Venom', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 6, name: 'Green Goblin', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 7, name: 'Electron', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 8, name: 'Kraven The Hunter', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 9, name: 'Mysterio', power: 'Really Smart', alterEgo: 'AlterEgo' },
      { id: 10, name: 'Kingpin', power: 'Really Smart', alterEgo: 'AlterEgo' }
    ];
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
    return {heroes, villains};
  }
  constructor() { }
}
