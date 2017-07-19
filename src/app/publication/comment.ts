 	export class Comment{
	constructor(
		public id?: number,
		public body_comment_Publication?: string,
		public publication_id?: number,
		public user_id?: number,
		public c_pu_votes_like?: number,
		public c_pu_votes_dislike?: number,
		public created_at?: any,
		public updated_at?: any
	) {}
}