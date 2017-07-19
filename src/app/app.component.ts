import { Component, Output, EventEmitter } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	// signInUser = {
  //   email: '',
  //   password: ''
  // };

  //@Output() onFormResult = new EventEmitter<any>();

  title = 'app works!';
  constructor(
    private authService:AuthService, 
    protected authTokenService:Angular2TokenService,
    private router:Router,
    ){
    
    this.authTokenService.init(environment.token_auth_config);

    // this.authTokenService.signIn({email: "lgbricenoa@unal.edu.co", password: "987654321"}).subscribe(

    //     res => {

    //       console.log('auth response:', res);
    //       console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
    //       console.log('auth response body:', res.json()); //log the response body to show the user 
    //     },

    //     err => {
    //       console.error('auth error:', err);
    //     }
    // )
  }

  ngOnInit(){}

    logOut(){
          this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
      }
}
