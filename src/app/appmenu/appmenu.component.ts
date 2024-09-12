import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatCardModule,MatButtonModule,MatInputModule,FormsModule,CommonModule,RouterModule ],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent {
showmenu = false;
constructor(private router:Router){
}
  ngDoCheck(): void {
   let currentUrl = this.router.url;
   if(currentUrl == '/login' || currentUrl == '/register'){
    this.showmenu = false;
   }
   else{
    this.showmenu = true;
   }
  }
}
