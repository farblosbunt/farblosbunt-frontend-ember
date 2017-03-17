import Controller from 'ember-controller';

export default Controller.extend({
  actions:{
    onTagSelect(tag){
      this.transitionToRoute('tag', tag);
    }
  }
});
