import Ember from 'ember';

export default Ember.Component.extend({
  classNames:         ['tag-column-switcher'],

  actions:{
    onRight(){ this.set('showRight', true);},
    onLeft(){ this.set('showRight', false);}
  }
});
