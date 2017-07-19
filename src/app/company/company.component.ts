import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Company } from 'app/companies/company';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
	id: number;
  	routeId: any;
  	model = new Company();

	constructor(private http: Http,
	    private route: ActivatedRoute,
	    private apiService: ApiService,
	    private router: Router) { }

	@Input() company: Company;

	ngOnInit() {
		this.routeId = this.route.params.subscribe(
	      params => {
	        this.id = +params['id'];
	      }
	    )
	    let companyRequest = this.route.params
	      .flatMap((params: Params) =>
	        this.apiService.getCompany(+params['id']));
	    companyRequest.subscribe(response => this.company = response.json());
	    console.log(this.company);
	}	
	



}
