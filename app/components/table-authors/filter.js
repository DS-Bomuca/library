import Component from '@glimmer/component';

export default class TableAuthorsFilterComponent extends Component {
    //Return the filtered authors list
    get results() {
        
        let { authors, query } = this.args;
    
        if (query) {
            authors = authors.filter(author => author.firstName.toLowerCase().includes(query.toLowerCase()));
        }
    
        return authors;
    }
}
