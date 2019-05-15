angular.module('autonomous', [])
.controller('headerCtrl',[ '$http', '$scope', '$window', '$interval', function( $http, $scope, $window, $interval ){
	$scope.currentName = "what";
	$scope.init = function () {
		console.log('scope.init ran')
		$scope.counter = 0;
		$scope.currentName = "what"
		$scope.headerText = "do you want to do?"

	    $interval(function(){
	        getWhat();
	    },1500);	

	}

	function getWhat () {
		var options = [
			["what","do you want to do?"],
			["where","do you want to do it?"],
			["who","do you want to be?"],
			["why","don't you want to stop?"],
			["how","haven't you started yet?"],
			["when","are you going to do it?"]
		]

		$scope.currentName = (options[$scope.counter])[0];

		$scope.counter++
		setTimeout(function(){

			$scope.headerText = (options[$scope.counter - 1])[1];
			return
		}, 100);
	}
	
	$scope.click = function () {
		console.log('click', $scope.currentName)
	}



	$scope.init()
}])
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
			"title" : "Graphic Designer",
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

	$scope.filterMembers = function (type) {
		var newList = [];
		for ( var l = 0; l < $scope.memberList.length; l++ ) {
			if ( $scope.memberList[l].type === type ) {
				newList.push($scope.memberList[l])
			}
		}

		if ( newList.length > 0 ) {
			$scope.memberListFiltered = newList
		} else {
			$scope.memberListFiltered = $scope.memberList
		}

	}

	$scope.init()

}])
