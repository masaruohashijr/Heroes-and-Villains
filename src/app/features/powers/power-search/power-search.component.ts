import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Power } from '../../../model/power';
import { PowerService } from '../../../service/power/power.service';

@Component({
  selector: 'app-power-search',
  templateUrl: './power-search.component.html',
  styleUrls: [ './power-search.component.css' ]
})
export class PowerSearchComponent implements OnInit {
  
  powers$!: Observable<Power[]>;
  
  private searchTerms = new Subject<string>();

  constructor(private powerService: PowerService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.powers$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.powerService.searchPowers(term)),
    );
  }
}