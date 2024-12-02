(function() {

    var app = angular.module('orderForm', []);

    app.controller('OrderFormController', function($scope, $filter) {
        $scope.selectedProducts = [];
        $scope.setSelectedProducts = function() {
            var selectedProducts = [];
            angular.forEach($scope.products, function(data) {
                var product = {title: data.title, variation: []};
                angular.forEach(data.variation, function(variation) {
                    if (variation.selected) {
                        product.variation.push(variation);
                    }
                });

                if (product.variation.length > 0) {
                    selectedProducts.push(product);
                }
            });
            $scope.selectedProducts = selectedProducts;
        }

        $scope.sumRows = function(options) {
            var total = 0;
            for (var i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    total +=  parseFloat(options[i].price) * parseInt(options[i].quantity);
                }
            }
            
            $scope.setSelectedProducts();
            $scope.sumSelectedProducts();
            return total;
        }
        
        $scope.sumSelectedProducts = function() {
            var grandTotal = 0;
            for (var i = 0; i < $scope.selectedProducts.length; i++) {
                for (var j = 0; j < $scope.selectedProducts[i].variation.length; j++) {
                    grandTotal += $scope.selectedProducts[i].variation[j].price
                        * parseInt($scope.selectedProducts[i].variation[j].quantity);
                }
            }
            return grandTotal;
        } 
        
        $scope.products  = [
            {
                "title":"El Hombre Tequila",
                "variation": [
                    { "name": "700 ml", "price":270.00 +"\xa0\xa0"},
                ]
            },  
            {
                "title":"Fundador Double Light",
                "variation": [
                    { "name": "700 ml ", "price":349.00 +"\xa0\xa0"},
                    { "name": "1Litter", "price":520.00 +"\xa0\xa0"}
                ]
            },
            {
                "title":"Johnnie Walker Black Label",
                "variation": [
                    { "name": "700 ml", "price":1340.00 },
                    { "name": "1Litter", "price":1499.00 }
                ]
            },
            {
                "title":"Smirnoff Red Vodka",
                "variation": [
                    { "name": "700 ml", "price":649.00 +"\xa0\xa0"},
                    { "name": "1Litter", "price":899.00 +"\xa0\xa0"}
                ]
            },
            {
                "title":"The Bar Pink Gin",
                "variation": [
                    { "name": "700 ml", "price": 199.00 +"\xa0\xa0"},
                ]
            },
            {
                "title":"Jose Cuervo Gold",
                "variation": [
                    { "name": "700 ml", "price":949.00 +"\xa0\xa0"},
                    { "name": "1Litter", "price":1240.00 }
                ]
            },
            {
                "title":"Singleton Single Malt Scotch Whisky",
                "variation": [

                    { "name": "1Litter", "price":3690.00 }
                ]
            },
            {
                "title":"Henessy VS",
                "variation": [
                    { "name": "700 ml", "price":2399.00 },
                ]
            },
            {
                "title":"Bacardi Black",
                "variation": [
                    { "name": "750 ml", "price":1100.00 },
                ]
            },
            {
                "title":"Jack  Daniels Whiskey",
                "variation": [
                    { "name": "700 ml", "price":1250.00 },
                    { "name": "1Litter", "price":1680.00 }
                ]
            },
            {
                "title":"Beefeater London Dry Gin",
                "variation": [
                    { "name": "700 ml", "price":849.00 +"\xa0\xa0"},
                ]
            },
            {
                "title":"Don Papa Rum 10 Years Old",
                "variation": [
                    { "name": "700 ml", "price":3390.00 },
                ]
            },
            {
                "title":"Lakan Gold",
                "variation": [
                    { "name": "750 ml", "price":4699.00 },
                ]
            },
            {
                "title":"Manaille Liqueur De Calamansi",
                "variation": [
                    { "name": "750 ml", "price":949.00 +"\xa0\xa0"},
                ]
            },

            
        ] 
    } );
} )(); 