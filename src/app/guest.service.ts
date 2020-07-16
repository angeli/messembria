import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService extends RestService {

  protected url = 'http://msmbr.test/guests';

  constructor(protected client: HttpClient) {
    super(client);
  }

  all(): Observable<[]> {
    return this.client.get<[]>(this.url);
  }
}
