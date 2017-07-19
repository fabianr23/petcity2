import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Angular2TokenService} from "angular2-token";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'app/api.service';
import { Product } from '../tienda/tienda';
import { TiendaService } from '../tienda/tienda.service';

@Component({
  selector: 'app-profile-products-likes',
  templateUrl: './profile-products-likes.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileProductsLikesComponent implements OnInit {
  
  id: number;
  routeId: any;
  products: Product[];
  constructor(protected authTokenService:Angular2TokenService,
              protected authService:AuthService,
              private router:Router,
              private route: ActivatedRoute,
              private tiendaService: TiendaService,
              private apiService: ApiService,) { }

  ngOnInit() {
    let idperfil = this.authTokenService.currentUserData.id;
    this.products = ["1"];
    this.getProducts(idperfil);
  }
  getProducts(id: number){
		this.apiService.getProductsPerfilVotes(id).subscribe(products => this.products = products);
	}
  goToProduct (product: Product): void{
		let productLink = ['/products', product.id];
		this.router.navigate(productLink);
	}


}
