app.controller('cart', function ($scope, $localStorage) {
    //Hàm Cart_submit 
    $scope.cart_submit = function () {
        alert("We have received a response from you. \n We will respond to your email as soon as possible. !");
        $scope.deleteCart();
        location.replace("index.html")

    }
    //The change_price adjusts price when change quantity in cart
    $scope.change_price = function (index) {
        $scope.datacart[index].Total = $scope.datacart[index].Quantity * $scope.datacart[index].Price;
        console.log("index of current item in datacart:" + index);
        $scope.calculate_sum();
    }

    $scope.deleteRow = function (i) {
        $scope.datacart.splice(i, 1);
        $scope.calculate_sum();
    };

    $scope.deleteCart = function () {
        $localStorage.local_data1 = [];
        $scope.datacart = [];
        $localStorage.sum1 = 0;
        $scope.sum = 0;
    }
})
