import Component from 'ember-component';
import computed from 'ember-computed';
// import {isNone} from 'ember-utils';


export default Component.extend({
  classNames:           ['entry','news-entry'],
  classNameBindings:    ['isRight:right-entry:left-entry'],

  side:                 computed.readOnly('model.side'),
  isRight:              computed.equal('side', 'right'),
  isLeft:               computed.equal('side', 'left')
});
