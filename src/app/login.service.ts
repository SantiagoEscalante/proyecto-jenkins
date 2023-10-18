import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = '/api';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post(this.apiUrl,data,this.httpOptions).pipe(
      catchError(error => {
        // Maneja cualquier error en la solicitud
        return throwError( () =>'Error en la solicitud: ' + error);
      })
    );
  }
}
