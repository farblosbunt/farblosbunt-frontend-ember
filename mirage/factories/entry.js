import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  side(i){return i % 0 ? 'right' : 'left';},
  permalink_url(){ return faker.internet.avatar();}
});
