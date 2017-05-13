import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  word(){
    let fk = faker.name;
    return `${fk.firstName()} ${fk.lastName()}`;
  },
  
  weight(){
    return Math.floor(Math.random() * 100);
  }
});
