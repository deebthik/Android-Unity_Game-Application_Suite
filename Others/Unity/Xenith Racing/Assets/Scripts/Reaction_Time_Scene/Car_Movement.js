#pragma strict

function Start () {

}

function Update () {

	if(Red_Lights.move_car){

		if(GameObject.Find("Xenith Racing Car")){

			GameObject.Find("Xenith Racing Car").transform.Translate(Vector3.forward * 1);
		
		}

	}

}