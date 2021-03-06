import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	//define material
	name: DS.attr(),
	thickness: DS.attr('number'),
	kValue: DS.attr('number'),
	materialList: DS.belongsTo('material-list'),
		
	resistivity: Ember.computed('thickness', 'kValue', function() {
		let d = this.get('thickness');
		let k = this.get('kValue');

		// resistivity formula
		return d/k;
	})
});
