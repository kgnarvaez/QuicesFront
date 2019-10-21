import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowed: Boolean = false;
  constructor(private auth: AuthComponent) { }

  ngOnInit() {
    console.log("arranque");
    if (this.auth.isSubmitting)
    { 
      console.log(this.auth.isSubmitting);
      this.isShowed = true;
    }
  }

}
