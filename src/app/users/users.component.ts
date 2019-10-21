import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { UsersService } from './users.service';
import { Users} from './users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  email: '';
  password: '';
  user: Users;
  userService: UsersService;
  rForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.rForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null],
    });


  }

  addForm() {
    if (this.rForm.valid) {
      this.user = this.rForm.value;
      this.userService.getUser(this.user.email);
    }
  }


}
