var app = angular.module("myApp", [
    "ngRoute",
    "ngStorage",
    'ui.bootstrap'

]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "intro.html" })
        .when("/list/:keyWord", { templateUrl: "list-products.html" })
        .when("/product/:id", { templateUrl: "product.html" })
        .when("/cart", { templateUrl: "cart.html" })
        .when("/about", { templateUrl: "about-us.html" })
        .when("/compare", { templateUrl: "compare.html" })
        .when("/contact", { templateUrl: "contact.html" })
        .otherwise({ redirectTo: "/" });

});
app.controller('myctr', function ($scope, $http, $localStorage, $location) {

    $http.get('json/data-main.json')
        .then(function (response) {
            var data = response.data;
            $scope.datalist = data;
        });
    $http.get('json/brand.json')
        .then(function (response) {
            var data = response.data;
            $scope.databrand = data;
        });
    $http.get('json/banner.json')
        .then(function (response) {
            var data = response.data;
            $scope.databanner = data;
        });
    // Hàm dùng cho menu
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.activePath = $location.path();
        console.log($location.path());
    })

    $scope.show_cart1 = function () {
        $scope.calculate_sum();
        if ($scope.sum == 0)
            $scope.show_cart = false;
        else
            $scope.show_cart = true;
        console.log("show_cart: " + $scope.show_cart);
    }
    //start pagination
    $scope.itemsPerPage = 8;
    $scope.currentPage = 1;
    $scope.pagination_list = function (currentPage) {
        $scope.filtered1 = $localStorage.filtered1;
        $scope.pagination_number = $scope.filtered1.length;
        // console.log("page: " + currentPage)        
        var index_begin = ((currentPage - 1) * $scope.itemsPerPage);
        var index_end = index_begin + $scope.itemsPerPage;
        $scope.data_pagination = $scope.filtered1.slice(index_begin, index_end);
    }; //end pagination

    /*---> cart.html <----*/
    // The calculate_sum use to calculate prices of all procduct in cart.html
    $scope.calculate_sum = function () {
        $scope.sum = 0;
        $scope.datacart = $localStorage.local_data1
        console.log($scope.datacart)
        angular.forEach($scope.datacart, function (value, key) {
            $scope.sum += value.Total;
        })
        $localStorage.sum1 = $scope.sum;
        console.log($scope.sum)
    }
    /*--->End cart.html <----*/

    /*---> About-us.html <----*/
    $scope.menu_ab = function (ab) {
        $scope.ab = ab;
        $scope.show_about = false;

        $scope.show_Policy = false;
        $scope.show_Terms = false;
        $scope.show_GUARANTEE = false;
        $scope.show_Payments = false;

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
    }
    /*--->  <----*/

});


