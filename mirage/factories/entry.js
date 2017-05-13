import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  political_score(){ return Math.random() * 10 - 5;},

  caption(){
    let arr = [
      null,
      faker.lorem.sentence()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  created_time(){
    let arr = [
      faker.date.past(0.2),
      faker.date.recent()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  description(){
    let arr = [
      null,
      faker.lorem.paragraphs()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  icon(){
    let arr = [
      null,
      faker.image.image()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  page_title(){
    return faker.company.catchPhrase();
  },

  link(){
    let arr = [faker.internet.url()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  message(){
    let arr = [
      null,
      faker.company.catchPhrase()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  name(){
    let arr = [
      null,
      faker.internet.userName()];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  picture(){
    let arr = [
      null,
      faker.image.avatar(),
      faker.image.image(),
      faker.image.animals(),
      faker.image.abstract(),
      faker.image.business(),
      faker.image.cats(),
      faker.image.city(),
      faker.image.food(),
      faker.image.nightlife(),
      faker.image.fashion(),
      faker.image.technics(),
    ];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  source(){
    let arr = [
      null,
      faker.internet.url(),
    ];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  story(){
    let arr = [
      null,
      null,
      null,
      faker.lorem.paragraph(),
    ];
    return arr[Math.floor(Math.random()*arr.length)]
  },

  type(){
    let arr = 'link status photo video offer'.w();
    return arr[Math.floor(Math.random()*arr.length)]
  },

  updated_time(){
    let arr = [
      null,
      faker.date.recent()];
    return arr[Math.floor(Math.random()*arr.length)]
  },
});
