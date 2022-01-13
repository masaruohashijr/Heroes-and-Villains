import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Power } from 'src/app/model/power';
import { PowerService } from 'src/app/service/power/power.service';
import { Hero } from '../../../model/hero';
import { HeroService } from '../../../service/hero/hero.service';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers: Array<Power> = [];

  public model: Hero = new Hero(
    '', '', 0
  );
  
  constructor(
    private route: ActivatedRoute,    
    private router: Router,
    private heroService: HeroService,
    private powerService: PowerService
  ) { 
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(id!=0){
      this.getHero(id);
    } else {
      this.newHero();
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
    if(!this.model.id){
      this.heroService.addHero(this.model).subscribe(hero => this.model = hero)
    } else {
      this.heroService.updateHero(this.model).subscribe(hero => {
        // this.model = hero
        // console.log("onSubmit hero.id: "+hero.id)
      })
    }
    this.submitted = true; 
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
  }

}