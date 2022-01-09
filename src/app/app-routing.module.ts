import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDashboardComponent } from './features/heroes/hero-dashboard/hero-dashboard.component';

import { HeroFormComponent } from './features/heroes/hero-form/hero-form.component';
import { VillainListComponent } from './features/villains/villain-list/villain-list.component';
import { VillainFormComponent } from './features/villains/villain-form/villain-form.component';
import { VillainDashboardComponent } from './features/villains/villain-dashboard/villain-dashboard.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';

const routes: Routes = [
  { path: 'hero/list', component: HeroListComponent },
  { path: '', redirectTo: '/hero/dashboard', pathMatch: 'full' },
  { path: 'hero/edit/:id', component: HeroFormComponent },
  { path: 'hero/add', component: HeroFormComponent },
  { path: 'hero/dashboard', component: HeroDashboardComponent },
  { path: 'villain/list', component: VillainListComponent },
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
