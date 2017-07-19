import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Company } from './company';
import { ApiService } from 'app/api.service';
import {Angular2TokenService} from "angular2-token";
import {AuthService} from "app/auth.service";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
	companies: Company[];
	companyIdsLikes = [];
	companyIdsDislikes = [];
	prueba: number;

	constructor(
		private apiService: ApiService,
		private router: Router,
		private authService:AuthService, 
    	protected authTokenService:Angular2TokenService) { }

	ngOnInit() {
		this.getCompanies();
	}

	getCompanies(){
		this.apiService.getCompanies().subscribe(companies => this.companies = companies);
	}

	goToCompany(company: Company){
		let companyLink = ['/companies', company.id];
		this.router.navigate(companyLink);
	}


	sendVotes(userId, vote, companyId){
		console.log(userId, vote, companyId);
		this.apiService.sendVotes(userId, companyId, vote)
	      .subscribe(data => {return true},
	      error=> {
	        console.log("Error creando el nuevo Producto");
	        return Observable.throw(error);
	      });

	    this.getCompanies();
	}

	likes(event, type, companyId) {
		let userId = this.authTokenService.currentUserData.id;
		let vote;
		this.apiService.getVote(userId, companyId).subscribe(a => this.prueba = a);
		this.apiService.getVote(userId, companyId).subscribe(a => this.prueba = a);
		console.log("prueba: ", this.prueba);
		if (type == "like") {
			if (this.prueba == 1) {
				vote = "-1";
			}else{
				vote = "1";
			}
			
			
		}else{
			if (this.prueba == 0) {
				vote = "-1";
			}else{
				vote = "0";
			}
			
		}
		this.sendVotes(userId, vote, companyId);
	}

	
  

}
