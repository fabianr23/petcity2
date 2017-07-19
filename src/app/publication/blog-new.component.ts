import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Publication } from './publication';
import { PublicationService } from './publication.service';
import { Angular2TokenService} from "angular2-token";
import { AuthService } from "../auth.service";

@Component({
  selector: 'blog-new',
  templateUrl: 'blog-new.component.html',
  styleUrls: ['publication.component.css']
})
export class BlogNewComponent {
  
  publication = new Publication;
  submitted: boolean = false; // check if form is submitted
  id: number;
  routeId: any;

  constructor(
    private publicationService: PublicationService,
    protected authTokenService:Angular2TokenService, 
  ){}

  ngOnInit() {
  }

  createPublication(publication: Publication){
    let idperfil = this.authTokenService.currentUserData.id;
    console.log("id perfil: " + idperfil);
    this.submitted = true;
    this.publicationService.createPublication(publication,idperfil)
      .subscribe(data => {return true},
      error=> {
        console.log("Error creando la publicación");
        return Observable.throw(error);
      });
  }
}
