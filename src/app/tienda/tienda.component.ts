import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Product } from './tienda';
import { Category } from 'app/category/category';
import { TiendaService } from './tienda.service';
import { ApiService } from 'app/api.service';
import {Angular2TokenService} from "angular2-token";
import {AuthService} from "app/auth.service";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  	products: Product[];
  	productsMostSales: Product[];
  	categories: Category[];
  	idCategory: number;
  	palabra: string;
  	orden: string;
  	parametro: string;

  	

	constructor(
		private tiendaService: TiendaService,
		private apiService: ApiService,
		private router: Router,
		private authService:AuthService, 
    	protected authTokenService:Angular2TokenService
	) { }

	ngOnInit() {
		
		this.getProducts();
		this.getMostSales();
		this.getCategories();

		this.idCategory = 0;
		this.orden = "";
		this.parametro = "name_product";



	}

	getProducts(){
		this.tiendaService.getProducts().subscribe(products => this.products = products);
		
	}
	


	goToProduct (product: Product): void{
		let productLink = ['/products', product.id];
		this.router.navigate(productLink);
	}

	getMostSales(){
		this.tiendaService.getMostSales().subscribe(products => this.productsMostSales = products);
	}


	getCategories(){
		this.apiService.getCategories().subscribe(categories => this.categories = categories);
	}

	goToCategory (category: Category): void{
		let categoryLink = ['/categories', category.id];
		this.router.navigate(categoryLink);
	}

	getProductsByCategory(event) {
		console.log(event.target.options[event.target.options.selectedIndex].id);
		this.idCategory = event.target.options[event.target.options.selectedIndex].id;
		this.getProductosFiltro();
	}

	getparametroBusqueda(event){
		this.parametro = event.target.options[event.target.options.selectedIndex].id;
		this.getProductosFiltro();
	}

	getSearchProducts(event){
		console.log(this.products);
		let palabra = event.target.children[0].children[0].value;
		console.log(palabra);
		
			this.palabra = event.target.children[0].children[0].value;
			this.getProductosFiltro();
		
	}

	getOrden(event){
		this.orden = event.target.options[event.target.options.selectedIndex].id;
		this.getProductosFiltro();
	}

	getProductosFiltro(){
		console.log(this.products);
		this.apiService.getProductosFiltro(this.idCategory, this.palabra, this.orden, this.parametro).subscribe(products => this.products = products);
	}

	sendStars(productId){
		let userId = this.authTokenService.currentUserData.id;
		let vote;



		this.apiService.sendStars(userId, productId, vote)
	      .subscribe(data => {return true},
	      error=> {
	        console.log("Error creando el nuevo Producto");
	        return Observable.throw(error);
	      });

	}

}
