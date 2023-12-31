import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8085/login';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post(this.apiUrl,data,this.httpOptions).pipe(
      catchError(error => {
        // Maneja cualquier error en la solicitud
        return throwError( () =>'Error en la solicitud Login: ' + error);
      })
    );
  }
}
