import Component from 'ember-component';
import computed from 'ember-computed';
import {isNone} from 'ember-utils';

import Hammer from 'npm:hammerjs';
const {
  DIRECTION_HORIZONTAL,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  Swipe,
  Manager
}=Hammer;
const hammerManagerOptions = {
  recognizers: [
    [Swipe, {direction: DIRECTION_HORIZONTAL}]
  ]
};

export default Component.extend({
  classNames:           ['entries-column'],
  classNameBindings:    ['isRight:right-column:left-column'],

  side:                 'right',

  isRight:              computed.equal('side', 'right'),
  isLeft:               computed.equal('side', 'left'),


  didInsertElement(){
    this._super(...arguments);
    let element = this.$().get(0);
    let mcHammerManager = new Manager(element, hammerManagerOptions);
    this.set('mcHammerManager', mcHammerManager);
    mcHammerManager.on('swipe', (ev)=>{this.handleSwipe(ev);})
  },


  willDestroyElement(){
    this._super(...arguments);
    let mcHammerManager =  this.get('mcHammerManager');
    if(!isNone(mcHammerManager)){
      mcHammerManager.off('swipe');
    }
  },

  handleSwipe(event){
    switch (event.direction) {
      case DIRECTION_LEFT: return this.sendAction('onwipeleft');
      case DIRECTION_RIGHT: return this.sendAction('onwiperight');
      default: return;
    }
  },

});
