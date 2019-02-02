document.addEventListener("DOMContentLoaded",function () {

	var request=new XMLHttpRequest();
	request.onreadystatechange = function () {
		// body...
		if(this.readyState==4 && this.status == 200){
			proceed(request);
		}
	};
	request.open("GET" , "file.json");
	request.send();
	
});
function proceed(request) {
	var obj=JSON.parse(request.responseText);
	var menusnippet= new XMLHttpRequest();

	menusnippet.onreadystatechange=function(){
		if(this.status==200 && this.readyState==4){
			combine(menusnippet ,obj);
		}
	};
	menusnippet.open("GET" , "menu-snippet.html" , false);
	menusnippet.send();
	
};
function replace(string , obj){
	var toreplace = "{{name}}";
	string=string.replace(new RegExp(toreplace , "g") , obj.name);
	toreplace="{{photo}}";
	string=string.replace(new RegExp(toreplace , "g") , obj.photo);
	return string;
	
};
function combine(menusnippet , obj) {	
	var fstring="<div class='row'>";
	var string=menusnippet.responseText;
	for(var i=0 ; i<obj.length ; i++){

		fstring=fstring+replace(string , obj[i]);

	}
	fstring=fstring+"</div>";
	document.querySelector("#mainmenu").innerHTML = fstring;
};
