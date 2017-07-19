import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Publication } from './publication';
import { Comment } from './comment';
import { PublicationService } from './publication.service';
import { Angular2TokenService} from "angular2-token";
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./publication.component.css']
})
export class BlogComponent implements OnInit {

  comment = new Comment;
  submitted: boolean = false; // check if form is submitted
  id: number;
  routeId: any;
  Comments: Publication[];

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private publicationService: PublicationService,
    protected authTokenService:Angular2TokenService,
    protected authService:AuthService,
    private router: Router, 
  ){}

  @Input() publication: Publication;

  ngOnInit() {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let publicationRequest = this.route.params
      .flatMap((params: Params) =>
        this.publicationService.getPublication(+params['id']));
    publicationRequest.subscribe(response => this.publication = response.json());

    let commentRequest = this.route.params
      .flatMap((params: Params) =>
        this.publicationService.getComments(+params['id']));
    commentRequest.subscribe(response => this.Comments = response.json());
  }

  createCommentPublication(comment: Comment){
    let idperfil = this.authTokenService.currentUserData.id;
    this.submitted = true;
    let commentRequest = this.route.params
      .flatMap((params: Params) =>
        this.publicationService.createCommentPublication(comment,idperfil,+params['id']))
        .subscribe(data => {return true},
        error=> {
          console.log("Error creando en comentario en la publicación");
          return Observable.throw(error);
        });
    let publicationLink = ['/blog'];
		this.router.navigate(publicationLink);
  }
    likePublication(publication: Publication, vote: number){
      let idperfil = this.authTokenService.currentUserData.id;
      this.publicationService.likePublication(idperfil,publication.id,vote)
      .subscribe(data => {return true},
        error=> {
          console.log("Error en like a la publicación");
          return Observable.throw(error);
        });
    }
    likeCommentPublication(publication: Publication, commentid: number, vote: number){
      let idperfil = this.authTokenService.currentUserData.id;
      this.publicationService.likeCommentPublication(idperfil,publication.id,commentid,vote)
      .subscribe(data => {return true},
        error=> {
          console.log("Error en like al comentario");
          return Observable.throw(error);
        });
      console.log("like al comentario");
      // let publicationLink = ['/blog'];
		  // this.router.navigate(publicationLink);
      //this.routerBack(publication, publication.id);
    }

    routerBack(publication: Publication, id :number){
      let publicationLink = ['/blog', publication.id];
		  this.router.navigate(publicationLink);
    }
}
