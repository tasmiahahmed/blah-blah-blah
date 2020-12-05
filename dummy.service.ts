import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  contacts: any=[
    {"fName": "Naruto", "lName": "Uzumaki", "phone": "7123456789"},
    {"fName": "Sasuke", "lName": "Uchiha", "phone": "8384597639"},
    {"fName": "Minato", "lName": "Namikaze", "phone": "9384597639"},
    {"fName": "Kushina", "lName": "Uzumaki", "phone": "7354537559"},
    {"fName": "Kakashi", "lName": "Hatake", "phone": "9074597130"}, 
  ];
} 
