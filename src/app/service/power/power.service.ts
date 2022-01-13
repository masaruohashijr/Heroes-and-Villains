import { Injectable } from '@angular/core';
import { Power } from '../../model/power';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PowerService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private powersUrl = 'api/power';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPowers(): Observable<Power[]> {
    return this.http.get<Power[]>(this.powersUrl)
      .pipe(
        catchError(this.handleError<Power[]>("getPowers", []))
      )
  }

  addPower(power: Power): Observable<Power> {
    return this.http.post<Power>(this.powersUrl, power, this.httpOptions).pipe(
      tap((newPower: Power) => this.log(`added power w/ id=${newPower.id}`)),
      catchError(this.handleError<Power>("addPower"))
    );
  }

  getPower(id: number): Observable<Power> {
    const url = `${this.powersUrl}/${id}`;
    return this.http.get<Power>(url).pipe(
      tap(_ => this.log(`fetched power id=${id}`)),
      catchError(this.handleError<Power>(`getPower id=${id}`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log("${operation} failed: ${error.message}");
      return of(result as T);
    };
  }

  updatePower(power: Power): Observable<any> {
    return this.http.put(this.powersUrl, power, this.httpOptions).pipe(
      tap(_ => this.log(`updated power id=${power.id}`)),
      catchError(this.handleError<any>('updatePower'))
    );
  }
  
  deletePower(id: number): Observable<Power> {
    const url = `${this.powersUrl}/${id}`;

    return this.http.delete<Power>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted power id=${id}`)),
      catchError(this.handleError<Power>('deletePower'))
    );
  }

  searchPowers(term: string): Observable<Power[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Power[]>(`${this.powersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found powers matching "${term}"`) :
        this.log(`no powers matching "${term}"`)),
      catchError(this.handleError<Power[]>('searchPowers', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`PowerService: ${message}`);
  }
}
