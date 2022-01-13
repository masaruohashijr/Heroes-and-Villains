import { Component, OnInit } from '@angular/core'
import { Power } from 'src/app/model/power';
import { PowerService } from 'src/app/service/power/power.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-power-list',
  templateUrl: './power-list.component.html',
  styleUrls: ['./power-list.component.css']
})
export class PowerListComponent implements OnInit {
  powers: Power[] = [];
  selectedPower?:Power;
  constructor(private powerService: PowerService, private messageService: MessageService) {}
  getPowers(): void {
    this.powerService.getPowers().subscribe(powers=>this.powers = powers);
  }
  ngOnInit(): void {
    this.getPowers();
  }
  onSelect(power:Power): void{
    this.selectedPower = power;
    this.messageService.add(`PowersComponent: Selected power id=${power.id}`);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.powerService.addPower({ name } as Power)
      .subscribe(power => {
        this.powers.push(power);
      });
  }
  delete(power: Power): void {
    this.powers = this.powers.filter(h => h !== power);
    this.powerService.deletePower(power.id).subscribe();
    
  }
}
