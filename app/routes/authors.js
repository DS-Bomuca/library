import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorRoute extends Route {

  //Return a authors list
  async model() {
    return this.store.findAll('author');
  } 

}