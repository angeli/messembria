import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService extends RestService {

  private url = 'guests';

  all(): Observable<[]> {
    return this.client.get<[]>(this.url);
  }
}
