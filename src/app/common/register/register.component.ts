import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { Role, user } from '../../model/Loginmodel';
import { MasterService } from '../../service/master.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule,ReactiveFormsModule,MatInputModule,MatButtonModule,
    MatCheckboxModule,MatRadioModule,MatSelectModule,RouterLink,FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);
  roles: Role[] = [
    {value: 'salesmen', viewValue: 'Salesman'},
    {value: 'supervisor', viewValue: 'Supervisor'},
    {value: 'manager', viewValue: 'Manager'},
  ];
  constructor(private service:MasterService,private router:Router){

  }
  registerform = new FormGroup({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required),
  name:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
  email:new FormControl('',Validators.compose([Validators.email,Validators.required])),
  role:new FormControl('salesman',Validators.required),
  gender:new FormControl('m'),
  terms:new FormControl(true)

  })
  ProceedRegister(){
    if(this.registerform.value.terms){
      if(this.registerform?.valid ){
        let _data:user={
          id: this.registerform.value.username as string,
          password: this.registerform.value.password as string,
          name: this.registerform.value.name as string,
          role: this.registerform.value.role as string,
          gender: this.registerform.value.gender as string,
          email: this.registerform.value.email as string
        }
        this.service.ProceedRegister(_data).subscribe(item=>{
          alert('Registered Successfully');
          this.router.navigateByUrl('/login');
        })
      }
    }
    else{
      alert('Please Accept the terms and conditions before registering');
    }

  }
  



}
