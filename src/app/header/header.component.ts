import { AuthComponent } from '../auth/auth.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  condition = false;
  constructor(private auth: AuthComponent) { }

  ngOnInit() {
    console.log('arranque');
    if (this.auth.isSubmitting) {
      console.log(this.auth.isSubmitting);

    }
  }

}
