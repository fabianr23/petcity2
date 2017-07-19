import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService} from "angular2-token";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent implements OnInit {

	signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    private authService:AuthService,
    private router:Router,) { }

  ngOnInit() {}

  onSignInSubmit(){

    this.authService.logInUser(this.signInUser).subscribe(
        res => {
          if(res.status == 200){
          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
          console.log('auth response body:', res.json()); //log the response body to show the user 
        
            this.onFormResult.emit({signedIn: true, res});
            this.router.navigate(['/profile']);
          }
        },
        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    );

  }
  logOut(){
     setTimeout(() => {
       this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
    }, 1000);
  }

}