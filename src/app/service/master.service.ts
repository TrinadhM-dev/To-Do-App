import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginmodel, user } from '../model/Loginmodel';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  
  constructor(private http:HttpClient) { }
  isLoggedIn() {
   return localStorage.getItem('username') != null;
  }

  Proceedlogin(_data:Loginmodel){
    return this.http.get('http://localhost:3000/user?id'+ _data.username + 'password=' +_data.password)
  }

  ProceedRegister(_data:user){
    return this.http.post('http://localhost:3000/user',_data);
  }

}
