import {Injectable, Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginData {usr: string; pwd: string; }
@Injectable({
  providedIn: 'root'
})

export class LoginService {


baseUrl = 'http://localhost:8000/api/';
constructor(private http: HttpClient) {
  }

loginAll(data: LoginData): Observable<any> {
    return this.http.post(this.baseUrl + 'config/empleados/validar-login/', data);
  }
}
