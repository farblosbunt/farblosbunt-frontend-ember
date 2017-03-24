import Component from 'ember-component';
import computed from 'ember-computed';
// import {isNone} from 'ember-utils';


export default Component.extend({
  tagName:              'a',
  attributeBindings:    ['href'],
  classNames:           ['entry','news-entry'],
  classNameBindings:    ['isRight:right-entry:left-entry'],

  href:                 computed.readOnly('model.link'),

  side:                 computed.readOnly('model.side'),
  isRight:              computed.equal('side', 'right'),
  isLeft:               computed.equal('side', 'left'),


  imageSrc:             computed.readOnly('model.imageUrl'),
  title:                computed.readOnly('model.title'),



});
