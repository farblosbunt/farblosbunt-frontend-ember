import Component from 'ember-component';
import injectService from 'ember-service/inject';
import {task, timeout} from 'ember-concurrency';
import {isEmpty, isNone} from 'ember-utils';
import computed from 'ember-computed';
const DEBOUNCE = 250;

export default Component.extend({
  classNames:         ['search-tags'],
  store:              injectService('store'),

  selected:           null,

  placeholder:        computed('selected', function(){
    let selected = this.get('selected');
    if(isNone(selected)){
      return "SUCHEN";
    }else {
      return selected.get('label');
    }
  }),

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
      this.set('selected', tag);
      this.sendAction('onTagSelect', tag);
    }
  }
});
