import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

/** @title Responsive sidenav */
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['sidenav.css'],
})
export class Sidenav implements OnDestroy {
  
  mobileQuery: MediaQueryList;
  title = 'Heroes and Villains';

  events: string[] = [];
  opened!: boolean;
  showMenu_Hero = false;
  showMenu_Villain = false;
  showMenu_Power = false;
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  @ViewChild('navcontainer')
  navcontainer!: MatSidenavContainer;
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  toggleMenu(feature:string) {
    if(feature === 'hero'){
      this.showMenu_Hero = !this.showMenu_Hero;
    } else if(feature === 'villain'){
      this.showMenu_Villain = !this.showMenu_Villain;
    } else {
      this.showMenu_Power = !this.showMenu_Power;
    }
    setTimeout(() => this.navcontainer.updateContentMargins());
  }
}