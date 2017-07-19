import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Category } from 'app/category/category';
import { ApiService } from 'app/api.service';
import { Product } from 'app/tienda/tienda';

@Component({
  selector: 'app-categorybyid',
  templateUrl: './categorybyid.component.html',
  styleUrls: ['./categorybyid.component.css']
})
export class CategorybyidComponent implements OnInit {

	id: number;
  	routeId: any;
  	products: Product[];

	constructor(
		private http: Http,
	    private route: ActivatedRoute,
	    private apiService: ApiService,
	    private router: Router
	) { }

	@Input() category: Category;

	ngOnInit() {
		this.routeId = this.route.params.subscribe(
	      params => {
	        this.id = +params['id'];
	      }
	    )
	    let categoryRequest = this.route.params
	      .flatMap((params: Params) =>
	        this.apiService.getCategory(+params['id']));
	    categoryRequest.subscribe(response => this.category = response.json());

	    let timer = Observable.timer(0, 5000000000);
		timer.subscribe(() => this.getProducts(this.id));

	}
	
	getProducts(category_id){
		this.apiService.getProductsByCategory(category_id).subscribe(products => this.products = products);
	}

	goToProduct (product: Product): void{
		let productLink = ['/products', product.id];
		this.router.navigate(productLink);
	}
}
