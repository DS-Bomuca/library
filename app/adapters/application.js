import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'library/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
    primaryKey = 'id';
    //Namespace for REST request
    namespace = config.APP.namespace;
    //Host for REST request
    host = config.APP.host;
}
