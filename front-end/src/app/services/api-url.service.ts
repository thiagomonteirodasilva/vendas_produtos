import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  apiURL = 'http://127.0.0.1:8000/api/';
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  handleUpdateResponse: any;

  handleError(error: any): Promise<any> {
    window.alert('Ocorreu um erro: ' + error.message);
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient) { }

  apiPost(route: string, object: JSON) {
    return this.http.post(this.apiURL + route, JSON.stringify(object), {headers: this.headers}).pipe(
      tap(data => console.log(data)),
      catchError(error => this.handleError(error))
    ).subscribe(
      data => window.alert(data.success)
    )
  }
}
