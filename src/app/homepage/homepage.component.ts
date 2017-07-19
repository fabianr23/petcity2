import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TiendaService } from 'app/tienda/tienda.service';
import { Product } from 'app/tienda/tienda';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

	lastProducts: Product[];
	productsMostSales: Product[];

	constructor(private tiendaService: TiendaService) { }

	ngOnInit() {
		let timer = Observable.timer(0, 50000000);
		timer.subscribe(() => this.getLastProducts());
		timer.subscribe(() => this.getMostSales());
	}

	getLastProducts(){
		this.tiendaService.getLastProducts().subscribe(products => this.lastProducts = products);
	}

	getMostSales(){
		this.tiendaService.getMostSales().subscribe(products => this.productsMostSales = products);
	}

}
