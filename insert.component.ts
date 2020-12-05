import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DummyService } from '../dummy.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent
{
  cForm= new FormGroup(
{
  fName: new FormControl('', Validators.required),
  lName: new FormControl('', Validators.required),
  phone: new FormControl('', Validators.required)
})
  constructor(private ob: DummyService) { }
  addContact()
  {
    this.ob.contacts.push({
      "fName": this.cForm.get('fName')?.value, 
      "lName": this.cForm.get('lName')?.value,
      "phone": this.cForm.get('phone')?.value
    });
    alert("contact added !");
  }
}
