
angular.module('app',[])
       .controller('Ctrl',function($scope){
		$scope.digitKeys = [
			{label: "1", value: 1}, {label: "2", value: 2}, {label: "3", value: 3},
			{label: "4", value: 4}, {label: "5", value: 5}, {label: "6", value: 6},
			{label: "7", value: 7}, {label: "8", value: 8}, {label: "9", value: 9},
			{label: "0", value: 0}, 
		];
		$scope.equalSignKey = {label: "="};
		$scope.operationKeys = [
			{label: "/", operation: function (a, b) {return a / b}},
			{label: "*", operation: function (a, b) {return a * b}},
			{label: "+", operation: function (a, b) {return a + b}},
			{label: "-", operation: function (a, b) {return a - b}},
		];
		$scope.clearDisplay = {label: "C"};
		$scope.displayValue = 0;
		$scope.valueA = 0;
		$scope.valueB = 0;
		$scope.selectedOperation = null;
		$scope.clearValue = true;
		$scope.digitClicked = function (digit) {
		if ($scope.clearValue) {
			$scope.displayValue = digit;
			$scope.clearValue = false;
		} else {
			$scope.displayValue = $scope.displayValue * 10 + digit;
		}
		$scope.valueB = $scope.displayValue
		};
		$scope.operationClicked = function (operation) {
			$scope.selectedOperation = operation;
			$scope.valueA = $scope.displayValue;
			//$scope.valueB = $scope.displayValue;
			$scope.clearValue = true;
		};
		$scope.compute = function () {
			if($scope.selectedOperation != null) {
			//alert($scope.valueA);
			//alert($scope.valueB);
				$scope.displayValue = Math.floor(
                       $scope.selectedOperation($scope.valueA, $scope.valueB));
				$scope.clearValue = true;
				$scope.valueA = $scope.displayValue;
			}
		}
		$scope.clearClicked = function () {
			$scope.displayValue = 0;		
		};
		
		
		});
	