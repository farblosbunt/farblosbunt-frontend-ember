import Controller from 'ember-controller';
import injectController from 'ember-controller/inject';

export default Controller.extend({
  indexController:  injectController('index'),

  actions:{
    onTagSelect(tag){
      this.get('indexController').set('selected', tag);
      this.transitionToRoute('tag', tag.id);
    }
  }
});
