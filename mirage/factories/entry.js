import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  permalink_url(){ return faker.internet.avatar();}
});
