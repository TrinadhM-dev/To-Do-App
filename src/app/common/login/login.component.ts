import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {Loginmodel} from '../../model/Loginmodel';
import { FormsModule } from '@angular/forms';
import { AngularService } from '../../service/angular.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  _logindata:Loginmodel={
    username:'',
    password:''
  }
  constructor(private service:AngularService,private router:Router){
  }
  ngOnInit(): void {
    localStorage.clear();
  }
  ProceedLogin(form:any){
    if(form.value?.username == '' || form.value?.password == ''){
      console.log(form.value.username);
      return 
    }
    else{
    this.service.Proceedlogin(this._logindata).subscribe(item=>{
      let _resp = item;
      if(_resp.length>0){
        localStorage.setItem('username',this._logindata.username)
        this.router.navigateByUrl('');
      }
      else{  alert(`Invalid Credentials`);}
    })
    }


  }
}
