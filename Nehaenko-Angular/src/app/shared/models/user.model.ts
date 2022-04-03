export class User {
	constructor(
		public name: string,
		public email: string,
		public pass: string,
		public surname?: string,
		public id?: string,
		public createdOn?: Date,
		public lastName?: string,
		public dateOfBirthday?: Date
	) {}
}
