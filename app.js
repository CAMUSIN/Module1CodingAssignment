!function(){"use strict";function a(a,b){a.message="",a.isTooMuch=function(){if(angular.isString(a.lunchElements)){var b=a.lunchElements.trim();if(b.length>0){var c=b.trim().split(",");c.length>0&&c.length<=3?a.message="Enjoy!":a.message="Too much!"}else a.lunchElements=null,a.message="Please insert data before!"}else a.message="Please insert data before!"},"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}angular.module("LunchCheck",[]).controller("LunchCheckController",a),a.$inject=["$scope","$filter"]}();

// (function(){
//   'use strict';
//   angular.module('LunchCheck',[])
//   .controller('LunchCheckController', LunchCheckController);
//
//   LunchCheckController.$inject = ['$scope','$filter'];
//   function LunchCheckController ($scope, $filter){
//     $scope.message = "";
//     $scope.isTooMuch = function() {
//       if(angular.isString($scope.lunchElements)){
//         var cadena = $scope.lunchElements.trim();
//         if(cadena.length > 0){
//           var total = cadena.trim().split(',');
//           if(total.length > 0 && total.length <= 3){
//               $scope.message = "Enjoy!";
//           }else{
//               $scope.message = "Too much!";
//           }
//         }else{
//           $scope.lunchElements = null;
//           $scope.message = "Please insert data before!";
//         }
//       }else{
//         $scope.message = "Please insert data before!";
//       }
//     };
//
//     if(typeof String.prototype.trim !== 'function'){
//       String.prototype.trim = function(){
//         return this.replace(/^\s+|\s+$/g, '');
//       }
//     }
//   }
// })();
