import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from './service/in-mem-data/in-mem-data.service';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';
import { HeroDashboardComponent } from './features/heroes/hero-dashboard/hero-dashboard.component';
import { HeroSearchComponent } from './features/heroes/hero-search/hero-search.component';
import { HeroMenuComponent } from './features/heroes/hero-menu/hero-menu.component';
import { HeroFormComponent } from './features/heroes/hero-form/hero-form.component';
import { VillainListComponent } from './features/villains/villain-list/villain-list.component';
import { VillainDashboardComponent } from './features/villains/villain-dashboard/villain-dashboard.component';
import { VillainSearchComponent } from './features/villains/villain-search/villain-search.component';
import { VillainMenuComponent } from './features/villains/villain-menu/villain-menu.component';
import { VillainFormComponent } from './features/villains/villain-form/villain-form.component';
import { PowerListComponent } from './features/powers/power-list/power-list.component';
import { PowerDashboardComponent } from './features/powers/power-dashboard/power-dashboard.component';
import { PowerSearchComponent } from './features/powers/power-search/power-search.component';
import { PowerMenuComponent } from './features/powers/power-menu/power-menu.component';
import { PowerFormComponent } from './features/powers/power-form/power-form.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialExampleModule } from '../material.module';
import { Sidenav } from './sidenav/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroListComponent,
    HeroDashboardComponent,
    HeroSearchComponent,
    HeroMenuComponent,
    HeroFormComponent,
    VillainListComponent,
    VillainDashboardComponent,
    VillainSearchComponent,
    VillainMenuComponent,
    VillainFormComponent,
    PowerListComponent,
    PowerDashboardComponent,
    PowerSearchComponent,
    PowerMenuComponent,
    PowerFormComponent,
    Sidenav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemDataService, { dataEncapsulation: false },
    ),
    MatNativeDateModule,
    MaterialExampleModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
