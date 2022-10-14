#pragma strict

function Start () {

}

function Update () {

	if(!Ring_Rotate_2.check_2){
	
		Check_2();
	
	}

}

function Check_2(){

	yield WaitForSeconds(0.001);
	Ring_Rotate_2.check_2 = true;

}