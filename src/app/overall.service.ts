import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OverallService {
 public url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http : HttpClient) { }

  get_data(){
    return this.http.get<any>(this.url,{params:{}});
  }
  
}
