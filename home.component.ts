import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private ob: DummyService) { }
  details: any[]= this.ob.contacts; 
}
