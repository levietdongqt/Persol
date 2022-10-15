app.controller('about', function ($scope, $localStorage,$routeParams) {
    var ab = $routeParams.keyWord;
    console.log(ab)
    if (ab == "about-us")
            $scope.show_about = true;
        if (ab == "Policy")
            $scope.show_Policy = true;
        if (ab == "Terms")
            $scope.show_Terms = true;
        if (ab == "GUARANTEE")
            $scope.show_GUARANTEE = true;
        if (ab == "Payments")
            $scope.show_Payments = true;
            console.log( $scope.show_about)
            console.log( $scope.show_Policy)
            console.log($scope.show_Terms)
            console.log($scope.show_GUARANTEE)
            console.log($scope.show_Payments)
            console.log("có chạy")

})