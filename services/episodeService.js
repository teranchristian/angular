var app = angular.module('app', []);

app.service('episodeService', function(){
    
    var fac = {};
    this.getEpisodes = function() {
        fac.users = ['John', 'James', 'Jake'];
        return fac;
    };

});
