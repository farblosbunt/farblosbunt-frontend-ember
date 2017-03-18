import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
  classNames:           ['chip'],
  classNameBindings:    ['active:active:inactive'],

  tag:                  null,
  selected:             null,

  active:               computed('selected.id','tag.id', function(){
    return this.get('selected.id') === this.get('tag.id');
  }),


  click(){
    this.set('selected', this.get('tag'));
    this.sendAction('onSelect', this.get('tag'));
  }
});
