#pragma strict


function Start () {

}

function Update () {

	this.transform.Translate(Vector3.back * 0.05);

	if(this.transform.position.z <= 0 && this.transform.position.z >= -0.05){

		Instantiate(this, Vector3(0, 0.675, 100), Quaternion.Euler(0, 0, 0));

	}
	
	if(this.transform.position.z <= -100){
	
		Destroy(this.gameObject);
	
	}


}