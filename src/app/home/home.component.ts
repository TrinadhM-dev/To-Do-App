import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet ,MatCardModule,HomeComponent,CommonModule,ReversePipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isdisabled = false;
  _class= 'inactive';
//ngStyle Properties
_color = 'Blue';
_font = 50;
  title = 'Angular 18 newstandlone';
  subtitle = 'Interpolation';
  todayDate = new Date();
  salary = 1000;
  //
  ticketInfo = [
    {id:1,name:'Javascript',color:'black'},
    {id:2,name:'VueJS',color:'red'},
    {id:3,name:'Angular JS',color:'brown'}
  ]
  //
_view='home';
  //
  isShow = true;
  _obj={"name":"Trinadh"};
  //Property Binding
  isDisabled = false;
   onClicker(){
    this.title = "This is from Event Binding ";
  }
  updateTitle(event:any){
   this.title =event.target.value;
  }

}
