var x=null;
console.log(x);

{
	var y="Hello";
}
console.log(y);
var m="2";
var z=10;
if(m==z){
	console.log("true");
}else{
	console.log("false");
}
var x=new Object();
x["name"]="hello";
console.log(x["name"]);
test();
function test(){
	console.log(5);
}

function circcle(){
	console.log(this);
}
circcle();
var ob={
	name:"Hello",
	cb:{
		name:"Be"
	}
};
console.log(ob.name);