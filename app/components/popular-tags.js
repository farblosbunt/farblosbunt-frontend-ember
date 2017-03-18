import Component from 'ember-component';
import injectService from 'ember-service/inject';
import {task, timeout} from 'ember-concurrency';
import RSVP from 'rsvp';


export default Component.extend({
  classNames:         ['popular-tags'],
  store:              injectService('store'),
  selected:           null,


  fetchPopularTags:   task(function*(){
    yield timeout(0);
    let popularTags = yield this.queryTags();
    this.set('popularTags', popularTags);
  }),

  queryTags(){
    return new RSVP.Promise((resolve, reject)=>{
      this.get('store').query('tag',{SUB_TYPE: 'popular'}).then((tags)=>{
        resolve(tags.toArray());
      }, reject);
    });
  },

  didInsertElement(){
    this._super(...arguments);
    this.get('fetchPopularTags').perform();
  },

  willDestroyElement(){
    this._super(...arguments);
    this.get('fetchPopularTags').cancelAll();
  },

  actions:{
    selectTag(tag){
      this.sendAction('onTagSelect', tag);
    }
  }
});
