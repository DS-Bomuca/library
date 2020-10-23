import Model, { attr, belongsTo} from '@ember-data/model';

export default class BookModel extends Model {
    @attr name;
    @attr gender;

    @belongsTo('author', { async: true }) author;
}
