export class User{
	constructor(
		public id?: number,
		public email?: string,
		public document?: number,
		public name_user?: string,
		public block?: boolean,
		public sendEmail?: boolean,
		public rol?: string,
		public active?: boolean,
		public created_at?: any,
		public updated_at?: any
	) {}
}
