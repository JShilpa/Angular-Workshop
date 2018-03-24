export class DataService{
	data = [
	{
		fname : 'Shilpa',
		lname: 'Jain'

	},
	{
		fname : 'Jane',
		lname: 'Doe'

	}
	];

	readData(){
		return this.data;
	}
}