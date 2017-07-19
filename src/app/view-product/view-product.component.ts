import { Component, OnInit } from '@angular/core';
import { TiendaComponent } from 'app/tienda/tienda.component';
import { Product } from 'app/tienda/tienda';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

	tienda: Product[];

	constructor(private tiendaComponent: TiendaComponent ) { 
		this.tienda = tiendaComponent.products;
	}

	ngOnInit() {

	}



}
