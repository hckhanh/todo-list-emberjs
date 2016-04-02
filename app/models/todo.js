import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  checked: DS.attr()
});
