import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends RestService {

  protected url = 'http://msmbr.test/bookings';

  constructor(protected client: HttpClient) {
    super(client);
  }

  all(): Observable<[]> {
    return this.client.get<[]>(this.url);
  }
}
