import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteMaterial(data)
		{
			data.destroyRecord();
		},

		saveMaterial()
		{
			//get values from form
			let	name = this.get('name');
			let	thickness =  this.get('thickness');
			let kValue = this.get('kValue');

			//clear input fields
			this.set('name', null);
			this.set('thickness', null);
			this.set('kValue', null);
		
			//create model entry from values and add to material list
			let list = this.store.peekRecord('materialList', 1);
			let material = this.store.createRecord('material', {
				name: name,
				thickness: thickness,
				kValue: kValue,
				materialList: list	
 			});

			material.save();
		}
	}
});

