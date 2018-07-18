angular.module("app.directives.datetime",[])
	.directive("dateTime",function(){
		return {
			restrict : 'EAC',
			template : getDateTime
		}
	});

	function getDateTime()
	{
		var dt = new Date();
		return('<span>' + dt.toString() + '</span>');
	}