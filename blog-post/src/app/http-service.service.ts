import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  search(term:string): Observable<Object> {
    let obs= this.http.get('https://api.github.com/users/'+ term);
    return obs;
  }
}
