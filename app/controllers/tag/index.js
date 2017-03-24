import Controller from 'ember-controller';
import injectController from 'ember-controller/inject';
import $ from 'jquery';
import run from 'ember-runloop';

export default Controller.extend({
  indexController:  injectController('index'),

  showBoth:         true,
  showRight:        true,


  handleResize: function() {
    let width = $(window.document).width();
    this.set('showBoth', width >= 640);
    this.set('showRight', width >= 640);
  },

  bindResizeEvent: function() {
    $(window).on('resize', run.bind(this, this.handleResize));
    this.handleResize();
  }.on('init'),

  actions:{
    onTagSelect(tag){
      this.get('indexController').set('selected', tag);
      this.transitionToRoute('tag', tag.id);
    },
    showLeftEntries(){
      this.set('showBoth', false);
      this.set('showRight', false);
    },
    showRightEntries(){
      this.set('showBoth', false);
      this.set('showRight', true);
    }
  }
});
