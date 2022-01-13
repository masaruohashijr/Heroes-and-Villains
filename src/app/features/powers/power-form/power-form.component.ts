import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Power } from '../../../model/power';
import { PowerService } from '../../../service/power/power.service';
@Component({
  selector: 'app-power-form',
  templateUrl: './power-form.component.html',
  styleUrls: ['./power-form.component.css']
})
export class PowerFormComponent {
  public model: Power = new Power(
    ''
  );
  
  constructor(
    private route: ActivatedRoute,    
    private router: Router,
    private powerService: PowerService
  ) { 
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(id!=0){
      this.getPower(id);
    } else {
      this.newPower();
    }
  }
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  submitted = false;

  onSubmit() { 
    if(!this.model.id){
      this.powerService.addPower(this.model).subscribe(power => this.model = power)
    } else {
      this.powerService.updatePower(this.model).subscribe(power => this.model = power)
      this.powerService.getPower(this.model.id).subscribe(power => this.model = power)
    }
    this.submitted = true; 
  }
  newPower() {
    this.model = new Power('');
  }
  getPower(id:number): void {
    this.powerService.getPower(id).subscribe(power => this.model = power)
  }
  editPower(id:number): void {
    this.powerService.getPower(id).subscribe(power => this.model = power)
    this.submitted = true; 
  }

  goBack(){
    this.submitted = false; 
    this.getPower(this.model.id)
  }

}