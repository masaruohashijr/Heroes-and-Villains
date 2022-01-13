import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
import { HeroDataService } from 'src/app/service/in-mem-data/hero-data.service';
import { PowerDataService } from './power-data.service';
import { VillainDataService } from './villain-data.service';

const powers = [
  { id: 31, name: 'Telepathy'},
  { id: 32, name: 'Teleportation'},
  { id: 33, name: 'Dimensional travel'},
  { id: 34, name: 'Flight'},
  { id: 35, name: 'Heat vision'},
];
const villains = [
  { id: 1, name: 'Doctor Octopus', power: '', alterEgo: '' },
  { id: 2, name: 'Galactus', power: '', alterEgo: '' },
  { id: 3, name: 'Kang the Conqueror', power: '', alterEgo: '' },
  { id: 4, name: 'Thanos', power: '', alterEgo: '' },
  { id: 5, name: 'Venom', power: '', alterEgo: '' },
  { id: 6, name: 'Green Goblin', power: '', alterEgo: '' },
  { id: 7, name: 'Electron', power: '', alterEgo: '' },
  { id: 8, name: 'Kraven The Hunter', power: '', alterEgo: '' },
  { id: 9, name: 'Mysterio', power: '', alterEgo: '' },
  { id: 10, name: 'Kingpin', power: '', alterEgo: '' }
];
const heroes = [
  { id: 111, name: 'Dr Strange', power: '', alterEgo: '' },
  { id: 112, name: 'Spider Man', power: '', alterEgo: '' },
  { id: 113, name: 'Iron Man', power: '', alterEgo: '' },
  { id: 114, name: 'Ant Man', power: '', alterEgo: '' },
  { id: 115, name: 'Spider Woman', power: '', alterEgo: '' },
  { id: 116, name: 'Wolverine', power: '', alterEgo: '' },
  { id: 117, name: 'Dr Fantastic', power: '', alterEgo: '' },
  { id: 118, name: 'Thor', power: '', alterEgo: '' },
  { id: 119, name: 'Professor Xavier', power: '', alterEgo: '' },
  { id: 120, name: 'Colossus', power: '', alterEgo: '' }
];
export class InMemDataService implements InMemoryDbService {
  heroDataService: HeroDataService = new HeroDataService()
  villainDataService: VillainDataService = new VillainDataService()
  powerDataService: PowerDataService = new PowerDataService()
  createDb() {
    return { 'hero': heroes, 'villain': villains, 'power': powers };
  }

  put(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'hero') {
      return this.heroDataService.putHero(heroes, reqInfo);
    } else if (collectionName === 'power') {
      return this.powerDataService.putPower(powers, reqInfo);
    } else {
      return this.villainDataService.putVillain(villains, reqInfo);
    }    
  }

  get(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    console.log(reqInfo)
    console.log(collectionName)
    if (collectionName === 'hero') {
      return this.heroDataService.getHeroes(heroes, reqInfo);
    } else if (collectionName === 'power') {
      return this.powerDataService.getPowers(powers, reqInfo);
    } else {
      return this.villainDataService.getVillains(villains, reqInfo);
    }
  }

  constructor() {
  }
}
