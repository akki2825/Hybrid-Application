var delivery = angular.module('starter.controllers',['ionic', 'ngCordova', 'ionic-datepicker'])
var merchantNum;
var usernum;
var userToken;
var merchantToken;
var merchantOtp;
var deliveryboynum;
var deliveryToken;
var deliveryOtp;
var lat;
var long;
var uniqueId1 = "1";
var uniqueId2 = "2";
var uniqueId3 = "3";
var uniqueId4 = "4";
var uniqueId5 = "5";
var uniqueId6 = "6";
var uniqueId7 = "7";
var uniqueId8 = "8";
var uniqueId9 = "9";
var fromDate;
var toDate;
var pending;
var delivered;
var amount;
var savedData;
var apis = "https://stapletoday-sushantlp-2.c9users.io/api/v1/deliveryboy/";




            delivery.factory('order', function order() {
                 return { 'total_orders':'',
                          'pending':'',
                          'delivered':[],
                          'delivery_pending':'',
                        };
                        });

delivery.controller('introCtrl',function($scope,$state, $ionicPopup, $timeout,$cordovaGeolocation,$http,order){
  
  $scope.order = order;
    var geoSettings = {frequency: 30000, timeout: 100000,enableHighAccuracy: false};
          var geo = $cordovaGeolocation.getCurrentPosition(geoSettings);
          geo.then(function (position) {
                  $scope.latitude = position.coords.latitude;
                  $scope.longitude = position.coords.longitude;
                  lat = $scope.latitude;
                  long = $scope.longitude;
                  window.localStorage.setItem(uniqueId5, lat+'');
                  window.localStorage.setItem(uniqueId6, long+'');


                  console.log(lat);
                  console.log(long);
              },
              function error(err) {
                  $scope.errors = err;
              }
          );
          merchantNum = window.localStorage.getItem(uniqueId1);
          console.log(merchantNum);
          console.log(uniqueId1);

          // merchantOtp = window.localStorage.getItem(uniqueId2);
          merchantToken = window.localStorage.getItem(uniqueId2);
          console.log(merchantToken);
          console.log(uniqueId2);
          usernum = window.localStorage.getItem(uniqueId3);
          console.log(usernum);
          userToken = window.localStorage.getItem(uniqueId4);
          console.log(userToken);
          lat = window.localStorage.getItem(uniqueId5);
          long = window.localStorage.getItem(uniqueId6);


// console.log(typeof merchantNum == null);
// console.log(typeof merchantNum == 'undefined');
// console.log(typeof merchantNum ==  '');
//

        // if((typeof merchantNum == null) || ( typeof merchantNum == 'undefined') || (merchantNum == '')) {
        //   console.log(merchantNum);
        //       $state.go('merchant');
        //
        //     }


        if((merchantNum!== null) && usernum!==null) {
        
                      //  console.log(data);
                      //  console.log("this is get api call");
                      // //  $scope.orders = data;

                      //  $scope.order.total_orders = data.delivery_total_order_detail;
                      //  console.log($scope.order.total_orders);
                      //  $scope.order.pending = data.delivery_total_order_detail;
                      //  console.log($scope.order.pending);
                      //  $scope.order.delivery_pending = data.delivery_order_pending_reason;


                      //  console.log($scope.order);
                       $state.go('home');

                  
            }
            else {
              $state.go('merchant');
              console.log("intro");
              // $state.go('intro');
            }
    //alert(merchantNum);
        //rating.getRating()
                // then() called when son gets back
  })

delivery.controller('merchantCtrl', function($scope, $ionicPopup, $timeout,$http,$cordovaToast,$ionicLoading,$state, $ionicPlatform) {
    $scope.user = {};  
  $scope.terms = function() {
    $state.go('terms');
  }
  $scope.privacy = function() {
    $state.go('privacy');
  }

     $scope.SendOTP = function (data) {
      console.log($scope.user.mobileNumber)
      $scope.mobilenum = $scope.user.mobileNumber;
//        console.log($scope.user.checked)
// if($scope.user.checked == false){
//   alert("check")
// }

       if(($scope.user.mobileNumber == "") || ($scope.user.mobileNumber == undefined) ||
        ($scope.user.mobileNumber.length < 10))
       {
         alert("enter a valid 10 digit mobile number");
       }
       else {
        //   if(!document.getElementById('Delete').checked){
        //      
        // }
        if($scope.user.checked == false){
           alert("Agree to the Terms and Conditions")
        }else{

        
    //alert(merchantNum);
    // $timeout(function () {

      console.log($scope.referal)


     merchantNum=$scope.mobilenum;
     console.log(merchantNum);
      //window.localStorage.setItem(uniqueId1, merchantNum+'');
     merchantToken = merchantNum.substr( 6 );
    console.log(merchantToken);
     $scope.token = merchantToken;
       // window.localStorage.setItem(uniqueId2, merchantToken+'');
    //console.log($scope.referal);
    $ionicLoading.show({
         content: 'Loading',
         animation: 'fade-in',
         showBackdrop: true,
         maxWidth: 200,
         showDelay: 0
       });

     $http.post(apis+'merchantverify',{merchant_mobile:$scope.mobilenum})
    .success(function (data, status, headers, config) {
          console.log(data);
          $ionicLoading.hide();
           console.log(data.message.staple.message);
          if(data.message.staple.message == "Message Sent")
            {

              //$scope.pop();
              $state.go('merchant_verify');
            }else{
              alert("please enter valid merchant number");
              $cordovaToast.showLongBottom('please enter a valid merchant number').then(function(success) {
                // success
              }, function (error) {
                // error
              });
            }
          }).error(function (data, status, header, config) {
                 alert("We are Sorry! Please come again");
                ionic.Platform.exitApp();
          });
    // },5000);
  }
}
}
})
 //$scope.pop = function(){
//   $scope.data = {};
      
//   // An elaborate, custom popup
//   var myPopup = $ionicPopup.show({
//     template: '<input type="text" class="depth" text-align="center" ng-model="data.wifi">',
//     title: 'Enter Otp',
//     subTitle: 'Please Enter Otp sent to your phonenumber',
//     scope: $scope,
//     buttons: [
//       { text: 'Cancel' },
//       {
//         text: '<b>Confirm</b>',
//         type: 'button-positive',
//         align: 'center',
//         onTap: function(e) {
//           if (!$scope.data.wifi) {
//             //don't allow the user to close unless he enters wifi password
//             e.preventDefault();
//           } else {
//             return $scope.data.wifi;
//           }
//         }
//       }
//     ]
//   });

//   myPopup.then(function(res) {
//     console.log('Tapped!', res);
  

//     if(res == undefined || res == ''){
//       //do nothing
//     }else{
//       $ionicLoading.show({
//         content: 'Loading',
//         animation: 'fade-in',
//         showBackdrop: true,
//         maxWidth: 200,
//         showDelay: 0
//       });
//         $scope.otp(res);
//     //  $ionicLoading.show({
//     //     content: 'Loading',
//     //     animation: 'fade-in',
//     //     showBackdrop: true,
//     //     maxWidth: 200,
//     //     showDelay: 0
//     //   });
//     // $state.go('verifynum');
//   }
//   });

  // $timeout(function() {
  //    myPopup.close(); //close the popup after 3 seconds for some reason
  // }, 3000);

//}
delivery.controller('merchantVerifyCtrl', function($scope, $state, $ionicPlatform, $ionicLoading, $http){


$scope.merchantOTP = function(data){

  console.log(data);
  var otp = data;
  $ionicLoading.show({
         content: 'Loading',
         animation: 'fade-in',
         showBackdrop: true,
         maxWidth: 200,
         showDelay: 0
       });
  $http.post(apis+'verifyotp',{merchant_mobile:merchantNum,otp:otp})
 .success(function (data, status, headers, config) {
      $ionicLoading.hide();
       console.log(data);
      if(data.message){
        if(data.message.code === 666){
              window.localStorage.setItem(uniqueId1, merchantNum+'');
              console.log(uniqueId1);
              window.localStorage.setItem(uniqueId2, merchantToken+'');
              console.log(uniqueId2);
                console.log("correct")
                  
    $state.go('verifynum');
              
        }
      }else if(data.error){
      
         alert("Incorrect OTP");
         $state.go('merchant_verify');
         console.log("not successful, error");
         }
  //        $cordovaToast.showLongBottom('Here is a message').then(function(success) {
  //
  // }, function (error) {
  //   // error
  // });





             })
          .error(function (data, status, header, config) {
              alert("We are Sorry! Please come again");
             ionic.Platform.exitApp();
                });
}

})


delivery.controller('verifyCtrl', function($scope, $ionicPopup, $timeout,$http,$cordovaToast,$ionicLoading,$state,order) {
$scope.order = order;
  
     $scope.SendOTP = function (data) {
       $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });

       $scope.mobilenum2 = data;
      var str=$scope.mobilenum2.length;
       if(($scope.mobilenum2 == "") || ($scope.mobilenum2 == "null") ||
        (str < 10))
       {
         alert("enter the valid 10 digit mobile number");
       }
       else {
        

    //alert(merchantNum);
    // $timeout(function () {

      console.log($scope.referal)


     usernum=$scope.mobilenum2;
     window.localStorage.setItem(uniqueId3,usernum+'');

     console.log(usernum);

    userToken = usernum.substr( 6 );
    console.log(userToken);

     $scope.token = userToken;
       // window.localStorage.setItem(uniqueId4,userToken+'');
    //console.log($scope.referal);
    
    console.log(lat);
    console.log(long);

     $http.post(apis+'deliveryboyverify',{delivery_mobile: usernum,merchant_mobile: merchantNum,lat:lat,long:long})
    .success(function (data, status, headers, config) {
          console.log(data);

           console.log(data.message.staple.message);
          if(data.message.staple.message == "Message Sent")
            {
              $ionicLoading.hide();
              //$scope.pop();

              $state.go('user_verify');
            }else{
              alert("please enter valid merchant number");
              
              $cordovaToast.showLongBottom('please enter valid merchant number').then(function(success) {
                // success
              }, function (error) {
                // error
              });
            }
          }).error(function (data, status, header, config) {
                 alert("We are Sorry! Please come again");
                ionic.Platform.exitApp();
          });
    // },5000);
  }
}
})
// $scope.pop = function(){
//   $scope.data = {};

//   // An elaborate, custom popup
//   var myPopup = $ionicPopup.show({
//     template: '<input type="password" class="depth" align="center" ng-model="data.wifi">',
//     title: 'Enter Otp',
//     subTitle: 'Please Enter Otp sent on your phonenumber',
//     scope: $scope,
//     buttons: [
//       { text: 'Cancel' },
//       {
//         text: '<b>Confirm</b>',
//         type: 'button-positive',
//           align: 'center',
//         onTap: function(e) {
//           if (!$scope.data.wifi) {
//             //don't allow the user to close unless he enters wifi password
//             e.preventDefault();
//           } else {
//             return $scope.data.wifi;
//           }
//         }
//       }
//     ]
//   });

//   myPopup.then(function(res) {
//     console.log('Tapped!', res);
//     $scope.otp(res);
//      $ionicLoading.show({
//         content: 'Loading',
//         animation: 'fade-in',
//         showBackdrop: true,
//         maxWidth: 200,
//         showDelay: 0
//       });
//     // $state.go('verifynum');
//   });

//   // $timeout(function() {
//   //    myPopup.close(); //close the popup after 3 seconds for some reason
//   // }, 3000);

// }
delivery.controller('userVerifyCtrl', function($scope, $state, $ionicPlatform, $http, $ionicLoading){

$scope.UserOtp = function(data){
  console.log(data);
  var otp = data;
  
       $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
  $http.post(apis+'verifyotp',{delivery_mobile:usernum,otp:otp})
 .success(function (data, status, headers, config) {
       console.log(data);
       $ionicLoading.hide();

     if(data.message.staple.system == 883)
       {
         
          window.localStorage.setItem(uniqueId3,usernum+'');
          window.localStorage.setItem(uniqueId4,userToken+'');
           $state.go('home');


        //  $cordovaToast.showLongBottom('successful').then(function(success) {
        //    // success
        //  }, function (error) {
        //    // error
        //  });
       }else{
         alert("Incorrect OTP");
         $scope.pop();
        //  $cordovaToast.showLongBottom('Here is a message').then(function(success) {
        //  }, function (error) {
        //     // error
        //   });

}

}).error(function (data, status, headers, config) {
              alert("We are Sorry! Please come again");
             ionic.Platform.exitApp();
                });
}

})

delivery.controller('homeCtrl', function($scope, $cordovaNetwork,$rootScope, $ionicPopup, $timeout,order,$http,$cordovaToast,$ionicLoading,$state,$ionicSideMenuDelegate, $cordovaNetwork, ordersService) {
  
  //document.addEventListener("deviceready", function () {
 // Check for network connection
    //if(window.Connection) {
      alert('hey');
      usernum = window.localStorage.getItem(uniqueId3);
      console.log(usernum);
      userToken = window.localStorage.getItem(uniqueId4);
      console.log(userToken);

  //   document.addEventListener("deviceready", function () {

  //   var type = $cordovaNetwork.getNetwork()

  //   var isOnline = $cordovaNetwork.isOnline()

  //   var isOffline = $cordovaNetwork.isOffline()


  //   // listen for Online event
  //   $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
  //     var onlineState = networkState;
  //     alert('online')
  //   })

  //   // listen for Offline event
  //   $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
  //     var offlineState = networkState;
  //   })

  // }, false);

      $scope.allorders = function(){
      $http.get(apis + 'deliveryboyorder?mobile='+usernum+'&token='+userToken)
           .success(function (data, status, headers, config) {
              // console.log(data);
              $scope.orders = data;
              console.log($scope.orders);
               $scope.orders.pending_orders = data.Pending_Order;
               pending = $scope.orders.pending_orders;
               
               $scope.orders.delivered_orders = data.Delivered_Order;
               delivered = $scope.orders.delivered_orders;
               
               $scope.orders.amount = data.Delivered_Amount;
               amount = $scope.orders.amount;
               $scope.amount = amount;
               

               // window.localStorage.setItem('details', JSON.stringify(data));
               // console.log(details);
               console.log(pending);
               window.localStorage.setItem('pending', JSON.stringify(data.Pending_Order.Total_Pending_Order));
               console.log(pending);

               window.localStorage.setItem('delivered', JSON.stringify(data.Delivered_Order.Total_Delivered_Order));
               console.log(delivered);
               window.localStorage.setItem('amount', JSON.stringify(data.Delivered_Amount));
               console.log(amount);
               // console.log($scope.orders.pending_orders);
              $scope.num = $scope.orders.pending_orders.length;

              console.log($scope.num);
              $scope.orders.delivered_orders = data.Delivered_Order.Total_Delivered_Order;
              delivered = $scope.orders.delivered_orders;

              // window.localStorage.setItem(uniqueId8,delivered+'');
              // console.log(uniqueId8);
              // $scope.num1 = $scope.orders.delivered_orders.length;
              // $scope.num2 = $scope.orders.amount.length;

              ordersService.setPending(pending);

              ordersService.setDelivered(delivered);
              console.log();

              ordersService.setAmount(amount);
              console.log(ordersService.getAmount())              
              //alert($scope.num1);

              // console.log(data.Pending_Order);              //$scope.orders.pending = data.Pending_Order;
              // $scope.orders.total_orders = data.Delivered_Order;          

              // alert($scope.order.total_orders);
              // $scope.num = data.Pending_Order.length;
              // $scope.num1 = data.Total_Pending_Order.length;
              console.log($scope.num);
              // $scope.num2 = $scope.order.Total_Pending_Order.length;
              // $scope.num3 = $scope.order.Delivered_Amount.length;
              console.log($scope.num1)     
           })
           .error(function (data, status, header, config) {
               alert("some error has occourd")
           });


      
  }
  $scope.allorders();
    //you can log your connection as well, whether it is internet, wifi and so on.In this case you are checking for no connection
// alert(navigator.connection.type);

      // if(navigator.connection.type == Connection.NONE) {
      //   $scope.pending = ordersService.getPending();
      //   $scope.delivered = ordersService.getDelivered();
      //   $scope.amount = ordersService.getAmount();
//or you can simply navigate it to a page with the no internet connection html.
      //}
    //}


        


  
  $scope.remorder = function() {
  
    $state.go('remaining');
  }

  $scope.calldeliver = function(){
    $state.go('delivered');
  }

  $scope.Totalamt = function(){
    $state.go('totalamt');
  }
  $scope.contact = function() {
  $state.go('contact');
}
})
  



  delivery.controller('totalamtCtrl', function($scope,order,$ionicModal, ionicDatePicker, $http, ordersService) {
    $scope.time = {};
    $scope.time.amount = ordersService.getAmount();
    console.log($scope.amount);
    
    var datetimeValue1;
    $scope.order = order;
    $scope.orders = $scope.order.delivered;
    // $scope.datetimeValue = new Date();
    //$scope.datetimeValue1 = datetimeValue1;
    $scope.ab = new Date();
    var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        $scope.ab = new Date(val);
      },
    

      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016")
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
             //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

     var ipObj2 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        $scope.ba = new Date(val);

      },
    

      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      // disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.mytodate = function(){
     ionicDatePicker.openDatePicker(ipObj2); 
    }
    
  $scope.date = function() {
      console.log("hi");
      usernum = window.localStorage.getItem(uniqueId3);
          console.log(usernum);
      userToken = window.localStorage.getItem(uniqueId4);
          console.log(userToken);


          var ddff= $scope.ab.getDate();
          var mmff= $scope.ab.getMonth()+1;
           //January is 0!
           var yyyyff= $scope.ab.getFullYear();
           if(ddff<10) {
            ddff='0'+ddff
          }
           if(mmff<10)
           {mmff='0'+mmff
       } 
       $scope.fromd = yyyyff+'-'+mmff+'-'+ddff;
       console.log($scope.fromd)

       var ddtt= $scope.ba.getDate();
          var mmtt= $scope.ba.getMonth()+1;
           //January is 0!
           var yyyytt= $scope.ba.getFullYear();
           if(ddtt<10) {
            ddtt='0'+ddtt
          }
           if(mmtt<10)
           {mmtt='0'+mmtt
       } 
       $scope.tod = yyyytt+'-'+mmtt+'-'+ddtt;

       console.log($scope.tod)





      $http.get(apis + 'showorderamount?mobile='+usernum+'&token='+userToken+'&Start_Date='+$scope.fromd+'&End_Date='+$scope.tod)
          .success(function(data, status, headers, config) {
            console.log(data);
            $scope.time.amount = data;
            
          });
    }

    console.log("these are orders",$scope.orders);
    $scope.amount= 0;

    for(i=0;i<$scope.orders.length;i++)
    {

      $scope.amount += $scope.orders[i].total_amount;
      console.log($scope.amount);
    }
    

})


  delivery.controller('deliverCtrl', function($scope,order, $ionicPopup, $state, $ionicModal, ionicDatePicker, $http, ordersService, detailsService) {
    $scope.disable = true;
    $scope.disable_details = true;

    $scope.pending = ordersService.getDelivered();
    $scope.details=$scope.pending.Order_Items;
    console.log($scope.pending);

     //$scope.order_items = $scope.pending[0].Order_Items;
    // console.log($scope.order_items);
    
    // $scope.order_id = $scope.pending[0].Order_ID;
    // console.log($scope.order_id);
    // var orders1 = [];
    // angular.forEach($scope.pending, function(value,key){
    //   console.log(value);
    //   angular.forEach($scope.pending.Order_Items, function(value,key){
    //     console.log(value);
      
    // })
    // })
     for(var i=0; i < $scope.pending.length; i++){
          var order_items = $scope.pending[i];
          console.log(order_items);
          console.log(order_items.Order_Items.length);
          for(var j=0; j < order_items.Order_Items.length; j++){
            var order_details = order_items.Order_Items[j].Product_Name;
            console.log(order_details);        
          }   
    }
    console.log(order_details);
    
    $scope.ab = new Date();
    $scope.ba = new Date();
     var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));

        $scope.ab = new Date(val);

      },
    

      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      // disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

     var ipObj2 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        $scope.ba = new Date(val);

      },
    

      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      // disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.mytodate = function(){
     ionicDatePicker.openDatePicker(ipObj2); 
    }

    $scope.orderdetails = function(orderid){

      angular.forEach($scope.pending, function(value, key) {

if(value.Order_ID==orderid)
{
   $scope.details=value;
    console.log(value.Order_Items);
    savedData = $scope.details;
    window.localStorage.setItem('savedData', JSON.stringify($scope.details));
    console.log(savedData);
 
}



});
      console.log($scope.pending);


    $state.go('orders');
    this.buttonDisabled = false;
    }

    $scope.date = function() {
      console.log("hi");
      usernum = window.localStorage.getItem(uniqueId3);
          console.log(usernum);
      userToken = window.localStorage.getItem(uniqueId4);
          console.log(userToken);


          var ddff= $scope.ab.getDate();
          var mmff= $scope.ab.getMonth()+1;
           //January is 0!
           var yyyyff= $scope.ab.getFullYear();
           if(ddff<10) {
            ddff='0'+ddff
          }
           if(mmff<10)
           {mmff='0'+mmff
       } 
       $scope.fromd = yyyyff+'-'+mmff+'-'+ddff;
       console.log($scope.fromd)

       var ddtt= $scope.ba.getDate();
          var mmtt= $scope.ba.getMonth()+1;
           //January is 0!
           var yyyytt= $scope.ba.getFullYear();
           if(ddtt<10) {
            ddtt='0'+ddtt
          }
           if(mmtt<10)
           {mmtt='0'+mmtt
       } 
       $scope.tod = yyyytt+'-'+mmtt+'-'+ddtt;

       console.log($scope.tod)





      $http.get(apis + 'showdeliveredorder?mobile='+usernum+'&token='+userToken+'&Start_Date='+$scope.fromd+'&End_Date='+$scope.tod)
          .success(function(data, status, headers, config) {
            console.log(data);
            $scope.pending = data.Total_Delivered_Order;
            console.log($scope.pending);

//             $scope.orderdetails = function(orderid){

//             angular.forEach($scope.pending, function(value, key) {

//             if(value.Order_ID==orderid)
//               {

//               $scope.details=value.Order_Items;
//               console.log(value.Order_Items);
//               savedData = $scope.details;
//               window.localStorage.setItem('savedData', JSON.stringify($scope.details));
//               console.log(savedData);
// }



// });
//       console.log($scope.pending);


//     $state.go('orders');
    
//     }
        //     $scope.orderdetails = function(orderid){
        //       angular.forEach($scope.pending, function(value, key) {
        //       if(value.Order_ID==orderid)
        //         {

        //   $scope.details=value.Order_Items;
        // console.log(value.Order_Items);
        // savedData = $scope.details;
        //     window.localStorage.setItem('savedData', JSON.stringify($scope.details));
        //     console.log(savedData);
        //         }
                  })
    
    
  // $scope.order = order;
  // $scope.orders = $scope.order.delivered; 
}  
  
//   $ionicModal.fromTemplateUrl('my-modal.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//   $scope.openModal = function(index) {
//     // $scope.details = $scope.order.pending[index].order_item;
//     // $scope.amount = $scope.order.pending[index].total_amount;
//     $scope.modal.show();
//   };
//   $scope.closeModal = function() {
//     $scope.modal.hide();
//   };

// });


delivery.controller('remainingCtrl', function($scope,order,$ionicPopup,$state,$ionicModal,ionicDatePicker, $http, ordersService) {
    $scope.disable_details = false;
    $scope.disabled = false;
    $scope.pending1 = ordersService.getPending();

$scope.pending=$scope.pending1.Total_Pending_Order;
  //   $scope.details = function(index) {
  //     console.log(index);
  //   $scope.order_items = ordersService.getDelivered();
  //   console.log($scope.order_items);
  //   $scope.items = $scope.order_items.Order_Items;
  //   console.log($scope.items);
  // }
    
    //pending = $scope.pending;
  // $scope.details();
    
    console.log($scope.pending);

    // for(var i=0; i < $scope.pending.length; i++){
    //        var order_items = $scope.pending[i];
          

    // }

    // angular.forEach($scope.pending, function(data){
    //     console.log(data.Order_Items);  
    // })
    // console.log(order_items);
    // savedData = $scope.order_items;
    // window.localStorage.setItem('savedData', JSON.stringify($scope.order_items));
    // console.log(savedData);



     $scope.ab = new Date();
     var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));

        $scope.ab = new Date(val);

      },
    

      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      // disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

     var ipObj2 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        $scope.ba = new Date(val);

      },
    

      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      // disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'modal'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.mytodate = function(){
     ionicDatePicker.openDatePicker(ipObj2); 
    }
    $scope.orderdetails = function(orderid){
      // alert('orders');
      // $scope.details = $scope.pending;
      // console.log($scope.details);
      angular.forEach($scope.pending, function(value, key) {

if(value.Order_ID==orderid)
{

  $scope.details=value;
console.log(value.Order_Items);
savedData = $scope.details;
    window.localStorage.setItem('savedData', JSON.stringify($scope.details));
    console.log(savedData);
}



});
      console.log($scope.pending);


    $state.go('orders');
  
    }
    $scope.date = function() {
      console.log("...");
      usernum = window.localStorage.getItem(uniqueId3);
          console.log(usernum);
      userToken = window.localStorage.getItem(uniqueId4);
          console.log(userToken);
          var ddff= $scope.ab.getDate();
          var mmff= $scope.ab.getMonth()+1;
           //January is 0!
           var yyyyff= $scope.ab.getFullYear();
           if(ddff<10) {
            ddff='0'+ddff
          }
           if(mmff<10)
           {mmff='0'+mmff
       } 
       $scope.fromd = yyyyff+'-'+mmff+'-'+ddff;
       console.log($scope.fromd)

       var ddtt= $scope.ba.getDate();
          var mmtt= $scope.ba.getMonth()+1;
           //January is 0!
           var yyyytt= $scope.ba.getFullYear();
           if(ddtt<10) {
            ddtt='0'+ddtt
          }
           if(mmtt<10)
           {mmtt='0'+mmtt
       } 
       $scope.tod = yyyytt+'-'+mmtt+'-'+ddtt;

       console.log($scope.tod)

      $http.get(apis + 'showpendingorder?mobile='+usernum+'&token='+userToken+'&Start_Date='+$scope.fromd+'&End_Date='+$scope.tod)
          .success(function(data, status, headers, config) {
            console.log(data);
            $scope.pending = data.Total_Pending_Order;
            console.log($scope.pending);
            
      //       $scope.orderdetails = function(orderid){

      // angular.forEach($scope.pending, function(value, key) {
      //   if(value.Order_ID==orderid)
      //     {

      //       $scope.details=value.Order_Items;
      //       console.log(value.Order_Items);
      //       savedData = $scope.details;
      //       window.localStorage.setItem('savedData', JSON.stringify($scope.details));
      //       console.log(savedData);
      //   }
      //     });
    
    })
//           $scope.orderdetails = function(orderid){

//             angular.forEach($scope.pending, function(value, key) {

//             if(value.Order_ID==orderid)
//               {

//               $scope.details=value.Order_Items;
//               console.log(value.Order_Items);
//               savedData = $scope.details;
//               window.localStorage.setItem('savedData', JSON.stringify($scope.details));
//               console.log(savedData);
// }



// });
//       console.log($scope.pending);


//     $state.go('orders');
    
//     }

  //   $ionicModal.fromTemplateUrl('my-modal.html', {
  //   scope: $scope,
  //   animation: 'slide-in-up'
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });
  // $scope.openModal = function(index) {


  //   $scope.modal.show();
  //   // console.log(index);
  //   //  $scope.details1 = $scope.pending[index].Order_Items;
  //   //  console.log($scope.details1);
  //   //  $scope.amount = $scope.pending[index].total_amount;
  // };
  // $scope.closeModal = function() {
  //   $scope.modal.hide();
  // };

  


    // $scope.openDatePicker = function(fromDate){
    //   ionicDatePicker.openDatePicker(ipObj1);
    // };
    
  $scope.maps = function() {
    $state.go('mapscreen');
  }



//   $ionicModal.fromTemplateUrl('my-modal.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//   $scope.openModal = function(index) {
//     // $scope.details = $scope.order.pending[index].order_item;
//     // $scope.amount = $scope.order.pending[index].total_amount;
//     $scope.modal.show();
//   };
//   $scope.closeModal = function() {
//     $scope.modal.hide();
//   };

//   $scope.settle = function(index){
//     var index = index;
//     console.log("this is settle function");
//     $scope.data = {};

//     // An elaborate, custom popup
//     var myPopup = $ionicPopup.show({
//       template: '<input type="text" class="depth" style="align:center" ng-model="data.wifi">',
//       title: 'Enter Settlement Code',
//       subTitle: 'Please Enter settlement code to verify this order',
//       scope: $scope,
//       buttons: [
//         { text: 'Cancel' },
//         {
//           text: '<b>Confirm</b>',
//           type: 'button-positive',
//             // align: 'center',
//           onTap: function(e) {
//             if (!$scope.data.wifi) {
//               //don't allow the user to close unless he enters wifi password
//               e.preventDefault();
//             } else {
//               return $scope.data.wifi;
//             }
//           }
//         }
//       ]
//     });

//     myPopup.then(function(res) {
//       console.log('Tapped!', res);
//       $scope.code(res,index);
//       //  $ionicLoading.show({
//       //     content: 'Loading',
//       //     animation: 'fade-in',
//       //     showBackdrop: true,
//       //     maxWidth: 200,
//       //     showDelay: 0
//       //   });
//       // $state.go('home.delivered');
//     });
//   }
// $scope.code  = function(data,index){
//   console.log(data);
//   console.log($scope.orders);
//   var code = data;
//   if(code != 0 || code != null || code != 'undefined'){

//     if($scope.orders[index].settle_code == code){
//       console.log($scope.orders[index].settle_code);
//       alert("order settle successful");
//       $scope.order.pending[index].order_status = 3;

//       // console.log("temp",temp);
//       // $scope.orders[index].order_status = 3;
//       $scope.order.delivered.push($scope.order.pending[index]);
//       $scope.order.pending.splice(index,1);
//       console.log($scope.order);
//       $state.go('delivered');
//       // exit();
//     }else{
//         alert("Please Provide settlementcode properly")
//       // exit();
//     }
//     console.log("this is inside for");
//   }

// }



// $scope.reasons = function(data){
//   console.log("this is reason id",data);
// }


}
})

delivery.controller('MapScreenController', function($scope,$rootScope,$ionicPopup,$cordovaGeolocation,
  $ionicPlatform,$timeout,$ionicLoading,$window,$state,$http,$ionicPlatform,
  $ionicLoading,$cordovaToast,$location, $ionicHistory,$q,$cordovaDialogs,$ionicScrollDelegate,$compile,$ionicSlideBoxDelegate, detailsService) {



// purchaseservice.setdealidtodetail($scope.deal);
// purchaseservice.setdealdistancedetail($scope.distance);
// purchaseservice.setchatdetail($scope.chat);



$scope.pending = detailsService.get();
console.log($scope.pending);
$scope.goback= function(){
   // $ionicHistory.goBack();

   purchaseservice.setfrommap("yes");

   filteringservice.setfilterstring("");
   $state.go('tab.newDealDetail',{ 'chatId': iddeal, 'chatVer':chatdetaival, 'chatDistance':'distanceval' });
}




     var posOptions = {timeout: 90000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        // console.log(lat);
        // console.log(long);
        lati = lat;
        longi = long;


     lati = Number(lati.toString().match(/^\d+(?:\.\d{0,7})?/));

     longi =  Number(longi.toString().match(/^\d+(?:\.\d{0,7})?/));

         }, function(err) {
        // error
      });




$scope.mlat = $scope.pending.Latitude;
console.log($scope.mlat);
$scope.mlong = $scope.pending.Longitude;
console.log($scope.mlong);



 var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();



  $scope.locations = [
    { ID: 08, Name: 'Koxixos', Address: 'Av. Gov Irineu Bornhausen, 3933', Latitude: '12.9122238', Longitude: '77.5923219' },
    { ID: 08, Name: 'Koxixos', Address: 'Av. Gov Irineu Bornhausen, 3933', Latitude: '12.9886', Longitude: '77.5383' }
    
  ];

    directionsDisplay = new google.maps.DirectionsRenderer();

  $scope.latlng = new google.maps.LatLng($scope.mlat, $scope.mlong);
  
   // $scope.latlng2 = new google.maps.LatLng($scope.locations[1].Latitude, $scope.locations[1].Longitude);
  

  $scope.map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: $scope.latlng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },        
  });


  // $scope.map = new google.maps.Map(document.getElementById("map-canvas"), {
  //   zoom: 16,
  //   center: $scope.latlng2,
  //   scrollwheel: false,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP,
  //   mapTypeControl: false,
  //   zoomControl: true,
  //   zoomControlOptions: {
  //     style: google.maps.ZoomControlStyle.SMALL
  //   },        
  // });
  
  $scope.infoBoxContent =
'<div id="infobox">'+
  '<p class="titulo">' + $scope.locations[0].Name + '</p>'+
  '<p class="Address"> ' + $scope.locations[0].Address + '</p>'+
  '<p><a href="http://maps.google.com?ll=' + $scope.locations[0].Latitude + ',' + $scope.locations[0].Longitude + '&amp;q=' + $scope.locations[0].Address  + '" target="_blank">Open in Google Maps</a></p>'+
'</div>';

 
  $scope.marker = new google.maps.Marker({
    position: $scope.latlng,
    map: $scope.map,
    visible: true,
    infoBoxContent: $scope.infoBoxContent
  });

  //  $scope.marker2 = new google.maps.Marker({
  //   position: $scope.latlng2,
  //   map: $scope.map,
  //   visible: true,
  //   infoBoxContent: $scope.infoBoxContent
  // });
   
// google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute);

function calcRoute() {
  
    var start = new google.maps.LatLng(lat, long);
    //var end = new google.maps.LatLng(38.334818, -181.884886);
    var end = new google.maps.LatLng($scope.mlat, $scope.mlong);
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap($scope.map);
      } else {
          $cordovaDialogs.alert("Google api has returned with error, please try in sometime", 'Staple', 'OK');
        // alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
  }


 
  // $scope.infoBox = new InfoBox({
  //   disableAutoPan: true,
  //   maxWidth: 150,
  //   pixelOffset: new google.maps.Size(-140, 0),
  //   zIndex: null,
  //   boxStyle: {
  //       background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
  //       opacity: 1,
  //       width: "280px"
  //   },
  //   closeBoxMargin: "18px 10px",
  //   closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
  //   infoBoxClearance: new google.maps.Size(1, 1)
  // });
  
  google.maps.event.addListener($scope.marker, 'click', function() {
    $scope.infoBox.setContent(this.infoBoxContent);
    $scope.infoBox.open($scope.map, this);
  });
  

  calcRoute();

});
delivery.controller('contactCtrl', function($state, $scope){
  $scope.terms = function() {
    $state.go('terms');
}
  $scope.faq = function() {
    $state.go('faq');
}
  $scope.privacy = function() {
    $state.go('privacy');
} 
});

delivery.service('timeservice', function(){
  fromDate = "";
  toDate = "";
  return {
    setfromDate: function(value) {
      fromDate = value;
    },
    getfromDate: function() {
      return fromDate;
    },
    settoDate: function(value) {
      toDate = value;
    },
    gettoDate: function() {
      return toDate;
    }  
  }
});

delivery.factory('ordersService', function(){
  var pend = "";
  var del = "";
  var am = "";
  return {
    setPending: function(pending) {

      pend = pending;
    },
    setDelivered: function(delivered) {
      del = delivered;
    },
    setAmount: function(amount) {
      am = amount;
    },
    
    getPending: function() {
      return pend;
    },
    getDelivered: function() {
      return del;
    },
    getAmount: function() {
      return am;
    },
    

  }
})
delivery.service('detailsService', function(){
  var data = "";
  function set(savedData) {
    data = savedData;
  }
  function get() {
    return savedData;
  }

  return {
    set: set,
    get: get
  }
})

delivery.controller('ordersCtrl', function($scope, $state, ordersService, $ionicPopup, detailsService){
  // var order_id;
  // var order_id1;
  // var data = ordersService.getDelivered();
  // var data1 = ordersService.getPending();
  // $scope.details = data;
  // $scope.details1 = data1;
  // console.log(data);
  // $scope.details3 = data.Order_Items;
  // console.log($scope.details3);
  // angular.forEach($scope.details,function(value,key){
  // $scope.order_id_delivered = value.Order_ID;
  // })
  // console.log($scope.order_id_delivered);
  $scope.details1 = detailsService.get();
  console.log($scope.details1);
  $scope.details =  $scope.details1.Order_Items;
  console.log($scope.details);
  $scope.delivered = ordersService.getDelivered();
  $scope.pending = ordersService.getPending();
  console.log($scope.delivered);
  // angular.forEach($scope.details1,function(value,key){
  //   console.log(value);
  // $scope.order_id_pending = value.Order_ID;
  // })
  // console.log($scope.order_id_pending);

  // var data2 = JSON.stringify(data);
  // console.log(typeof data2);
  // var data3 = JSON.parse(data2);
  // var employees = {};
  // for (var i = 0; i < data.Order_Items.length; i++) {
  //   console.log(data.Order_Items[i].Order_ID); //text;
    // console.log(data.RelatedTopics[i].Icon.URL) //url;
// }
  // console.log(data3.Address);
  // console.log(data1);
  // $scope.details = data;
  // console.log($scope.details);
  //  $scope.orderdetails = function(data, index){
  //    console.log(index);
  //    console.log($scope.details[index].);
  // }
  // $scope.orderdetails();
    if($scope.details1.Status == 0) {
      $scope.settle = function(val){


    var index = index;

    console.log("this is settle function"+val+"hello ");
   
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" class="depth" style="align:center" ng-model="data.wifi">',
      title: 'Enter Settlement Code',
      
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Confirm</b>',
          type: 'button',
            // align: 'center',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);

if($scope.details1.Settle_Code==res)
{
  alert(val);
  
  // $scope.details1.Status=1;
  
  //   window.localStorage.setItem('delivered', JSON.stringify($scope.details1));
  //   console.log(delivered);
  //   angular.forEach($scope.delivered, function(value, key){
  //     value.Sync_Data = 0;
  //   })
  //   angular.forEach($scope.pending, function(value, key){
  //     value.Sync_Data = 0;
  //   })
    
  $state.go('home');
}

  alert(val);


    // window.localStorage.setItem('delivered', JSON.stringify($scope.details1));
    // console.log(delivered);

     
      //  $ionicLoading.show({
      //     content: 'Loading',
      //     animation: 'fade-in',
      //     showBackdrop: true,
      //     maxWidth: 200,
      //     showDelay: 0
      //   });
      // $state.go('home.delivered');
    
    
    });
  }
}
// $scope.code  = function(data,index){
//   console.log(data);
//   console.log($scope.orders);
//   var code = data;
//   if(code != 0 || code != null || code != 'undefined'){

//     if($scope.orders[index].settle_code == code){
//       console.log($scope.orders[index].settle_code);
//       alert("order settle successful");
//       $scope.order.pending[index].order_status = 3;

//       // console.log("temp",temp);
//       // $scope.orders[index].order_status = 3;
//       $scope.order.delivered.push($scope.order.pending[index]);
//       $scope.order.pending.splice(index,1);
//       console.log($scope.order);
//       $state.go('delivered');
//       // exit();
//     }else{
//         alert("Please Provide settlementcode properly")
//       // exit();
//     }
//     console.log("this is inside for");
//   }

// }

})