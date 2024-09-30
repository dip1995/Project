import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8001';

  constructor(private http: HttpClient) {}

  signup(bodyParams:any){
    return this.http.post<any>(`${this.apiUrl}/signup`,bodyParams);
  }

  login(bodyParams:any){
    return this.http.post<any>(`${this.apiUrl}/login`,bodyParams);
   }

  
}
