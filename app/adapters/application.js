import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForQuery(query, modelName){
    let subType = query.SUB_TYPE;
    if(!!subType){
      delete query.SUB_TYPE;
      return this._super(query, `${subType}-${modelName}`);
    }
    return this._super(...arguments);
  }
});
