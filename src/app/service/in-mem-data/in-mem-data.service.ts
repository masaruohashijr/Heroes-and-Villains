import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
import { HeroDataService } from 'src/app/service/in-mem-data/hero-data.service';
import { VillainDataService } from './villain-data.service';

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
  { id: 111, name: 'Dr Strange', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 112, name: 'Spider Man', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 113, name: 'Iron Man', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 114, name: 'Ant Man', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 115, name: 'Spider Woman', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 116, name: 'Wolverine', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 117, name: 'Dr Fantastic', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 118, name: 'Thor', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 119, name: 'Professor Xavier', power: 'Really Smart', alterEgo: 'AlterEgo' },
  { id: 120, name: 'Colossus', power: 'Really Smart', alterEgo: 'AlterEgo' }
];
export class InMemDataService implements InMemoryDbService {
  heroDataService: HeroDataService = new HeroDataService()
  villainDataService: VillainDataService = new VillainDataService()
  createDb() {
    return { 'hero': heroes, 'villain': villains };
  }

  put(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    console.log(reqInfo)
    console.log(collectionName)
    if (collectionName === 'hero') {
      return this.heroDataService.putHeroes(heroes, reqInfo);
    } else {
      return this.villainDataService.putVillains(villains, reqInfo);
    }    
  }

  get(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    console.log(reqInfo)
    console.log(collectionName)
    if (collectionName === 'hero') {
      return this.heroDataService.getHeroes(heroes, reqInfo);
    } else {
      return this.villainDataService.getVillains(villains, reqInfo);
    }
  }

  constructor() {
  }
}
