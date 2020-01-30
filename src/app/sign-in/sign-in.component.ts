import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {IUsers} from '../users';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  data: Array<IUsers>;
  email: string;
  password: string;
  message: string;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.data = data;
        console.log(data);
    });
  }

  onClickSignIn() {
    console.log(this.email);
    this.data.forEach((user, key) => {
      if (user.email === this.email && user.password === this.password) {
        this.message = '';
        this.router.navigate(['/table']);
      }
    });
    this.message = 'Username or Password are not correct';
  }

}

