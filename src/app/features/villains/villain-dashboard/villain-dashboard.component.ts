import { Component, OnInit } from '@angular/core';
import { VillainService } from 'src/app/service/villain/villain.service';
import { Villain } from '../../../model/villain'

@Component({
  selector: 'app-villain-dashboard',
  templateUrl: './villain-dashboard.component.html',
  styleUrls: [ './villain-dashboard.component.css' ]
})
export class VillainDashboardComponent implements OnInit {
  villains: Villain[] = [];

  constructor(private villainService: VillainService) { }

  ngOnInit(): void {
    this.getVillains();
  }

  getVillains(): void {
    this.villainService.getVillains()
      .subscribe(villains => this.villains = villains.slice(0, 10));
  }
}