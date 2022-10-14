#pragma strict

var positions : Array = [-0.5, 0, 0.5];
var turn_right : boolean = false;
var turn_left : boolean = false;
var turning_right : boolean = false;
var turning_left : boolean = false;

function Start () {

}

function Update () {

	if(Input.acceleration.x < 0.3){
	
		turn_right = true;
	
	}
	
	if(Input.acceleration.x > -0.3){
	
		turn_left = true;
	
	}
	
	if(turn_right && GameObject.Find("Xenith Racing Car").transform.position.x in positions && !turning_left && !turning_right){
		if(Input.acceleration.x > 0.3 && Input.acceleration.x <= 0.6 && GameObject.Find("Xenith Racing Car").transform.position.x + 0.5 in positions){
			
			Turn_Right(0.5);
						
			turn_right = false;

		}
		
		if(Input.acceleration.x > 0.5 && GameObject.Find("Xenith Racing Car").transform.position.x + 1 in positions){
			
			Turn_Right(1);
						
			turn_right = false;

		}
		
	}
	
	if(turn_left && GameObject.Find("Xenith Racing Car").transform.position.x in positions && !turning_left && !turning_right){
		if(Input.acceleration.x < -0.3 && Input.acceleration.x >= -0.6 && GameObject.Find("Xenith Racing Car").transform.position.x - 0.5 in positions){
	
			Turn_Left(0.5);
			
			turn_left = false;
	
		}
		
		if(Input.acceleration.x < -0.5 && GameObject.Find("Xenith Racing Car").transform.position.x - 1 in positions){
	
			Turn_Left(1);
			
			turn_left = false;
	
		}
		
	}
	
	if(GameObject.Find("Xenith Racing Car").transform.position.x < -0.5){
	
		GameObject.Find("Xenith Racing Car").transform.position.x = -0.5;
	
	}
	
	if(GameObject.Find("Xenith Racing Car").transform.position.x > 0.5){
	
		GameObject.Find("Xenith Racing Car").transform.position.x = 0.5;
	
	}
	

}


function Turn_Right(pos : float){

	turning_right = true;

	/*GameObject.Find("Left Wheel").transform.localPosition = Vector3(0.1050413, 0, 0.04836655);
	GameObject.Find("Left Wheel").transform.localRotation = Quaternion.Euler(0, 15, 0);
	
	GameObject.Find("Right Wheel").transform.localPosition = Vector3(0.09132499, 0, -0.07987213);
	GameObject.Find("Right Wheel").transform.localRotation = Quaternion.Euler(0, 15, 0);*/
	
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0.1, 0, 0), "islocal", true, "time", 0.2));
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0.1050413, 0, 0.04836655), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Left Wheel"), iTween.Hash("rotation", Vector3(0, 15, 0), "islocal", true, "time", 0.2));

		
	iTween.MoveTo(GameObject.Find("Right Wheel"), iTween.Hash("position", Vector3(0.09132499, 0, -0.07987213), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Right Wheel"), iTween.Hash("rotation", Vector3(0, 15, 0), "islocal", true, "time", 0.2));
	
	yield WaitForSeconds(0.2);
	
	
	iTween.MoveTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("position", Vector3(0.1211331, 0.733191, -8.216162), "islocal", true, "time", 0.3));
	iTween.RotateTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("rotation", Vector3(0, 15, 0), "islocal", true, "time", 0.3));
	
	
	iTween.MoveTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("position", Vector3(GameObject.Find("Xenith Racing Car").transform.position.x + pos, GameObject.Find("Xenith Racing Car").transform.position.y, GameObject.Find("Xenith Racing Car").transform.position.z), "islocal", true, "time", 0.2));
	
	yield WaitForSeconds(0.2);
	
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Left Wheel"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
		
	iTween.MoveTo(GameObject.Find("Right Wheel"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Right Wheel"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	
	iTween.RotateTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 0.3));
	
	turning_right = false;

}


function Turn_Left(pos : float){

	turning_left = true;

	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0.1, 0, 0), "islocal", true, "time", 0.2));
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(-0.1050413, 0, 0.04836655), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Left Wheel"), iTween.Hash("rotation", Vector3(0, -15, 0), "islocal", true, "time", 0.2));

		
	iTween.MoveTo(GameObject.Find("Right Wheel"), iTween.Hash("position", Vector3(-0.09132499, 0, -0.07987213), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Right Wheel"), iTween.Hash("rotation", Vector3(0, -15, 0), "islocal", true, "time", 0.2));
	
	yield WaitForSeconds(0.2);
	
	
	iTween.MoveTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("position", Vector3(-0.1211331, 0.733191, -8.216162), "islocal", true, "time", 0.3));
	iTween.RotateTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("rotation", Vector3(0, -15, 0), "islocal", true, "time", 0.3));
	
	
	iTween.MoveTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("position", Vector3(GameObject.Find("Xenith Racing Car").transform.position.x - pos, GameObject.Find("Xenith Racing Car").transform.position.y, GameObject.Find("Xenith Racing Car").transform.position.z), "islocal", true, "time", 0.2));
	
	yield WaitForSeconds(0.2);
	
	iTween.MoveTo(GameObject.Find("Left Wheel"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Left Wheel"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
		
	iTween.MoveTo(GameObject.Find("Right Wheel"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	iTween.RotateTo(GameObject.Find("Right Wheel"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 0.2));
	
	iTween.RotateTo(GameObject.Find("Xenith Racing Car"), iTween.Hash("rotation", Vector3(0, 0, 0), "islocal", true, "time", 0.3));
	
	turning_left = false;

}


function Demo_Turn(){

yield WaitForSeconds(2);

Turn_Left(0.5);

yield WaitForSeconds(2);

Turn_Right(1);

yield WaitForSeconds(2);

Turn_Left(0.5);

yield WaitForSeconds(2);

Turn_Right(0.5);

yield WaitForSeconds(2);

Turn_Left(1);

yield WaitForSeconds(2);

Turn_Right(0.5);

}
