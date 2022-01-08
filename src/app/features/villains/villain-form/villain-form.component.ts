import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Villain } from '../../../model/villain';
import { VillainService } from '../../../service/villain/villain.service';
@Component({
  selector: 'app-villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.css']
})
export class VillainFormComponent {
  public model: Villain = new Villain(
    '', ''
  );
  
  constructor(
    private route: ActivatedRoute,    
    private router: Router,
    private villainService: VillainService
  ) { 
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(id!=0){
      this.getVillain(id);
    } else {
      this.newVillain();
    }
  }
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];


  submitted = false;

  onSubmit() { 
    if(this.model.id != 0){
      this.villainService.addVillain(this.model).subscribe(villain => this.model = villain)
    }
    this.villainService.getVillain(this.model.id).subscribe(villain => this.model = villain)
    this.submitted = true; 
  }
  newVillain() {
    this.model = new Villain('', '');
  }
  getVillain(id:number): void {
    this.villainService.getVillain(id).subscribe(villain => this.model = villain)
  }
  editVillain(id:number): void {
    this.villainService.getVillain(id).subscribe(villain => this.model = villain)
    this.submitted = true; 
  }

  goBack(){
    this.submitted = false; 
    this.getVillain(this.model.id)
    //this.router.navigate(['/villain/edit/', { id: this.model.id }]);
  }

}