import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams:{
    offset: { refreshModel: true }
  },

  model(params){
    const {offset, tag_id} = params;
    return RSVP.hash({
      right: this.store.query('entry-right', {offset, tag_id}),
      left: this.store.query('entry-left', {offset, tag_id})
    });
  }
});
