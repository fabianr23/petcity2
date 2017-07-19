import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Category } from './category';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	categories: Category[];

	constructor(
		private apiService: ApiService,
		private router: Router
	) { }

	ngOnInit() {
		let timer = Observable.timer(0, 500000000000);
		timer.subscribe(() => this.getCategories());
	}

	getCategories(){
		this.apiService.getCategories().subscribe(categories => this.categories = categories);
	}

	goToCategory (category: Category): void{
		let categoryLink = ['/categories', category.id];
		this.router.navigate(categoryLink);
	}

}
