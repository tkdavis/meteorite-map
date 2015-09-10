import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    // Changed so address looks like www.someaddresshere.com instead of
    // www.someaddresshere.com/index
    // resetNameSpace removed because we probably don't even need it
    // but mostly because I couldn't figure out how to get it to work
    // again.
    this.route('index', { path : '/' });
});

export default Router;
