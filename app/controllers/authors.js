import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthorsController extends Controller {

    @tracked author = {};

    @action 
    setAuthor(model) {
        this.author = model;
    }

    @action 
    update() {
        this.author.save();

        this.author = {};
    }

    @action
    save() {
        let author = this.store.createRecord('author', { 
            id : Math.round(Math.random() * 10), 
            ...this.author
        });
        
        author.save();

        this.author = {};
    }

}
