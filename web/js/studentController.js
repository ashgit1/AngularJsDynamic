
mainApp.controller("studentController", function($scope) {
	$scope.student = {
		firstName : "Ashishkumar",
		lastName : "Gupta",
		fees : 2500,

		subjects : [ {
			name : 'Physics',
			marks : 90
		}, {
			name : 'Chemistry',
			marks : 85
		}, {
			name : 'Math',
			marks : 95
		}, {
			name : 'English',
			marks : 70
		}, {
			name : 'Hindi',
			marks : 87
		} ],

		fullName : function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
});