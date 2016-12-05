app.directive("dcbHeader", function() {
	return {
		restrict: "E",
		templateUrl: "app/directives/dcb-header/dcb-header.html",
		replace: true,
		scope: {},
		controllerAs: "head",
		controller: function() {
			var vm = this;

			function _init() {
				vm.value = "This is a directive test value!";
			}

			_init();
		}
	}
})