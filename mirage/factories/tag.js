import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  label(index){ return `tag ${index}: ${faker.name.firstName()}`;}
});
