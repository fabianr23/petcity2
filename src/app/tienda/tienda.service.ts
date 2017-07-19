import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './tienda';

@Injectable()
export class TiendaService {
	private productUrl = 'http://localhost:3000/api/v1/products';
	private lastProductsUrl = 'http://localhost:3000/api/v1/home/lastproducts';
	private mostSalesUrl = 'http://localhost:3000/api/v1/home/lastproducts';

	private newproductUrl = 'http://localhost:3000/api/v1/company/users/2/products';
	
	constructor(private http: Http) {}

	//GET:  Todos los productos | ruta: productUrl
	getProducts(): Observable<Product[]> {
		return this.http.get(this.productUrl).map((response: Response) => <Product[]>response.json().products)
	}

	//GET: Un solo producto | ruta: productUrl
	getProduct(id: number){
		return this.http.get(this.productUrl + "/" + id + '.json');
	}

	createProduct(product: Product): Observable<Product> {
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.post(this.newproductUrl, JSON.stringify(product),
		options).map((res:Response) => res.json());
	}

	//GET: Ultimos productos a la venta | ruta: lastProductsUrl
	getLastProducts(): Observable<Product[]> {
		return this.http.get(this.lastProductsUrl).map((response: Response) => <Product[]>response.json().products)
	}

	//GET: Productos destacados | ruta: mostSalesUrl
	getMostSales(): Observable<Product[]> {
		return this.http.get(this.mostSalesUrl).map((response: Response) => <Product[]>response.json().products)
	}

	//GET: Productos relacionados a un producto | ruta: productUrl
	getProductsRelated(id: number){
		let url = this.productUrl + "/" + id + "/" + "catego_product";
		return this.http.get(url).map((response: Response) => <Product[]>response.json().products)
	}


}