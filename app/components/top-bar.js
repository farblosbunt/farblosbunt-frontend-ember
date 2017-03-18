import Ember from 'ember';

export default Ember.Component.extend({
  classNames:         ['top-bar'],

  actions:{
    onTagSelect(tag){
      this.set('selected', tag);
      this.sendAction('onTagSelect', tag);
    }
  }
});
