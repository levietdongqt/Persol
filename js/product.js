app.controller('product', function ($scope, $routeParams, $localStorage) {
    var ID_Product = parseInt($routeParams.id);
    $scope.index = $scope.datalist.findIndex(item => item.Img.ID === ID_Product);
console.log(ID_Product)
    $scope.img = $scope.datalist[$scope.index].Img.Src.img2; //get big image on first load in product.html
    $scope.small_img = function (img) {     //get big image when click on small image
        $scope.img = img;
    }
    // The product_price use to calculate price in product.html
    $scope.product_price = function (price, number1) {
        $scope.price = price * number1;
        console.log($scope.price);
        $scope.show_price = true;
    }

    $scope.add_cart = function (index, number) {
        console.log("Index in datalist: " + index);
        // lọc sản phẩm mới thêm vào đã có sẵn trong datacart hay k?
        let y = $scope.datacart.findIndex(item => item.ID === $scope.datalist[index].Img.ID);
        console.log("index of new item in datacart: " + y);
        if (y == -1 && $scope.show_price == true) {
            alert("The item has been added to the cart. \n Please check your cart!! \n Thank you!! ");
            $scope.datacart.push($scope.datalist[index].Img);
            let x = $scope.datacart.length - 1; //x là index của sản phẩm mới thêm vào cart ( luôn là phần tử cuối mảng  )
            console.log("Last index of datacart: " + x);
            $scope.datacart[x].Quantity = number;
            $scope.datacart[x].Total = number * $scope.datacart[x].Price;
            $localStorage.local_data1 = $scope.datacart;
            $scope.calculate_sum();
            console.log("sum" + $localStorage.sum1)
            console.log($localStorage.local_data1);
        }
        else {
            if ($scope.show_price) {
                alert("The quanitity has been changed inside the cart. \n Please check your cart!! \n Thank you!! ");
                $scope.datacart[y].Quantity += number;
                $scope.datacart[y].Total = $scope.datacart[y].Quantity * $scope.datacart[y].Price;

                $localStorage.local_data1 = $scope.datacart;
                $scope.calculate_sum();
            }
            else
                alert("Please choose quanitity!!!");
        }

    }
})