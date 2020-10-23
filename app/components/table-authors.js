import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TableAuthorsComponent extends Component {
    @service store;

    @tracked query = '';

    //Delete a author
    @action
    deleteAuthor(id) {
        let author = this.store.peekRecord('author', id);
        
        author.destroyRecord();

        author.save();
    }
}
