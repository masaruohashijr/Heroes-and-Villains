import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Power } from 'src/app/model/power';
import { PowerService } from 'src/app/service/power/power.service';
import { Villain } from '../../../model/villain';
import { VillainService } from '../../../service/villain/villain.service';
@Component({
  selector: 'app-villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.css']
})
export class VillainFormComponent {
  
  powers: Array<Power> = [];

  public model: Villain = new Villain(
    '', ''
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private villainService: VillainService,
    private powerService: PowerService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if (id!=0) {
      this.getVillain(id);
    } else {
      this.newVillain();
    }
  }
  submitted = false;
  ngOnInit(): void {
    this.loadPowers();
  }
  loadPowers(): void {
    this.powerService.getPowers().subscribe(powers=>this.powers = powers);
  }

  onSubmit() {
    if (!this.model.id) {
      this.villainService.addVillain(this.model).subscribe(villain => this.model = villain)
    } else {
      this.villainService.updateVillain(this.model).subscribe(villain => this.model = villain)
      this.getVillain(this.model.id)
    }
    this.submitted = true;
  }
  newVillain() {
    this.model = new Villain('', '');
  }
  getVillain(id: number): void {
    this.villainService.getVillain(id).subscribe(villain => this.model = villain)
  }
  editVillain(id: number): void {
    this.villainService.getVillain(id).subscribe(villain => this.model = villain)
    this.submitted = true;
  }

  goBack() {
    this.submitted = false;
    this.getVillain(this.model.id)
  }

}