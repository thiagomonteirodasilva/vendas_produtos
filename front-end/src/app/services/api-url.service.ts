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
  errors: any = [];

  handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro: ' + error.message);
    if(error.status === 422){//Unprocessable content (erro de validação)
      this.errors = [];
      this.errors.push(error.error.errors);
    }
    return Promise.reject(error.message || error);
  }

  handleSuccess(success: any){
    window.alert(success);
    this.errors = [];
    (<HTMLFormElement>document.getElementById("form")).reset();
  }

  constructor(private http: HttpClient) { }

  apiPost(route: string, object: JSON) {
    return this.http.post(this.apiURL + route, JSON.stringify(object), {headers: this.headers}).pipe(
      catchError(error => this.handleError(error))
    ).subscribe(
      data => this.handleSuccess(data.success)
    )
  }

  apiGet(route: string){
    return this.http.get(this.apiURL + route, {responseType: "json"}).pipe(
      catchError(error => this.handleError(error))
    )
  }
}
