import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		this.store.push({
			data:[{
				id:1,
				type: 'material-list',
				attributes:{
					materials: {},
					outsideRes: 0.04,
					insideRes: 0.13
				},
				relationships: {}
			}]
		});
	}					
});
