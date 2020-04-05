import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {DashboardApartment} from './dashboard-apartment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  private apartmentsUrl = 'api/apartments';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private client: HttpClient) {
  }

  all(): Observable<DashboardApartment[]> {
    return this.client.get<DashboardApartment[]>(this.apartmentsUrl)
      .pipe(
        catchError(this.handleError<DashboardApartment[]>('all', []))
      );
  }

  get(id: number): Observable<DashboardApartment> {
    const url = `${this.apartmentsUrl}/${id}`;
    return this.client.get<DashboardApartment>(url).pipe(
      catchError(this.handleError<DashboardApartment>(`get id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
