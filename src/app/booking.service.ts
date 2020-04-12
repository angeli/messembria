import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends RestService {

  private url = 'bookings';

  all(): Observable<[]> {
    return this.client.get<[]>(this.url);
  }
}
