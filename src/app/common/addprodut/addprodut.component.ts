import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ProductService } from '../../service/product.service';
import { RouterLink } from '@angular/router';
import { Role } from '../../model/Loginmodel';
import { Products } from '../../model/Productmodel';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addprodut',
  standalone: true,
  imports:[MatCardModule,ReactiveFormsModule,MatInputModule,MatButtonModule,
    MatCheckboxModule,MatRadioModule,MatSelectModule,RouterLink,FormsModule],
  templateUrl: './addprodut.component.html',
  styleUrl: './addprodut.component.css'
})
export class AddprodutComponent implements OnInit {
  roles: Role[] = [];
 _dialogdata: any;
  constructor(private service:ProductService,private builder:FormBuilder,private ref:MatDialogRef<AddprodutComponent>){
   
  }

  productform = new FormGroup({
    id: new FormControl({value: 1, disabled: false}),
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    price:new FormControl(0,Validators.required),
    status:new FormControl(true)
    
  })

  ngOnInit(): void {
    // this.fetchHighestId();
  }

  ProductSave(){
    if(this.productform.valid){
      let _data:Products={
        id: 0,
        name: this.productform.value.name as string,
        description: this.productform.value.description as string,
        price: this.productform.value.price as number,
        status: this.productform.value.status as boolean
      }
      console.log(_data,"data");
      
      this.service.CreateProduct(_data).subscribe( item=>{
        alert('Created Successfully');
        this.productform.reset();
        this.ref.close();
        console.log(item);
        
      })
    }
  }
}
