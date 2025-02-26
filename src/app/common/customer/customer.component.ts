import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,RouterLink,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  userInput='';
  cannavigate(){
    if(this.userInput ==''){
      if(confirm('If you navigating you data going to lost.DO you want continue?')){
        return true;
      }else{
        return false;
      }
    }else{
      return true;  
    }
  }
}
