angular.module('anonymous', [])
.controller('viewController',[ '$http', '$scope', '$window', '$interval', function( $http, $scope, $window, $interval ){

	$scope.init = function () {
		$scope.isHidden = {
			"home" : "",
			"members" : "hidden",
			"research" : "hidden"
		}


		$scope.memberTypes = [
			"software",
			"operations",
			"marketing",
			"financial"
		]

		$scope.memberList = [{
			"name" : "Alex Morris",
			"type" : "software",
			"title" : "Software Developer",
			"bio" : "Alex is a seasoned software developer with experience in DLT as well as more traditional systems.",
			"imageUrl" : "https://static.theblockchaininstitute.org/wp-content/uploads/2019/05/Web_ALex-768x768.jpg"

		},{
			"name" : "Jason Swearingen",
			"type" : "marketing",
			"title" : "Graphic Designers",
			"bio" : "Jason is an experienced graphic designer. They currently manage the brand at theblockchaininstitute.org, and greatly enjoy communicating complex concepts visually.",
			"imageUrl" : "https://static.theblockchaininstitute.org/wp-content/uploads/2019/05/Web_Jason-768x768.jpg"

		},{
			"name" : "Alex Morris",
			"type" : "software",
			"title" : "Software Developer",
			"bio" : "Alex is a seasoned software developer with experience in DLT as well as more traditional systems.",
			"imageUrl" : "https://static.theblockchaininstitute.org/wp-content/uploads/2019/05/Web_ALex-768x768.jpg"

		},{
			"name" : "Dan Cecelia",
			"type" : "operations",
			"title" : "Business Analyst",
			"bio" : "Dan has experience growing businesses large and small.",
			"imageUrl" : "https://static.theblockchaininstitute.org/wp-content/uploads/2019/05/Web_ALex-768x768.jpg"

		}]

		$scope.memberListFiltered = $scope.memberList;
	}

	$scope.navTo = function (div) {
		if ( div === "members" ){
			$scope.isHidden = {
				"home" : "hidden",
				"members" : "",
				"research" : "hidden"
			}			
		} else if ( div === "research") {
			$scope.isHidden = {
				"home" : "hidden",
				"members" : "hidden",
				"research" : ""
			}			
		} else {
			$scope.isHidden = {
				"home" : "",
				"members" : "hidden",
				"research" : "hidden"
			}			
		}
	}


	$scope.init()

}]);  