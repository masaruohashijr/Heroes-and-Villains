import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../model/hero'
import { HeroService } from '../../../service/hero/hero.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: [ './hero-dashboard.component.css' ]
})
export class HeroDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 10));
  }
}