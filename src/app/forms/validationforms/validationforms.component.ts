import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';


declare interface User {
    // username: string; // required, must be 5-8 characters
    email: string; // required, must be valid email format
    password: string; // required, value must be equal to confirm password.
    confirmPassword: string; // required, value must be equal to password.
}
@Component({
    moduleId: module.id,
    selector: 'validationforms-cmp',
    templateUrl: 'validationforms.component.html'
})

export class ValidationFormsComponent{
    // complexForm : FormGroup;
    //
    // // We are passing an instance of the FormBuilder to our constructor
    // constructor(fb: FormBuilder){
    //   // Here we are using the FormBuilder to build out our form.
    //   this.complexForm = fb.group({
    //     // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //     'email' : [null, Validators.required],
    //
    //     password: ['', Validators.required],
    //       confirmPassword: ['', Validators.required]
    //     }, {
    //       validator: PasswordValidation.MatchPassword
    //   })
    // }
    public user: User;

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any):void{
        console.log(value);
    }
}
