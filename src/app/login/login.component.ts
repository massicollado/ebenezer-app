import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {LoginService} from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User[];
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loginAll().subscribe(
      (result: any) => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }



}



