import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Publication } from './publication';
import { Comment } from './comment';

@Injectable()
export class PublicationService {
	private publicationUrl = 'http://localhost:3000/api/v1/publications';
	private newpublicationUrl = 'http://localhost:3000/api/v1/costum/users';

	constructor(private http: Http) {}

	getPublications(): Observable<Publication[]> {
		return this.http.get(this.publicationUrl).map((response: Response) => <Publication[]>response.json().publications)
	}

	getPublication(id: number){
		return this.http.get(this.publicationUrl + "/" + id + '.json');
	}
	getComments(id: number){
		return this.http.get(this.newpublicationUrl+"/"+1+"/publications/"+id + '.json');
	}

	createPublication(publication: Publication, id:number): Observable<Publication> {
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		console.log("publicacion: "+JSON.stringify(publication));
		publication.user_id = id;
		return this.http.post(this.newpublicationUrl+"/"+id+"/publications", JSON.stringify(publication),
		options).map((res:Response) => res.json());
	}

	createCommentPublication(comment: Comment, userid: number, id:number): Observable<Comment> {
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		comment.user_id = userid;
		comment.publication_id = id;
		console.log("comment: "+JSON.stringify(comment));
		return this.http.post(this.newpublicationUrl+"/"+userid+"/publications"+"/"+id+"/comment_publications", JSON.stringify(comment),
		options).map((res:Response) => res.json());
	}

	getMyPublications(id: number): Observable<Publication[]> {
		return this.http.get(this.newpublicationUrl+"/"+id+"/my_publications").map((response: Response) => <Publication[]>response.json().publications)
	}

	getCommentedPublications(id: number): Observable<Publication[]> {
		return this.http.get(this.newpublicationUrl+"/"+id+"/publicatons_commented").map((response: Response) => <Publication[]>response.json().publications)
	}

	getVotedPublications(id: number): Observable<Publication[]> {
		return this.http.get(this.newpublicationUrl+"/"+id+"/publicatons_voted").map((response: Response) => <Publication[]>response.json().publications)
	}

	likePublication(userid: number, id: number, vote: number): Observable<Publication>{
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		let like = '{ "vote" : "'+vote+'" }';
		return this.http.post(this.newpublicationUrl+"/"+userid+"/publications"+"/"+id+"/votes", like,
		options).map((res:Response) => res.json());
	}

	likeCommentPublication(userid: number, publicationid: number, id: number, vote: number): Observable<Publication>{
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		let like = '{ "vote" : "'+vote+'" }';
		return this.http.post(this.newpublicationUrl+"/"+userid+"/publications"+"/"+publicationid+"/comment_publications"+"/"+id+"/votes", like,
		options).map((res:Response) => res.json());
		//console.log("userid: "+userid+ "pub id: "+publicationid+"id: "+id+"vote: "+vote);

	}
	
}