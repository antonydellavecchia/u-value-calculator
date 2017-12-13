import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	materials: DS.hasMany('material', {async: true}),
	outsideRes: DS.attr('number'),
	insideRes: DS.attr('number'),
		
	totalRes: Ember.computed('outsideRes', 'insideRes', 'materials', function(){
		let initialRes = this.get('outsideRes') + this.get('insideRes');

		//sums over all materials + outside and inside resistivity
		return this.get('materials').mapBy('resistivity').reduce( function(acc, value){
			return acc + value;
		}, initialRes);
	}),

	uValue: Ember.computed('totalRes', function(){
		return 1/this.get('totalRes');
	}),

	totalChanged: Ember.observer('materials.length', function() {
		console.log(`total resistivity changed to: ${this.get('totalRes')}`);
	})
});
