import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Publication } from 'app/publication/publication';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-publication-by-id',
  templateUrl: './publication-by-id.component.html',
  styleUrls: ['./publication-by-id.component.css']
})
export class PublicationByIdComponent implements OnInit {

	id: number;
  	routeId: any;

	constructor(
		private http: Http,
	    private route: ActivatedRoute,
	    private apiService: ApiService
	) { }

	@Input() publication: Publication;

	ngOnInit() {
		this.routeId = this.route.params.subscribe(
	      params => {
	        this.id = +params['id'];
	      }
	    )
	    let publicationRequest = this.route.params
	      .flatMap((params: Params) =>
	        this.apiService.getPublication(+params['id']));
	    publicationRequest.subscribe(response => this.publication = response.json());
	}

}
