var app=angular.module("app",["ui.router"]),CONSTANTS=function(){var e={};return e.API_BASE_URL="http://discoverbandapi.int/public/api",e}();app.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"app/pages/home.html",controller:"homeController as home"}).state("solo",{url:"/solo",templateUrl:"app/pages/solo.html",controller:"soloController as solo"}).state("merged",{url:"/merged",templateUrl:"app/pages/merged.html",controller:"mergedController as merged"}).state("band",{url:"/band",templateUrl:"app/pages/band.html",controller:"bandController as band"}).state("merge",{url:"/merge",templateUrl:"app/pages/merge.html",controller:"mergeController as merge"})}]),app.controller("bandController",["bandService",function(e){function t(){r.gg=a.testValue}var r=this,a=e;t()}]),app.controller("homeController",function(){function e(){t.test="This value has been initiated through _init() and bound to the scope!"}var t=this;e()}),app.controller("mergeController",function(){function e(){}e()}),app.controller("mergedController",function(){function e(){t.test="Merged"}var t=this;e()}),app.controller("soloController",["$scope","bandService","soloService",function(e,t,r){function a(){s.getTracks().then(function(e){l.soloTracks=e.data,l.filteredTracks=l.soloTracks},function(e){console.log(e)})}function o(){l.formData={artist:"layer",title:"blood"},angular.forEach(l.instruments,function(e,t){l.formData[e.id]=!0})}function n(){l.filteredTracks=[],angular.forEach(l.soloTracks,function(e,t){console.log(e),goodSearch=!0,""!=!l.formData.artist||e.artist.name.match(new RegExp(l.formData.artist,"i"))||(goodSearch=!1),""!=!l.formData.title||e.songname.match(new RegExp(l.formData.title,"i"))||(goodSearch=!1),l.formData[e.instrument_id]||(goodSearch=!1),goodSearch&&l.filteredTracks.push(e),console.log(l.filteredTracks)})}function i(){o(),a()}var l=this,c=t,s=r;l.advancedFilter=function(e){return e.artist.name.match(new RegExp(l.formData.artist,"i"))&&e.songname.match(new RegExp(l.formData.title,"i"))},l.addToBand=function(e){c.trackArray.push(e)},e.$watch(function(){return l.formData},function(){l.formData&&n()},!0),l.track1=new Audio("dist/audio/Behemoth - Conquer All - Drum.mp3"),l.track2=new Audio("dist/audio/Behemoth - Conquer All - Guitar.mp3"),l.instruments=[{name:"Guitar",id:1},{name:"Drum",id:2},{name:"Bass",id:3},{name:"Piano",id:4}],i()}]),app.service("bandService",function(){var e=this;e.testValue="This value is from a service!",e.trackArray=[],e.testFunction=function(){alert("Test function called from inside service!")}}),app.service("soloService",["$http",function(e){function t(t,r){return r?"":r={},e.get(t,r)}var r=this;r.getTracks=function(){var e=CONSTANTS.API_BASE_URL+"/tracks";return t(e)},r.getTrackById=function(e){var r=CONSTANTS.API_BASE_URL+"/tracks/"+e;return t(r)}}]),app.directive("dcbBand",["bandService",function(e){return{restrict:"E",templateUrl:"app/directives/dcb-band/dcb-band.html",replace:!0,scope:{},controllerAs:"band",controller:function(){function e(){t.value="NewBand"}var t=this;e()}}}]),app.directive("dcbHeader",function(){return{restrict:"E",templateUrl:"app/directives/dcb-header/dcb-header.html",replace:!0,scope:{},controllerAs:"head",controller:function(){function e(){t.value="This is a directive test value!"}var t=this;e()}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsInJvdXRlcy5qcyIsImJhbmRDb250cm9sbGVyLmpzIiwiaG9tZUNvbnRyb2xsZXIuanMiLCJtZXJnZUNvbnRyb2xsZXIuanMiLCJtZXJnZWRDb250cm9sbGVyLmpzIiwic29sb0NvbnRyb2xsZXIuanMiLCJiYW5kU2VydmljZS5qcyIsInNvbG9TZXJ2aWNlLmpzIiwiZGNiLWJhbmQvZGNiLWJhbmQuanMiLCJkY2ItaGVhZGVyL2RjYi1oZWFkZXIuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsIkNPTlNUQU5UUyIsIkFQSV9CQVNFX1VSTCIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJiYW5kU2VydmljZSIsIl9pbml0Iiwidm0iLCJnZyIsImJhbmRTdmMiLCJ0ZXN0VmFsdWUiLCJ0aGlzIiwidGVzdCIsIiRzY29wZSIsInNvbG9TZXJ2aWNlIiwiZ2V0U29sb1RyYWNrcyIsInNvbG9TdmMiLCJnZXRUcmFja3MiLCJ0aGVuIiwiZGF0YSIsInNvbG9UcmFja3MiLCJmaWx0ZXJlZFRyYWNrcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUZvcm1EYXRhIiwiZm9ybURhdGEiLCJhcnRpc3QiLCJ0aXRsZSIsImZvckVhY2giLCJpbnN0cnVtZW50cyIsInZhbHVlIiwia2V5IiwiaWQiLCJmaWx0ZXIiLCJ0cmFjayIsImdvb2RTZWFyY2giLCJuYW1lIiwibWF0Y2giLCJSZWdFeHAiLCJzb25nbmFtZSIsImluc3RydW1lbnRfaWQiLCJwdXNoIiwiYWR2YW5jZWRGaWx0ZXIiLCJhZGRUb0JhbmQiLCJ0cmFja0FycmF5IiwiJHdhdGNoIiwidHJhY2sxIiwiQXVkaW8iLCJ0cmFjazIiLCJzZXJ2aWNlIiwic3ZjIiwidGVzdEZ1bmN0aW9uIiwiYWxlcnQiLCIkaHR0cCIsImdldERhdGEiLCJvcHRpb25zIiwiZ2V0IiwiZ2V0VHJhY2tCeUlkIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwic2NvcGUiLCJjb250cm9sbGVyQXMiXSwibWFwcGluZ3MiOiJBQUFBLEdBQUlBLEtBQU1DLFFBQVFDLE9BQU8sT0FBUSxjQ0E3QkMsVUFBYSxXQUVoQixHQUFJRCxLQUlKLE9BRkFBLEdBQU9FLGFBQWUsd0NBRWZGLElDTlJGLEtBQUlLLFFBQUEsaUJBQUEscUJBQU8sU0FBU0MsRUFBZ0JDLEdBQ2xDQSxFQUFtQkMsVUFBVSxLQUU3QkYsRUFDR0csTUFBTSxRQUNMQyxJQUFLLElBQ0xDLFlBQWEsc0JBQ2JDLFdBQVksMkJBRWRILE1BQU0sUUFDSkMsSUFBSyxRQUNMQyxZQUFhLHNCQUNiQyxXQUFZLDJCQUViSCxNQUFNLFVBQ0xDLElBQUssVUFDTEMsWUFBYSx3QkFDYkMsV0FBWSwrQkFFYkgsTUFBTSxRQUNMQyxJQUFLLFFBQ0xDLFlBQWEsc0JBQ2JDLFdBQVksMkJBRWJILE1BQU0sU0FDTEMsSUFBSyxTQUNMQyxZQUFhLHVCQUNiQyxXQUFZLGdDQzNCbEJaLElBQUlZLFdBQVcsa0JBQUEsY0FBa0IsU0FBU0MsR0FLekMsUUFBU0MsS0FDUkMsRUFBR0MsR0FBS0MsRUFBUUMsVUFKakIsR0FBSUgsR0FBS0ksS0FDTEYsRUFBVUosQ0FNZEMsUUNURGQsSUFBSVksV0FBVyxpQkFBa0IsV0FHaEMsUUFBU0UsS0FDUkMsRUFBR0ssS0FBTyx3RUFIWCxHQUFJTCxHQUFLSSxJQU1UTCxPQ1BEZCxJQUFJWSxXQUFXLGtCQUFtQixXQUdqQyxRQUFTRSxNQUlUQSxNQ1BEZCxJQUFJWSxXQUFXLG1CQUFvQixXQUdsQyxRQUFTRSxLQUNSQyxFQUFHSyxLQUFPLFNBSFgsR0FBSUwsR0FBS0ksSUFNVEwsT0NQRGQsSUFBSVksV0FBVyxrQkFBQSxTQUFBLGNBQUEsY0FBa0IsU0FBU1MsRUFBUVIsRUFBYVMsR0FZOUQsUUFBU0MsS0FFUkMsRUFBUUMsWUFDTkMsS0FBSyxTQUFTQyxH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IiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1widWkucm91dGVyXCJdKTsiLCJ2YXIgQ09OU1RBTlRTID0gKGZ1bmN0aW9uICgpIHtcblx0XG5cdHZhciBtb2R1bGUgPSB7fTtcblxuXHRtb2R1bGUuQVBJX0JBU0VfVVJMID0gXCJodHRwOi8vZGlzY292ZXJiYW5kYXBpLmludC9wdWJsaWMvYXBpXCI7XG5cblx0cmV0dXJuIG1vZHVsZTtcbn0oKSk7IiwiYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvXCIpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdob21lJywge1xuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9ob21lLmh0bWxcIixcbiAgICAgIGNvbnRyb2xsZXI6IFwiaG9tZUNvbnRyb2xsZXIgYXMgaG9tZVwiXG4gICAgfSlcbiAgXHQuc3RhdGUoJ3NvbG8nLCB7XG4gICAgICB1cmw6IFwiL3NvbG9cIixcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9zb2xvLmh0bWxcIixcbiAgICAgIGNvbnRyb2xsZXI6IFwic29sb0NvbnRyb2xsZXIgYXMgc29sb1wiXG4gICAgfSlcbiAgICAuc3RhdGUoJ21lcmdlZCcsIHtcbiAgICAgIHVybDogXCIvbWVyZ2VkXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvbWVyZ2VkLmh0bWxcIixcbiAgICAgIGNvbnRyb2xsZXI6IFwibWVyZ2VkQ29udHJvbGxlciBhcyBtZXJnZWRcIlxuICAgIH0pXG4gICAgLnN0YXRlKCdiYW5kJywge1xuICAgICAgdXJsOiBcIi9iYW5kXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvYmFuZC5odG1sXCIsXG4gICAgICBjb250cm9sbGVyOiBcImJhbmRDb250cm9sbGVyIGFzIGJhbmRcIlxuICAgIH0pXG4gICAgLnN0YXRlKCdtZXJnZScsIHtcbiAgICAgIHVybDogXCIvbWVyZ2VcIixcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9tZXJnZS5odG1sXCIsXG4gICAgICBjb250cm9sbGVyOiBcIm1lcmdlQ29udHJvbGxlciBhcyBtZXJnZVwiXG4gICAgfSlcbn0pOyIsImFwcC5jb250cm9sbGVyKFwiYmFuZENvbnRyb2xsZXJcIiwgZnVuY3Rpb24oYmFuZFNlcnZpY2UpIHtcblx0XG5cdHZhciB2bSA9IHRoaXM7XG5cdHZhciBiYW5kU3ZjID0gYmFuZFNlcnZpY2U7XG5cblx0ZnVuY3Rpb24gX2luaXQoKSB7XG5cdFx0dm0uZ2cgPSBiYW5kU3ZjLnRlc3RWYWx1ZTtcblx0fVxuXG5cdF9pbml0KCk7XG59KTsiLCJhcHAuY29udHJvbGxlcihcImhvbWVDb250cm9sbGVyXCIsIGZ1bmN0aW9uKCkge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGZ1bmN0aW9uIF9pbml0KCkge1xuXHRcdHZtLnRlc3QgPSBcIlRoaXMgdmFsdWUgaGFzIGJlZW4gaW5pdGlhdGVkIHRocm91Z2ggX2luaXQoKSBhbmQgYm91bmQgdG8gdGhlIHNjb3BlIVwiO1xuXHR9XG5cblx0X2luaXQoKTtcbn0pOyIsImFwcC5jb250cm9sbGVyKFwibWVyZ2VDb250cm9sbGVyXCIsIGZ1bmN0aW9uKCkge1xuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdGZ1bmN0aW9uIF9pbml0KCkge1xuXHRcdFxuXHR9XG5cblx0X2luaXQoKTtcbn0pOyIsImFwcC5jb250cm9sbGVyKFwibWVyZ2VkQ29udHJvbGxlclwiLCBmdW5jdGlvbigpIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHRmdW5jdGlvbiBfaW5pdCgpIHtcblx0XHR2bS50ZXN0ID0gXCJNZXJnZWRcIjtcblx0fVxuXG5cdF9pbml0KCk7XG59KTsiLCJhcHAuY29udHJvbGxlcihcInNvbG9Db250cm9sbGVyXCIsIGZ1bmN0aW9uKCRzY29wZSwgYmFuZFNlcnZpY2UsIHNvbG9TZXJ2aWNlKSB7XG5cdFxuXHR2YXIgdm0gPSB0aGlzO1xuXHR2YXIgYmFuZFN2YyA9IGJhbmRTZXJ2aWNlO1xuXHR2YXIgc29sb1N2YyA9IHNvbG9TZXJ2aWNlO1xuXG5cdC8vUHJpdmF0ZSBmdW5jdGlvbnNcblx0ZnVuY3Rpb24gcGxheUF1ZGlvRmlsZSh0cmFjaylcblx0e1xuXHRcdHRyYWNrLnBsYXkoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNvbG9UcmFja3MoKVxuXHR7XG5cdFx0c29sb1N2Yy5nZXRUcmFja3MoKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSlcblx0XHRcdHtcblx0XHRcdFx0dm0uc29sb1RyYWNrcyA9IGRhdGEuZGF0YTtcblx0XHRcdFx0dm0uZmlsdGVyZWRUcmFja3MgPSB2bS5zb2xvVHJhY2tzO1xuXHRcdFx0XG5cdFx0XHR9LCBmdW5jdGlvbihlcnJvcilcblx0XHRcdHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVGb3JtRGF0YSgpXG5cdHtcblx0XHR2bS5mb3JtRGF0YSA9IHtcdFwiYXJ0aXN0XCI6IFwibGF5ZXJcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCJibG9vZFwiLFxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdGFuZ3VsYXIuZm9yRWFjaCh2bS5pbnN0cnVtZW50cywgZnVuY3Rpb24odmFsdWUsIGtleSlcblx0XHR7XG5cdFx0XHR2bS5mb3JtRGF0YVt2YWx1ZS5pZF0gPSB0cnVlO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlsdGVyKClcblx0e1xuXHRcdHZtLmZpbHRlcmVkVHJhY2tzID0gW107XG5cblx0XHRhbmd1bGFyLmZvckVhY2godm0uc29sb1RyYWNrcywgZnVuY3Rpb24odHJhY2ssIGtleSlcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyh0cmFjayk7XG5cdFx0XHRnb29kU2VhcmNoID0gdHJ1ZTtcblxuXHRcdFx0aWYoIXZtLmZvcm1EYXRhLmFydGlzdCA9PSBcIlwiICYmICF0cmFjay5hcnRpc3QubmFtZS5tYXRjaChuZXcgUmVnRXhwKHZtLmZvcm1EYXRhLmFydGlzdCwgXCJpXCIpKSlcblx0XHRcdHtcblx0XHRcdFx0Z29vZFNlYXJjaCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighdm0uZm9ybURhdGEudGl0bGUgPT0gXCJcIiAmJiAhdHJhY2suc29uZ25hbWUubWF0Y2gobmV3IFJlZ0V4cCh2bS5mb3JtRGF0YS50aXRsZSwgXCJpXCIpKSlcblx0XHRcdHtcblx0XHRcdFx0Z29vZFNlYXJjaCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighdm0uZm9ybURhdGFbdHJhY2suaW5zdHJ1bWVudF9pZF0pXG5cdFx0XHR7XG5cdFx0XHRcdGdvb2RTZWFyY2ggPSBmYWxzZTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZihnb29kU2VhcmNoKVxuXHRcdFx0e1xuXHRcdFx0XHR2bS5maWx0ZXJlZFRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKHZtLmZpbHRlcmVkVHJhY2tzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9pbml0KCkge1xuXHRcdGNyZWF0ZUZvcm1EYXRhKCk7XG5cblx0XHRnZXRTb2xvVHJhY2tzKCk7XG5cblx0XHQvL3ZtLnRyYWNrMS5wbGF5KCk7XG5cdFx0Ly9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cGxheUF1ZGlvRmlsZSh2bS50cmFjazIpfSwgNDAwKTtcblx0fVxuXG5cdC8vVm0gZnVuY3Rpb25zXG5cdHZtLmFkdmFuY2VkRmlsdGVyID0gZnVuY3Rpb24odHJhY2spXG5cdHtcblx0XHRyZXR1cm4gdHJhY2suYXJ0aXN0Lm5hbWUubWF0Y2gobmV3IFJlZ0V4cCh2bS5mb3JtRGF0YS5hcnRpc3QsIFwiaVwiKSlcblx0XHRcdFx0JiZcblx0XHRcdFx0dHJhY2suc29uZ25hbWUubWF0Y2gobmV3IFJlZ0V4cCh2bS5mb3JtRGF0YS50aXRsZSwgXCJpXCIpKTtcblx0fVxuXG5cdHZtLmFkZFRvQmFuZCA9IGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XG5cdFx0YmFuZFN2Yy50cmFja0FycmF5LnB1c2godHJhY2spO1xuXHR9XG5cblx0Ly9XYXRjaGVzXG5cdCRzY29wZS4kd2F0Y2goXG5cdFx0ZnVuY3Rpb24gKCkgeyByZXR1cm4gdm0uZm9ybURhdGEgfSwgXG5cdFx0ZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZih2bS5mb3JtRGF0YSkgXG5cdFx0XHR7XHRcdFxuXHRcdFx0XHRmaWx0ZXIoKTtcblx0XHRcdH1cblx0XHR9LCB0cnVlKTtcblxuXG5cblx0dm0udHJhY2sxID0gbmV3IEF1ZGlvKFwiZGlzdC9hdWRpby9CZWhlbW90aCAtIENvbnF1ZXIgQWxsIC0gRHJ1bS5tcDNcIik7XG5cdHZtLnRyYWNrMiA9IG5ldyBBdWRpbyhcImRpc3QvYXVkaW8vQmVoZW1vdGggLSBDb25xdWVyIEFsbCAtIEd1aXRhci5tcDNcIik7XG5cblx0dm0uaW5zdHJ1bWVudHMgPSBbe1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjpcIkd1aXRhclwiLFxuXHRcdFx0XHRcdFx0XHRcImlkXCI6MVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6XCJEcnVtXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjoyXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjpcIkJhc3NcIixcblx0XHRcdFx0XHRcdFx0XCJpZFwiOjNcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOlwiUGlhbm9cIixcblx0XHRcdFx0XHRcdFx0XCJpZFwiOjRcblx0XHRcdFx0XHRcdH1dO1xuXG5cblx0X2luaXQoKTtcbn0pOyIsImFwcC5zZXJ2aWNlKFwiYmFuZFNlcnZpY2VcIiwgZnVuY3Rpb24oKSB7XG5cdHZhciBzdmMgPSB0aGlzO1xuXHRzdmMudGVzdFZhbHVlID0gXCJUaGlzIHZhbHVlIGlzIGZyb20gYSBzZXJ2aWNlIVwiO1xuXG5cdHN2Yy50cmFja0FycmF5ID0gW107XG5cblx0XG5cblxuXG5cblx0c3ZjLnRlc3RGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdGFsZXJ0KFwiVGVzdCBmdW5jdGlvbiBjYWxsZWQgZnJvbSBpbnNpZGUgc2VydmljZSFcIik7XG5cdH1cbn0pIiwiYXBwLnNlcnZpY2UoXCJzb2xvU2VydmljZVwiLCBmdW5jdGlvbigkaHR0cCkge1xuXHRcblx0Ly9HbG9iYWxzXG5cdHZhciBzdmMgPSB0aGlzO1xuXG5cdC8vUHJpdmF0ZSBmdW5jdGlvbnNcblx0ZnVuY3Rpb24gZ2V0RGF0YSAodXJsLCBvcHRpb25zKSB7XG5cblx0XHQhb3B0aW9ucyA/IG9wdGlvbnMgPSB7fSA6IFwiXCI7XG5cblx0XHRyZXR1cm4gJGh0dHAuZ2V0KHVybCwgb3B0aW9ucylcblx0fVxuXG5cdC8vU3ZjIGZ1bmN0aW9uc1xuXHRzdmMuZ2V0VHJhY2tzID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIHVybCA9IENPTlNUQU5UUy5BUElfQkFTRV9VUkwgKyBcIi90cmFja3NcIjtcblx0XHRcblx0XHRyZXR1cm4gZ2V0RGF0YSh1cmwpO1xuXHR9XG5cblx0c3ZjLmdldFRyYWNrQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuXG5cdFx0dmFyIHVybCA9IENPTlNUQU5UUy5BUElfQkFTRV9VUkwgKyBcIi90cmFja3MvXCIgKyBpZDtcblxuXHRcdHJldHVybiBnZXREYXRhKHVybCk7XG5cdH1cbn0pIiwiYXBwLmRpcmVjdGl2ZShcImRjYkJhbmRcIiwgZnVuY3Rpb24oYmFuZFNlcnZpY2UpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwiYXBwL2RpcmVjdGl2ZXMvZGNiLWJhbmQvZGNiLWJhbmQuaHRtbFwiLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGNvbnRyb2xsZXJBczogXCJiYW5kXCIsXG5cdFx0Y29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dmFyIGJhbmRTdmMgPSBiYW5kU2VydmljZTtcblxuXHRcdFx0ZnVuY3Rpb24gX2luaXQoKSB7XG5cdFx0XHRcdHZtLnZhbHVlID0gXCJOZXdCYW5kXCI7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0KCk7XG5cdFx0fVxuXHR9XG59KSIsImFwcC5kaXJlY3RpdmUoXCJkY2JIZWFkZXJcIiwgZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6IFwiRVwiLFxuXHRcdHRlbXBsYXRlVXJsOiBcImFwcC9kaXJlY3RpdmVzL2RjYi1oZWFkZXIvZGNiLWhlYWRlci5odG1sXCIsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge30sXG5cdFx0Y29udHJvbGxlckFzOiBcImhlYWRcIixcblx0XHRjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHRcdGZ1bmN0aW9uIF9pbml0KCkge1xuXHRcdFx0XHR2bS52YWx1ZSA9IFwiVGhpcyBpcyBhIGRpcmVjdGl2ZSB0ZXN0IHZhbHVlIVwiO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdCgpO1xuXHRcdH1cblx0fVxufSkiXX0=
