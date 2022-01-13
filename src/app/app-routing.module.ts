import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// HEROES
import { HeroDashboardComponent } from './features/heroes/hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';
import { HeroFormComponent } from './features/heroes/hero-form/hero-form.component';
// VILLAINS
import { VillainListComponent } from './features/villains/villain-list/villain-list.component';
import { VillainFormComponent } from './features/villains/villain-form/villain-form.component';
import { VillainDashboardComponent } from './features/villains/villain-dashboard/villain-dashboard.component';
// POWERS
import { PowerListComponent } from './features/powers/power-list/power-list.component';
import { PowerFormComponent } from './features/powers/power-form/power-form.component';
import { PowerDashboardComponent } from './features/powers/power-dashboard/power-dashboard.component';

const routes: Routes = [
  { path: 'hero/list', component: HeroListComponent },
  { path: '', redirectTo: '/hero/dashboard', pathMatch: 'full' },
  { path: 'hero/edit/:id', component: HeroFormComponent },
  { path: 'hero/add', component: HeroFormComponent },
  { path: 'hero/dashboard', component: HeroDashboardComponent },
  { path: 'villain/list', component: VillainListComponent },
  { path: 'villain/edit/:id', component: VillainFormComponent },
  { path: 'villain/add', component: VillainFormComponent },
  { path: 'villain/dashboard', component: VillainDashboardComponent },
  { path: 'power/list', component: PowerListComponent },
  { path: 'power/edit/:id', component: PowerFormComponent },
  { path: 'power/add', component: PowerFormComponent },
  { path: 'power/dashboard', component: PowerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
