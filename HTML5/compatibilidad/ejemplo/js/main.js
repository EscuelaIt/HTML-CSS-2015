(function(Modernizr){
	var myApp = {};
	myApp.clickEvent = function(event){
		console.log(event.type);
		event.target.nextElementSibling.className = '';
	}

	myApp.init = (function(){
		var touchme = document.getElementById('touchme');
		var mouseme = document.getElementById('mouseme');
		touchme.addEventListener('touchstart', this.clickEvent, false);
		mouseme.addEventListener('mousedown', this.clickEvent, false);
		return function(){
			return myApp;
		};
	}.bind(myApp))();
})(Modernizr)