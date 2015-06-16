var app = angular.module('myapp', []);

//var base_url = 'http://audiohook.herokuapp.com';
var base_url = 'http://localhost:3000';

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'partials/home.html',
            controller: 'home',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/last-orders',{
            templateUrl: 'partials/orders/last-orders.html',
            controller: 'last-orders',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/orders-library',{
            templateUrl: 'partials/orders/orders-library.html',
            controller: 'orders-library',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/library',{
            templateUrl: 'partials/orders/library.html',
            controller: 'library',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/menu-types',{
            templateUrl: 'partials/menu/menu-types.html',
            controller: 'menu-types',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/menu-items/:menu_type_id',{
            templateUrl: 'partials/menu/menu-items.html',
            controller: 'menu-items',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/menu-additions/:menu_type_id/:menu_item_id',{
            templateUrl: 'partials/menu/menu-additions.html',
            controller: 'menu-additions',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/cart',{
            templateUrl: 'partials/cart.html',
            controller: 'cart',
            resolve: { resolvedVal: function(){ return; }}}
    )
        .when('/status',{
            templateUrl: 'partials/status.html',
            controller: 'status',
            resolve: { resolvedVal: function(){ return; }}}
    ).otherwise({redirectTo: '/home'});

}]);