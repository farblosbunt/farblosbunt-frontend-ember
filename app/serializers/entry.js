import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalize(){
    return this._super(...arguments);
  }
});
