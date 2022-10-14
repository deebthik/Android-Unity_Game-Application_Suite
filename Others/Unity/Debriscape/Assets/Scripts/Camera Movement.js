#pragma strict

function Start () {

}

function Update () {

if(Time.realtimeSinceStartup > 1){
this.transform.position = Vector3.MoveTowards(this.transform.position, Vector3(0, 1, -10),20);
}

}