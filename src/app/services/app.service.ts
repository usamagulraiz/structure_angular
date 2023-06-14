import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = environment.url;
  constructor(public http: HttpClient) {}
  createUser(data: any): Observable<any> {
    return this.http.post(this.url + 'users/create', data);
  }
}
