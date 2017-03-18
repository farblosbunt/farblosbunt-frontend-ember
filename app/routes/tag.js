import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams:{
    offset: { refreshModel: false }
  },

  model(params){
    const {offset, tag_id} = params;
    return RSVP.hash({
      tag: this.store.find('tag', tag_id),
      right: this.store.query('entry', {offset, tag_id, SUB_TYPE: 'right'}),
      left: this.store.query('entry', {offset, tag_id, SUB_TYPE: 'left'})
    });
  }
});
