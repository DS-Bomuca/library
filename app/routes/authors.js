import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class AuthorRoute extends Route {
  
  @service store;
  
  //Return a authors list
  async model() {
    return this.store.findAll('author');
  } 

}