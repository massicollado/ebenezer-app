import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {usr: string; pwd: string; }
@Injectable({
  providedIn: 'root'
})

export class LoginService {


  baseUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {
  }

 loginAll(): Observable<any> {
    return this.http.post(this.baseUrl + 'config/empleados/validar-login/', {
      usr: 'sa',
      pwd: 'numpy'
    });
  }
}
