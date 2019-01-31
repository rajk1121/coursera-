function pot () {
	// body...
	document.querySelector("button").addEventListener("blur",function(){
		var width=window.innerWidth;
		if(width < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
};
pot();

