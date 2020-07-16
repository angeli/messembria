import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboardApartment} from './dashboard-apartment';
import {catchError} from 'rxjs/operators';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService extends RestService {

  protected url = 'http://msmbr.test/api/apartments';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(protected client: HttpClient) {
    super(client);
  }

  all(): Observable<DashboardApartment[]> {
    return this.client.get<DashboardApartment[]>(this.url)
      .pipe(
        catchError(this.handleError<DashboardApartment[]>('all', []))
      );
  }

  get(id: number): Observable<DashboardApartment> {
    const url = `${this.url}/${id}`;
    return this.client.get<DashboardApartment>(url).pipe(
      catchError(this.handleError<DashboardApartment>(`get id=${id}`))
    );
  }
}
