import { Component, OnInit } from '@angular/core';
import { Power } from '../../../model/power'
import { PowerService } from '../../../service/power/power.service';

@Component({
  selector: 'app-power-dashboard',
  templateUrl: './power-dashboard.component.html',
  styleUrls: [ './power-dashboard.component.css' ]
})
export class PowerDashboardComponent implements OnInit {
  powers: Power[] = [];

  constructor(private powerService: PowerService) { }

  ngOnInit(): void {
    this.getPowers();
  }

  getPowers(): void {
    this.powerService.getPowers()
      .subscribe(powers => this.powers = powers.slice(0, 10));
  }
}