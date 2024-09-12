import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  routeValue:any;
  subMenuValue:any;
  //Injected the activated route
 constructor(private route:ActivatedRoute){

 }
  ngOnInit(): void {
    this.routeValue = this.route.snapshot.paramMap.get('id');
    this.subMenuValue = this.route.snapshot.paramMap.get('id');
    console.log(this.routeValue);
    console.log(this.subMenuValue);
    
  }
}
