import Component from 'ember-component';
import injectService from 'ember-service/inject';
import {task, timeout} from 'ember-concurrency';
import {isEmpty} from 'ember-utils';
const DEBOUNCE = 250;

export default Component.extend({
  classNames:         ['search-tags'],
  store:              injectService('store'),

  searchTagsTask:     task(function*(query){
    if(isEmpty(query)){ return [];}
    yield timeout(DEBOUNCE);
    let results = yield this.tagsForQuery(query);
    return results;
  }).restartable(),


  tagsForQuery(query){
    return this.get('store').query('tag',{query: query});
  },

  willDestroyElement(){
    this._super(...arguments);
    this.get('searchTagsTask').cancelAll();
  },

  actions:{
    selectTag(tag){
      this.sendAction('onTagSelect', tag);
    }
  }
});
