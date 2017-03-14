import Controller from 'ember-controller';
import observer from 'ember-metal/observer';
import run from 'ember-runloop';

export default Controller.extend({
  queryParams: ['search','offset'],
  search:  '',

  // used for throtteling
  queryString: '',
  queryStringChanged:   observer('queryString', function(){
    run.throttle(this, this.performSearch, {}, 250, false);
  }),

  performSearch(){
    this.send('search');
  },

  actions:{
    search(){
      // triggers QP change which will trigger route change + model update
      this.set('search', this.get('queryString'));
    }
  }
});
