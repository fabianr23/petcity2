import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Publication } from './publication';
import { PublicationService } from './publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  	publications: Publication[];

	constructor(
		private publicationService: PublicationService,
		private router: Router
	) {}

	ngOnInit() {
		this.getPublications();
	}

	getPublications(){
		this.publicationService.getPublications().subscribe(publications => this.publications = publications);
	}

	goToPublication (publication: Publication): void{
		let publicationLink = ['/blog', publication.id];
		this.router.navigate(publicationLink);
	}
}

