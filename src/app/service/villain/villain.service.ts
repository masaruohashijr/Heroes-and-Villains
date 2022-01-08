import { Injectable } from '@angular/core';
import { Villain } from '../../model/villain';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private villainsUrl = 'api/villains';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getVillains(): Observable<Villain[]> {
    return this.http.get<Villain[]>(this.villainsUrl)
      .pipe(
        catchError(this.handleError<Villain[]>("getVillains", []))
      )
  }

  addVillain(villain: Villain): Observable<Villain> {
    return this.http.post<Villain>(this.villainsUrl, villain, this.httpOptions).pipe(
      tap((newVillain: Villain) => this.log(`added villain w/ id=${newVillain.id}`)),
      catchError(this.handleError<Villain>("addVillain"))
    );
  }

  getVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.get<Villain>(url).pipe(
      tap(_ => this.log(`fetched villain id=${id}`)),
      catchError(this.handleError<Villain>(`getVillain id=${id}`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log("${operation} failed: ${error.message}");
      return of(result as T);
    };
  }

  updateVillain(villain: Villain): Observable<any> {
    return this.http.put(this.villainsUrl, villain, this.httpOptions).pipe(
      tap(_ => this.log(`updated villain id=${villain.id}`)),
      catchError(this.handleError<any>('updateVillain'))
    );
  }
  deleteVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;

    return this.http.delete<Villain>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted villain id=${id}`)),
      catchError(this.handleError<Villain>('deleteVillain'))
    );
  }

  searchVillains(term: string): Observable<Villain[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Villain[]>(`${this.villainsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found villains matching "${term}"`) :
        this.log(`no villains matching "${term}"`)),
      catchError(this.handleError<Villain[]>('searchVillains', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`VillainService: ${message}`);
  }
}
