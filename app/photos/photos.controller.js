app.controller('photosController', ['$scope', function($scope) {

    $scope.photos1 = [];
    $scope.photos2 = [];
    $scope.photos3 = [];

    $scope.slides = []

    for(var i = 1; i < 10; i++) {
        var num = (i > 9) ? '0' + i : '00' + i;
        $scope.photos1.push({
            filename: 'assets\\img\\TIMG\\tn_' + num + '.JPG',
            target: '#' + num
        });
    }

    for(var i = 10; i < 19; i++) {
        var num = (i > 9) ? '0' + i : '00' + i;
        $scope.photos2.push({
            filename: 'assets\\img\\TIMG\\tn_' + num + '.JPG',
            target: '#' + num
        });
    }

    for(var i = 19  ; i < 28; i++) {
        var num = (i > 9) ? '0' + i : '00' + i;
        $scope.photos3.push({
            filename: 'assets\\img\\TIMG\\tn_' + num + '.JPG',
            target: '#' + num
        });
    }

    for(var i = 1  ; i < 28; i++) {
        var num = (i > 9) ? '0' + i : '00' + i;
        $scope.slides.push('slide' + num);
    }

}]);
