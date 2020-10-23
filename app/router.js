import EmberRouter from '@ember/routing/router';
import config from 'library/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {

  //Routes for authors resource
  this.route('authors');
  this.route('author',  { path: 'authors/:id' });
  
});
