import DS from 'ember-data';
const {Model, attr} = DS;

export default Model.extend({
  url:        attr('string'),
  text:       attr('string'),
  image:      attr('string'),
  videoUrl:   attr('string'),
});
