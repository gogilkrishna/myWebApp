import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

  ) { }
  
  setToken(key: string, value: any) {
      localStorage.setItem('Authorization', environment.token)
  }
  

}
