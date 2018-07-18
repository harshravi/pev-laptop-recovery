var app = angular.module("app", []);

app.controller('msg', ['$scope', function ($scope) {

}]);

// app.directive('message', function ($interpolate) {
//     return {
//         compile: function (tElement, tAttributes) {
//             tElement.css("border","1px solid #C0C0C0")
//             console.log(tAttributes.text + "-In compile");
//             return {
//                 pre: function(scope, iElement, iAttribute){
//                     console.log(iAttribute.text + "-In Pre");
//                 },
//                 post: function(scope, iElement, iAttribute){
//                     console.log(iAttribute.text + "-In post");
//                     // iElement.css("background-color","red");
//                     if(iAttribute.text === '3'){
//                         iElement.css("border","1px solid yellow")
//                     }

//                     iElement.on("click",scope.btnClick);
//                 },
//             };
//         },
//         controller: function ($scope, $element, $attrs) {
//             var v = $interpolate($attrs.text)($scope);
//             console.log(v + "-In Controller");
//             $scope.btnClick = function(){
//                 alert(v)
//             }
//         }
//     }
// });
// app.directive('message', function ($interpolate) {
//     return {
//         link: {
//             pre: function (scope, iElement, iAttribute) {
//                 console.log(iAttribute.text + "-In Pre");
//             },
//             post: function (scope, iElement, iAttribute) {
//                 console.log(iAttribute.text + "-In post");
//                 // iElement.css("background-color","red");
//                 if (iAttribute.text === '3') {
//                     iElement.css("border", "1px solid yellow")
//                 }

//                 iElement.on("click", scope.btnClick);
//             }
//         },
//         controller: function ($scope, $element, $attrs) {
//             var v = $interpolate($attrs.text)($scope);
//             console.log(v + "-In Controller");
//             $scope.btnClick = function () {
//                 alert(v)
//             }
//         }
//     }
// });



app.directive('message', function ($interpolate) {
    // return {
    //     compile: function (tElement, tAttributes) {
    //         tElement.css("border","1px solid #C0C0C0")
    //         console.log(tAttributes.text + "-In compile");
    //         // post-link function{if u hv not mentioned then by default it will be post}
            return function(scope, iElement, iAttribute){
                    console.log(iAttribute.text + "-In post");
                    // iElement.css("background-color","red");
                    if(iAttribute.text === '3'){
                        iElement.css("border","1px solid yellow")
                    }

                    // iElement.on("click",scope.btnClick);
                }
        // },
        // controller: function ($scope, $element, $attrs) {
        //     var v = $interpolate($attrs.text)($scope);
        //     console.log(v + "-In Controller");
        //     $scope.btnClick = function(){
        //         alert(v)
        //     }
        // }
    // }
});
// app.directive('bnHighlight', function () {
//     return {
//         complile: compile,
//         restrict: 'A'
//     }
//     function compile(tElement, tAttributes) {
//         tElement.addClass("highlight");
//         console.log(tAttributes.text + "-In compile");
//     }    
// });
app.directive("bnHighlight", function () {
    return {
        compile: compile,
        restrict: "A"
    }
    function compile(tElement, tAttributes) {
        console.log("Adding .highlight class.");
        tElement.addClass("highlight");
    }
});
// -------------------------------------------------- //
// -------------------------------------------------- //
// In this directive, we're going to add a class to the element; however, this
// time, we're going to do that during the LINKING phase rather than in the
// compiling phase.
// app.directive(
//     "bnEmergency",
//     function () {
//         // Return the directive configuration.
//         return ({
//             link: link,
//             restrict: "A"
//         });
//         // I bind the JavaScript events to the local scope.
//         function link(scope, element, attributes) {
//             console.log("Adding .emergency class.");
//             element.addClass("emergency");
//         }
//     }
// );