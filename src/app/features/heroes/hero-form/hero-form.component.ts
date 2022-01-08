import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../model/hero';
import { HeroService } from '../../../service/hero/hero.service';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  public model: Hero = new Hero(
    '', '', ''
  );
  
  constructor(
    private route: ActivatedRoute,    
    private router: Router,
    private heroService: HeroService
  ) { 
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(id!=0){
      this.getHero(id);
    } else {
      this.newHero();
    }
  }
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];


  submitted = false;

  onSubmit() { 
    if(this.model.id != 0){
      console.log("this.model.id: "+this.model.id)
      this.heroService.addHero(this.model).subscribe(hero => this.model = hero)
    } else {
      this.heroService.getHero(this.model.id).subscribe(hero => this.model = hero)
      this.submitted = true; 
    }
  }
  newHero() {
    this.model = new Hero('', '');
  }
  getHero(id:number): void {
    this.heroService.getHero(id).subscribe(hero => this.model = hero)
  }
  editHero(id:number): void {
    this.heroService.getHero(id).subscribe(hero => this.model = hero)
    this.submitted = true; 
  }

  goBack(){
    this.submitted = false; 
    this.getHero(this.model.id)
    //this.router.navigate(['/hero/edit/', { id: this.model.id }]);
  }

}