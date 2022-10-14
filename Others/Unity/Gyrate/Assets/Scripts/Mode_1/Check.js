#pragma strict

function Start () {

}

function Update () {

	if(!Ring_Rotate.check){
	
		Check();
	
	}

}

function Check(){

	yield WaitForSeconds(0.001);
	Ring_Rotate.check = true;

}