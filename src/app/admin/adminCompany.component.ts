import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Company } from 'app/admin/company';
import { ApiService } from 'app/api.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admincompany',
  templateUrl: './adminCompany.component.html',
  styleUrls: ['./adminCompany.component.css']
})

export class AdminCompanyComponent implements OnInit {
	companies: Company[];



	constructor(
		private apiService: ApiService,
		private router: Router) { }

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

}
