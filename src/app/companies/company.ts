export class Company{
	constructor(
		public id?: number,
		public name_comp?: string,
		public address?: string,
		public city?: string,
		public phone?: number,
		public permission?: boolean,
		public user_id?: number,
		public active?: boolean,
		public image_company?: string,
		public c_votes_like?: number,
		public c_votes_dislike?: number,
		public created_at?: any,
		public updated_at?: any
	) {}
}