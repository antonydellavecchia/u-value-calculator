import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('u-value-calculator', 'Integration | Component | u value calculator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{u-value-calculator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#u-value-calculator}}
      template block text
    {{/u-value-calculator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
