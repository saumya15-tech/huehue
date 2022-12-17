import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fun';
  classss:any;
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      fname: [, Validators.required],
      lname: [, Validators.required],
    });
  }
  buttonVal = 'Dabaooooooooooooo';
  mouseover() {
    if (this.myForm.invalid) {
      this.classss = {
        left: Math.ceil(Math.random() * 70) + '%',
        top: Math.ceil(Math.random() * 90) + '%',
      };
      if (this.myForm.get('fname')?.errors) {
        console.log('error');
        this.buttonVal = 'Are First name to daal';
        this.count++;
        return;
      }
      if (this.myForm.get('lname')?.errors) {
        console.log('error');
        this.buttonVal = 'Are last name bhi daal re baba';
        this.count++;
        return;
      }
    }else{
      this.classss = undefined;
      if(this.count>0){
      this.buttonVal = 'Ha theek hai ab mar le';
      }
    }
  }
  mousein() {
    // this.classss=undefined
  }
  count = 0;
  go() {
    if (this.myForm.valid) {
      this.buttonVal = 'Dhanyawaad, data hackers tak bhej diya';
    }
  }
}
