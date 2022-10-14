#pragma strict

var bullet : GameObject;

function Start () {

}

function Update () {

if(Input.GetButton("Fire1")){

	var projectile_clone : GameObject = Instantiate (bullet, transform.position, transform.rotation);

}

}