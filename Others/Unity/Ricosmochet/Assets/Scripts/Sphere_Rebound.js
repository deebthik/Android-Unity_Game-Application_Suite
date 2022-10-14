#pragma strict

var rigid_body : Rigidbody;
var bla : boolean = true;

function Start () {
	rigid_body = this.GetComponent(Rigidbody);

}

function Update () {

	if (bla){
		rigid_body.AddForce(0, 200, 0);
		this.transform.localPosition.z = 0;
		bla = false;
	}

}
