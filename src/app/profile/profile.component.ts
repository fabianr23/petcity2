import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService} from "angular2-token";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ApiService } from 'app/api.service';
import { Product } from '../tienda/tienda';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  productos: Product[];
  constructor(protected authTokenService:Angular2TokenService,
              protected authService:AuthService,
              private router:Router) {
                
               }

  ngOnInit() {
  }
  goToMisProductos(){
		let idperfilLink = ['/profile/products'];
		this.router.navigate(idperfilLink);
	}
  goToMisLikes(){
		let idperfilLink = ['/profile/products/likes'];
		this.router.navigate(idperfilLink);
	}
  goToMisComments(){
		let idperfilLink = ['/profile/products/comments'];
		this.router.navigate(idperfilLink);
	}
  goToMisBlogs(){
		let idperfilLink = ['/profile/publications'];
		this.router.navigate(idperfilLink);
	}
  goToMisBlogsLikes(){
		let idperfilLink = ['/profile/publications/likes'];
		this.router.navigate(idperfilLink);
	}
  goToMisBlogsComments(){
		let idperfilLink = ['/profile/publications/comments'];
		this.router.navigate(idperfilLink);
	}

}
