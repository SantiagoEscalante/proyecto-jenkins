import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8085/register'
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  registro(data:any){
    return this.http.post(this.apiUrl,data,this.httpOptions).pipe(
      catchError(error => {
        // Maneja cualquier error en la solicitud
        return throwError( () =>'Error en la solicitud Registro: ' + error);
      })
    )
  }
}
