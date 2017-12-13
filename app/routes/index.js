import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model() {
		return RSVP.hash({
			materials: this.store.findAll('material'),
			materialList: this.store.find('material-list', 1)
		});
	},

	setupController(controller, models) {
		controller.set('materials', models.materials);
		controller.set('materialList', models.materialList);	
	}
});
