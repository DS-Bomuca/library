import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FormUserComponent extends Component {
    @service store;

    //Save author function
    @action
    saveAuthor(save) {

        if (this.emptyValues()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Empty values',
            })
        }

        try {
            save();
            
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved'
            });
        } catch(error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    }

    //Validate empty values
    emptyValues() {
        if (
            this.args.author.firstName  &&
            this.args.author.lastName  &&
            this.args.author.nationality &&
            this.args.author.birthDate
        ) {
            return false;
        }

        return true;
    }
}
