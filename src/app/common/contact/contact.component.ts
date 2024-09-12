import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <p>
      contact works!
    </p>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log("After content Checked!!");
  }
  ngAfterContentInit(): void {
    console.log("After content init");
  }
  //It reduces the application performance......
  ngDoCheck(): void {
    console.log("ngDOCheck");
    
  }
  ngOnInit(): void {
    console.log('Ng On Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Ng On Changes');
  }

}
