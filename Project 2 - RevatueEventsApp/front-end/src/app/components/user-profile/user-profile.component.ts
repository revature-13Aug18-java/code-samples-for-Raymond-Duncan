import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ContextService } from '../../services/context.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';

import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private selectedFiles: FileList;
  private firstname;
  private lastname;
  private password;
  private validatePassword;
  private bio;
  private phone;
  private email;
  private numOfEvents: Number;
  private currentUser: User;
  private profileImageUrl: String;


  constructor(
    private sanitizer: DomSanitizer,
    private data: DataService,
    private context: ContextService,
    private router: Router,
    private image: ImageService
  ) { }

  ngOnInit() {
    this.initializeUser();
    console.log(this.context.getUser());
  }

  initializeUser() {
    this.currentUser = this.context.getUser();
    this.numOfEvents = this.context.getUser().events.length;
    console.log(this.currentUser, ' & ', this.numOfEvents);

    const user = this.context.getUser();
    if (user === null) {
      console.log('User not received from context');
    } else {
      this.currentUser = user;
      if (this.currentUser.profileImageUrl) {
        this.profileImageUrl = this.currentUser.profileImageUrl;
      } else {
        this.profileImageUrl = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
      }
    }
  }

  uploadImage() {
    const file = this.selectedFiles.item(0);
    this.image.uploadUserProfileImage(file, this.currentUser.username).promise().then(
      // On Success
      (data) => {
        console.log('Success', data);
        this.currentUser.profileImageUrl = data.Location;
        this.data.updateUser(this.currentUser).subscribe(
          userData => {
            if (userData !== null) {
              const u = <User> userData;
              this.profileImageUrl = u.profileImageUrl;
              console.log('User image successfully updated');
            } else {
              console.log('Something went wrong');
            }
          }
        );
      }
    ).catch(
      data => {
        console.log('Failure', data);
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  updateUser() {
    console.log(this.currentUser);
    console.log(this.firstname, this.lastname, this.bio, this.phone, this.email, this.password, this.validatePassword);
    if (this.firstname !== undefined) {
      this.currentUser.firstname = this.firstname;
    }
    if (this.lastname !== undefined) {
      this.currentUser.lastname = this.lastname;
    }
    if (this.bio !== undefined) {
      this.currentUser.bio = this.bio;
    }
    if (this.phone !== undefined) {
      this.currentUser.phone = this.phone;
    }
    if (this.email !== undefined) {
      this.currentUser.email = this.email;
    }
    if (this.password !== undefined && this.password === this.validatePassword) {
      this.currentUser.password = this.password;
    }
    this.context.setUser(this.currentUser);
    console.log('CURRENT USER TO BE UPDATED: ', this.currentUser);
    this.data.updateUser(this.currentUser).subscribe();
  }
}
