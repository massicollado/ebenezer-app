import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {LoginData, LoginService} from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User[];
  loginData: LoginData;

  constructor(private loginService: LoginService) { }

  login(usuario: string, password: string) {

    this.loginData = {
      usr : usuario,
      pwd: password,
    };
    this.loginService.loginAll(this.loginData).subscribe(
      (result: User) => {
        console.log('esto traigo', this.loginData);
        console.log(result);
        if (result.id) {
          console.log('has iniciado');
        } else {
          console.log('Tenemos un error');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {

  }



}



