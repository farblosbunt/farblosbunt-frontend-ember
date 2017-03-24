import DS from 'ember-data';
const {Model, attr} = DS;
import computed from 'ember-computed';

export default Model.extend({
  permalink_url:        attr('string'),
  side:                 attr('string'),


  caption:              attr('string'),
  created_time:         attr('date'),
  description:          attr('string'),
  icon:                 attr('string'),
  link:                 attr('string'),
  message:              attr('string'),
  name:                 attr('string'),
  picture:              attr('string'),
  source:               attr('string'),
  story:                attr('string'),
  type:                 attr('string'),
  updated_time:         attr('date'),



  // subject to change
  imageUrl:             computed.readOnly('picture'),
  title:                computed.readOnly('side'),
});
