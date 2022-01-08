import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDashboardComponent } from './features/heroes/hero-dashboard/hero-dashboard.component';
import { HeroesComponent } from './features/heroes/heroes.component';
import { HeroFormComponent } from './features/heroes/hero-form/hero-form.component';
import { VillainsComponent } from './features/villains/villains.component';
import { VillainFormComponent } from './features/villains/villain-form/villain-form.component';
import { VillainDashboardComponent } from './features/villains/villain-dashboard/villain-dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/hero/dashboard', pathMatch: 'full' },
  { path: 'hero/edit/:id', component: HeroFormComponent },
  { path: 'hero/add', component: HeroFormComponent },
  { path: 'hero/dashboard', component: HeroDashboardComponent },
  { path: 'villains', component: VillainsComponent },
  { path: '', redirectTo: '/villain/dashboard', pathMatch: 'full' },
  { path: 'villain/edit/:id', component: VillainFormComponent },
  { path: 'villain/add', component: VillainFormComponent },
  { path: 'villain/dashboard', component: VillainDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
