function Start () {
	rigidbody.velocity.x = 15;
}
function Update () {
	if(rigidbody.velocity.x >0){
	
	rigidbody.velocity.x -= .1;
	}else{
	rigidbody.velocity.x = 0;}
}

function Jump(){

} 