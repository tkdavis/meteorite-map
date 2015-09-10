import Ember from 'ember';

export default Ember.Component.extend({
    map : document.getElementsByClassName('map'),
    'latitude' : 37.577464,
    'longitude' : -97.321988,
    initMap : function() {
        var options = {
            center : new window.google.maps.LatLng(
                this.get('latitude'),
                this.get('longitude')
                ),
            zoom : 3
        };
        new window.google.maps.Map(this.map, options);
    }.on('didInsertElement')
});