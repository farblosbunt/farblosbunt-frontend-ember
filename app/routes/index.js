import Route from 'ember-route';

export default Route.extend({
  queryParams: {
    search: { refreshModel: true },
  },

  model(params){
    this.store.query('tag', params);
  }
});
