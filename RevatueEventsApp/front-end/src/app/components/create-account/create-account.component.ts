import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ContextService } from '../../services/context.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  private username;
  private password;
  private validatePassword;
  private firstname;
  private lastname;


  constructor(
    private authService: AuthService,
    private router: Router,
    private context: ContextService
  ) { }

  ngOnInit() {
  }

  createAccount() {
    if (this.password === this.validatePassword) {
      this.authService.createAccount(this.username, this.password, this.firstname, this.lastname).subscribe(
        data => {
          if (data != null) {
            // User received. Navigate to the home page...
            const user = <User> data;
            this.context.setUser(user);
            this.router.navigateByUrl('home');

          } else {
            // Set the username field as red...
          }
        }
      );

    } else {
      // Set the password fields as red
    }
  }

  login() {
    this.router.navigateByUrl('login');
  }
}
