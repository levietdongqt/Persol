app.controller('listProduct', function ($scope, $routeParams, $localStorage, $filter) {
    var info = $routeParams.keyWord;
    if (info == 'Search')  // This mean: user click on search
    {
        info = undefined;   //info is undefined then the absolute filter returns the same value as the original array
        $scope.show_banner = false;
        console.log("click search")

    }
    else  // This mean: user click on menu
    {
        $scope.show_banner = true;
        console.log("no search")
    }
    // $localStorage.show_banner = $scope.show_banner;
    $scope.filtered = $filter('filter')($scope.datalist, info, true); //absolute filter in datalist
    $scope.filtered1 = $filter('filter')($scope.filtered, $scope.search);  //filter tương đối cho ô tìm kiếm
    $localStorage.filtered1 = $scope.filtered1;
    if ($scope.filtered1 == "") {
        $scope.noResult = true;
    }
    else
        $scope.noResult = false;
    $scope.load = info;   //use to show key-word and filter for banner in listproduct.html
    $scope.show_Search = $scope.search;    //Use to show key-word search in listproduct.html
    //call  funtion for pagination 
    $scope.pagination_list(1);

})