#pragma strict

public static var score : int;
score = 0;

function Start () {

}

function Update () {

	this.transform.Translate(Vector3.up * 0.05);
	
	if((this.transform.position.z <= -8.2 && this.transform.position.z >= -8.25) && (this.transform.position.x == GameObject.Find("Xenith Racing Car").transform.position.x)){

		score += 1;
		Destroy(this.gameObject);

	}
	

}