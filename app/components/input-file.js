import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputFileComponent extends Component {

    @tracked file = (this.args.photo) ? this.args.photo : "/assets/image/default.png";

    //Show uploaded photo
    @action
    changedFile() {
        let fileInput = document.getElementById('inputFile').files[0]; 
        const reader = new FileReader;

        reader.onload = () => {
            this.file = reader.result;
        }
        
        reader.readAsDataURL(fileInput);
    }
    
}
