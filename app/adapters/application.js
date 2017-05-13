import DS from 'ember-data';
import Config from 'farblosbunt-frontend-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
  host:         Config.apiHost,
  namespace:    Config.apiNamespace,

  urlForQuery(query, modelName){
    let subType = query.SUB_TYPE;
    if(subType){
      delete query.SUB_TYPE;
      return this._super(query, `${subType}-${modelName}`);
    }
    return this._super(...arguments);
  }
});
