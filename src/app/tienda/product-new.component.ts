import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Product } from './tienda';
import { TiendaService } from './tienda.service';

@Component({
  selector: 'product-new',
  templateUrl: 'product-new.component.html',
  styleUrls: ['product.component.css']
})
export class ProductNewComponent {
  
  product = new Product;
  submitted: boolean = false; // check if form is submitted
  id: number;
  routeId: any;

  constructor(private productService: TiendaService 
  ){}

  createProduct(product: Product){
    this.submitted = true;
    this.productService.createProduct(product)
      .subscribe(data => {return true},
      error=> {
        console.log("Error creando el nuevo Producto");
        return Observable.throw(error);
      });
  }
}
