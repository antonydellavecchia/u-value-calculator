export default function() {
	this.namespace = '/api';

	//search for stored materials at
	this.get('/materials', 'materials');
}
