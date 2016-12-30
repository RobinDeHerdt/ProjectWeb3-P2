app.directive("dcbLogin", function() {
	return {
		restrict: "E",
		templateUrl: "app/directives/dcb-login/dcb-login.html",
		replace: true,
		scope: {},
		controllerAs: "login",
		controller: function($auth, loginService) {
			var vm 			= this;
			var loginSvc 	= loginService;
			var target 		= document.getElementById('login-spinner');

			var opts = {
	  			lines: 13 // The number of lines to draw
				, length: 28 // The length of each line
				, width: 14 // The line thickness
				, radius: 42 // The radius of the inner circle
				, scale: 0.4 // Scales overall size of the spinner
				, corners: 1 // Corner roundness (0..1)
				, color: '#000' // #rgb or #rrggbb or array of colors
				, opacity: 0.25 // Opacity of the lines
				, rotate: 0 // The rotation offset
				, direction: 1 // 1: clockwise, -1: counterclockwise
				, speed: 1 // Rounds per second
				, trail: 60 // Afterglow percentage
				, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
				, zIndex: 2e9 // The z-index (defaults to 2000000000)
				, className: 'spinner' // The CSS class to assign to the spinner
				, top: '60%' // Top position relative to parent
				, left: '50%' // Left position relative to parent
				, shadow: false // Whether to render a shadow
				, hwaccel: false // Whether to use hardware acceleration
				, position: 'absolute' // Element positioning
			}

	        vm.login = function() {
	        	console.log('Sent');
	        	var spinner = new Spinner(opts).spin(target);
	        	vm.loading 	= true;

	            var credentials = {
	                email: vm.email,
	                password: vm.password
	            }
	            
	            $auth.login(credentials).then(function(data) {
	            	// Authentication success
	            	spinner.stop();
	            	vm.loading = false;
	            	$('#login_modal').modal();
					$('#login_modal').modal('close');
	            	console.log(data);
	            	loginSvc.getUser();
	            }, 
	            function(error){
	            	// Authentication failed
	            	spinner.stop();
	            	vm.loading = false;
	            	console.log(error);
	            });
	        }
		}
	}
})