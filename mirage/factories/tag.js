import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  label(){
    let fk = faker.name;
    return `${fk.firstName()} ${fk.lastName()}`;
  }
});
