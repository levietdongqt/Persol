app.controller('compare', function ($scope){
    $scope.get_brand_left = function () {
        let e = document.getElementById('brand');

        $scope.compare = e.options[e.selectedIndex].value;
        console.log( $scope.compare)
        $scope.show_compare = false;
    }
    $scope.get_item_left = function () {
        let e = document.getElementById('item');
        $scope.item = e.options[e.selectedIndex].value;
        $scope.check_compare = true;
    }
    $scope.filter_item_left = function () {
        if ($scope.check_compare == true) {
            $scope.show_compare = true;
        }
    }
    //The right side
    $scope.get_brand_right = function () {
        let e = document.getElementById('brand1');
        $scope.compare1 = e.options[e.selectedIndex].value;
        $scope.show_compare1 = false;
    }
    $scope.get_item_right = function () {
        let e = document.getElementById('item1');
        $scope.item1 = e.options[e.selectedIndex].value;
        $scope.check_compare1 = true;
    }
    $scope.filter_item_right = function () {
        if ($scope.check_compare1 == true) {
            $scope.show_compare1 = true;
        }
    }
})