import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
    
    @attr firstName;
    @attr lastName;
    @attr('string', { defaultValue: "/assets/image/default.png" }) photo ;
    @attr nationality;
    @attr birthDate;

    @hasMany('book', { async: true }) books;
    
}
