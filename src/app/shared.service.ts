import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public getPortalDetails() {
    return this.http.get('./assets/data/portal_data.json').pipe(map((res: any) => res));
  }
}
