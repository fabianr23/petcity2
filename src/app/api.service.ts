import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Publication } from './publication/publication';
import { Category } from './category/category';
import { Company } from './tienda/company';
import { Product } from './tienda/tienda';
import { User } from './users/user';

@Injectable()
export class ApiService {
	//GET
	private publicationsUrl = 'http://localhost:3000/api/v1/publications';
	private categoriesUrl = 'http://localhost:3000/api/v1/categories';
	private companiesUrl = 'http://localhost:3000/api/v1/companies';
	private productSearchUrl = 'http://localhost:3000/api/v1/products/search?q=';
	private productosOrdenUrl = 'http://localhost:3000/api/v1/products/search?q=';
	private productosFiltro = 'http://localhost:3000/api/v1/products/search?';
	private usersAdmin = 'http://localhost:3000/api/v1/admin/users/2/users/search?';
	private votes = 'http://localhost:3000/api/v1/costum/users/';
	private getVotes = 'http://localhost:3000/api/v1/costum/users/';
	private stars = 'http://localhost:3000/api/v1/costum/users/';
	private perfilUrl = 'http://localhost:3000/api/v1/users';
	private productPerfilUrl = 'http://localhost:3000/api/v1/company/users';
	private myPerfilUrl = 'http://localhost:3000//api/v1/costum/users';

	//PATCH

	constructor(private http: Http) {}

	//GET:  Todos las publicaciones | ruta: publicationsUrl
	getPublications(): Observable<Publication[]> {
		return this.http.get(this.publicationsUrl).map((response: Response) => <Publication[]>response.json().publications);
	}

	//GET: Una sola publicacion | ruta: publicationsUrl
	getPublication(id: number){
		return this.http.get(this.publicationsUrl + "/" + id + '.json');
	}
	//GET:  Todos las categorias | ruta: categoriesUrl
	getCategories(): Observable<Category[]> {
		return this.http.get(this.categoriesUrl).map((response: Response) => <Category[]>response.json().categories);
	}

	//GET: Una sola categoria | ruta: categoriesUrl
	getCategory(id: number){
		return this.http.get(this.categoriesUrl + "/" + id + '.json');
	}

	//GET: Productos de una categoria | ruta: categoriesUrl
	getProductsByCategory(id: number){
		let url = this.categoriesUrl + "/" + id + "/" + "products";
		return this.http.get(url).map((response: Response) => <Product[]>response.json().products)
	}

	//GET:  Todos las compañias | ruta: companiesUrl
	getCompanies(): Observable<Company[]> {
		return this.http.get(this.companiesUrl).map((response: Response) => <Company[]>response.json().companies);
	}
	
	

	getProductosFiltro(categoria, palabra, orden, parametro): Observable<Product[]> {
		let urlCategory = "category_id=" + categoria;
		let urlPalabra = "&q=" + palabra;
		let urlOrden = "&sort=" + orden;
		
		let url = this.productosFiltro ;

		if (categoria != 0) {
			url = this.productosFiltro + urlCategory;
		}

		if (palabra == undefined || palabra == "") {
			url = url + urlOrden + parametro;
			
		}else{
			url = url + urlPalabra + urlOrden + parametro;
			
		}
		return this.http.get(url).map((response: Response) => <Product[]>response.json().products);
	}

	getUsersAdmin(palabra):Observable<User[]>{
		
		let atributos =  "&select_user=id,name_user,email,document,block,sendEmail,rol,active";
		let url = "";
		if (palabra != "") { 
			url = this.usersAdmin + "q=" + palabra +atributos;
			
		} else {
			url = this.usersAdmin + atributos;
		}
		return this.http.get(url).map((response: Response) => <User[]>response.json().users);
	}

	getCompany(id: number){
		return this.http.get(this.companiesUrl + "/" + id + '.json');
	}
	
	getVote(userId, companyId){
		let url = this.getVotes + userId + "/" + "companies" + "/" + companyId + "/" + "my_vote";
		console.log(url);
		return this.http.get(url).map((response: Response) => response.json().vote);
		
	}
	sendVotes(userId, companyId, vote){
		let url = this.votes  + userId + "/" + "companies" + "/" + companyId + "/" +  "votes";
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		console.log(url);
		return this.http.post(url, {"vote": vote},
		options).map((res:Response) => res.json());
		
	}

	sendStars(userId, productId, vote){
		let url = this.votes  + userId + "/" + "products" + "/" + productId + "/" +  "votes";
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		console.log(url);
		return this.http.post(url, {"vote": vote},
		options).map((res:Response) => res.json());
	}
	
	//GET:  Todos los productos del perfil asociado | ruta: productPerfilUrl
	getProductsPerfil(id: number): Observable<Product[]> {
		return this.http.get(this.myPerfilUrl+"/"+id+"/productsbought").map((response: Response) => <Product[]>response.json().products)
	}

	//GET:  Todos los productos del perfil asociado | ruta: productPerfilUrl
	getProductsPerfilVotes(id: number): Observable<Product[]> {
		return this.http.get(this.myPerfilUrl+"/"+id+"/product_voted").map((response: Response) => <Product[]>response.json().products)
	}

	//GET:  Todos los productos del perfil asociado | ruta: productPerfilUrl
	getProductsPerfilComments(id: number): Observable<Product[]> {
		return this.http.get(this.myPerfilUrl+"/"+id+"/product_commented").map((response: Response) => <Product[]>response.json().products)
	}


}