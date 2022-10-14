#pragma strict

function Start () {

}

function Update () {

//Input.gyro.enabled = true;

//this.transform.rotation = Input.gyro.attitude;

this.transform.rotation.z = -Input.acceleration.x * 0.5;

}
