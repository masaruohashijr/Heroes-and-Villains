import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {  
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location:Location,
  ) { }

  ngOnInit(): void {
    //this.getHero()
  }
  goBack(): void{
    this.location.back();
  }
  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero)
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
