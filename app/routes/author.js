import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorRoute extends Route {

  @service store;

  //Return a author 
  async model(params) {
    let author = await this.store.findRecord('author', params.id, {
      include: 'books'
    }); 
    
    let response = await fetch(`/api/authors/${params.id}.json`);
    let { included } = await response.json();
    

    let books = included.map(book => {
      let { attributes } = book;
      let { id } = book;

      return { id, ...attributes};
    });

    return { author, books };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    
    controller.set(
      'name', `${model.author.firstName} ${model.author.lastName}`
    );
  }
}