import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from 'app/admin/user';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminUser.component.html',
  styleUrls: ['./adminUser.component.css']
})
export class AdminUserComponent implements OnInit {

	users: User[];
	name: string;
	email: string;
	block: boolean;


	constructor(
		private apiService: ApiService,
		private router: Router) { }

	ngOnInit() {
		let timer = Observable.timer(0, 5000000000);
		timer.subscribe(() => this.getUsersAdmin());
		this.name = "";
		this.email = "";

	}



	getSearchUserByName(event){
		this.name = event.target.children[0].children[0].value;
		this.getUsersAdmin();
	}

	getSearchUserByCorreo(event){
		this.email = event.target.children[0].children[0].value;
		this.getUsersAdmin();
	}

	getSearchBlock(){

	}

	getUsersAdmin(){

		this.apiService.getUsersAdmin(this.name).subscribe(users => this.users = users);
		console.log("Usuarios");
		console.log(this.users);
	}


}
