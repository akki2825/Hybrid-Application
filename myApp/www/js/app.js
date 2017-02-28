// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers', 'ngCordova'])

.run(function($ionicPlatform, $location, $ionicHistory) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $ionicPlatform.registerBackButtonAction(function() {
//var path = $location.path()
  if ($location.path() === "/home" || $location.path() === "/merchant" || $location.path() === "/intro" || $location.path() ==="/verify" || $location.path() ==="/merchant_otp" || $location.path() === "/user_otp") {
    navigator.app.exitApp();
  }
  else {
    $ionicHistory.goBack();
    //navigator.app.goBack();
    
  }
}, 100);
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the home can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'introCtrl'
  })

  .state('merchant', {
  url: '/merchant',
  templateUrl: 'templates/merchant.html',
  controller: 'merchantCtrl'
})
  .state('merchant_verify',{
    url:"/merchant_otp",
    cache: false,
    templateUrl: "templates/merchant_verify.html",
    controller: 'merchantVerifyCtrl'
  })
  
.state('verifynum', {
url: '/verify',
templateUrl: 'templates/verifynum.html',
controller: 'verifyCtrl'
})
.state('user_verify',{
    url: "/user_otp",
    cache:false,
    templateUrl: "templates/user_verify.html",
    controller: 'userVerifyCtrl'
  })

.state('home', {
  url:'/home',
  templateUrl:'templates/home.html',
  controller: 'homeCtrl'
})


  .state('delivered', {
    url: "/delivered",
    cache:false,
    templateUrl: "templates/remaining.html",
    controller: 'deliverCtrl'
  })
  .state('remaining', {
    url: "/remaining",
    cache:false,
    templateUrl: "templates/remaining.html",
    controller: 'remainingCtrl'
       
    })
  .state('totalamt', {
      url: "/totalamt",
      cache:false,
      templateUrl: "templates/totalamt.html",
      controller: 'totalamtCtrl'
      
    })
  .state('contact',{
    url:"/contact",
    cache: false,
    templateUrl: "templates/contact.html",
    controller: "contactCtrl"
  })
  .state('terms',{
    url:"/terms",
    cache: false,
    templateUrl: "templates/terms.html"
  })
  .state('privacy',{
    url:'/privacy',
    cache:false,
    templateUrl: "templates/privacy.html"
  })
  .state('faq',{
    url: '/faq',
    cache: false,
    templateUrl: "templates/FAQs.html"
  })
  .state('mapscreen',{
    url: '/maps',
    cache: false,
    templateUrl: "templates/mapscreen.html",
    controller: 'MapScreenController'
  })
  .state('orders', {
      url: '/orders',
      templateUrl: 'templates/pending_orders.html',
      controller: 'ordersCtrl'
      
  })
  
    $urlRouterProvider.otherwise('/intro');
});  