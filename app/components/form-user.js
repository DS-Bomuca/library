import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FormUserComponent extends Component {
    @service store;
    
    @tracked firstName = (this.args.author) ? this.args.author.firstName : ""; 
    @tracked lastName = (this.args.author) ? this.args.author.lastName : "";
    @tracked nationality = (this.args.author) ? this.args.author.nationality : "";
    @tracked birthDate = (this.args.author) ? this.args.author.birthDate : "";

    @action
    setSelection(value) {
        this.nationality = value;
    }

    //Save author function
    @action
    saveAuthor() {

        if (this.emptyValues()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Empty values',
            })
        }

        try {
            let author = this.store.createRecord('author', {
                id : Math.random() * 100,
                firstName: this.firstName,
                lastName: this.lastName,
                nationality: this.nationality,
                birthDate: this.birthDate
            });
    
            author.save();
    
            this.clearValue();
            
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

    //Clear the form author
    clearValue() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.nationality = "";
        this.birthDate = "";
    }

    //Validate empty values
    emptyValues() {
        if (
            this.firstName &&
            this.lastName &&
            this.nationality &&
            this.birthDate
        ) {
            return false;
        }

        return true;
    }
}
