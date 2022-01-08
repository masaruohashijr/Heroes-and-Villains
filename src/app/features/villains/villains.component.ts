import { Component, OnInit } from '@angular/core'
import { Villain } from '../../model/villain'
import { VillainService } from '../../service/villain/villain.service';
import { MessageService as MessageService } from '../../service/message/message.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains: Villain[] = [];
  selectedVillain?:Villain;
  constructor(private villainService: VillainService, private messageService: MessageService) {}
  getVillains(): void {
    this.villainService.getVillains().subscribe(villains=>this.villains = villains);
  }
  ngOnInit(): void {
    this.getVillains();
  }
  onSelect(villain:Villain): void{
    this.selectedVillain = villain;
    this.messageService.add(`VillainsComponent: Selected villain id=${villain.id}`);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.villainService.addVillain({ name } as Villain)
      .subscribe(villain => {
        this.villains.push(villain);
      });
  }
  delete(villain: Villain): void {
    this.villains = this.villains.filter(h => h !== villain);
    this.villainService.deleteVillain(villain.id).subscribe();
    
  }
}
