import { Component, OnInit } from '@angular/core';
// Mas poderoso que un Form en un ngModel
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Variable tipada
  emailField: FormControl;

  constructor() { 
    this.emailField = new FormControl('', [ Validators.required, Validators.minLength(5), Validators.maxLength(10)] );
    this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {
  }
/*
  sendMail() {
    if(this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
*/
 sendMail() {
   
 }
}
