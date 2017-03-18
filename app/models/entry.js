import DS from 'ember-data';
const {Model, attr} = DS;

export default Model.extend({
  permalink_url:        attr('string'),
  side:                 attr('string'),
});
