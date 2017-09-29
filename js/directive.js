angular.module("TodoDirective",[]);
   .directive("todoTable", function(){
       return{
           restrict: "A";
           templateUrl: "templates/directive/todo-table.html"
       };
   });