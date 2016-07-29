app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html'
        })
        .state('story', {
            url: '/story',
            templateUrl: 'app/story/story.html'
        })
        .state('details', {
            url: '/details',
            templateUrl: 'app/wedding/details.html'
        })
        .state('party', {
            url: '/party',
            templateUrl: 'app/wedding/party.html'
        })
        .state('accommodations', {
            url: '/accommodations',
            templateUrl: 'app/travel/accommodations.html'
        })
        .state('transportation', {
            url: '/transportation',
            templateUrl: 'app/travel/transportation.html'
        })
        .state('goodtoknows', {
            url: '/goodtoknows',
            templateUrl: 'app/travel/goodtoknows.html'
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'app/photos/photos.html',
            controller: 'photosController'
        })
});
