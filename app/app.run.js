app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeSuccess',function(){
        $("html, body").animate({ scrollTop: 0 }, 200);
    })
}]);
