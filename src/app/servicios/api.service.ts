import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUser(){
    const path = 'https://randomuser.me/api/';
    return this.http.get(path);
  }
}
