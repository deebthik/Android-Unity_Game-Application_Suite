#pragma strict

function Start () {

}

function Update () {

	GameObject.Find("Main Camera Parent").transform.Rotate(Vector3.up * 1);

}