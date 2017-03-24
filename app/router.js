import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('tag', {path:'t/:tag_id', resetNamespace: true}, function(){
    this.route('index', {path: '/'});
  });
  this.route('privacy', {path: 'datenschutz'});
  this.route('imprint', {path: 'impressum'});
});

export default Router;
