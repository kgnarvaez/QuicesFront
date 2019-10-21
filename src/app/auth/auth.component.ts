import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  isSubmitting :Boolean = false;
  authForm: FormGroup;
  constructor(  private fb: FormBuilder,  private router: Router,) {
    
    
   }

  ngOnInit() {
    console.log("arranque auth");
    this.authForm = this.fb.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required]],
    });
    
  }

  
  submitForm() {
    this.isSubmitting = true;
    this.router.navigate(['/']);
    
  }

}
