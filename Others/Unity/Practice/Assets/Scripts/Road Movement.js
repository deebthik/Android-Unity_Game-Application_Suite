#pragma strict

var time : Time;
var z_axis : float;

var road_clone : GameObject;

function Start () {

var time_delay : float = 5;
//z_axis = 0;
while(true){
 yield WaitForSeconds(time_delay);
 var clone : GameObject = Instantiate(road_clone, Vector3(0,0,20), transform.rotation);
 //road_clone.transform.localScale = Vector3(1, 0.5, 8);
 road_clone.name = "Road(Clone)";
 //z_axis += 20;
}

}

function Update () {

//print(Time.realtimeSinceStartup);

if (Time.time > 1){

transform.Translate(Vector3.back * 0.1);

}

if (GameObject.Find("Road(Clone)").transform.position.z < -35.5){

Destroy(GameObject.Find("Road(Clone)"));

}

if(GameObject.Find("Road(Clone)(Clone)").transform.position.z < -35.5){

Destroy(GameObject.Find("Road(Clone)(Clone)"));

}

if(GameObject.Find("Road(Clone)(Clone)(Clone)").transform.position.z < -64){

Destroy(GameObject.Find("Road(Clone)(Clone)(Clone"));

}

if(GameObject.Find("Road(Clone)(Clone)(Clone)(Clone)").transform.position.z < -64){

Destroy(GameObject.Find("Road(Clone)(Clone)(Clone)(Clone)"));

}

if(GameObject.Find("Road(Clone)(Clone)(Clone)(Clone)(Clone)").transform.position.z < -64){

Destroy(GameObject.Find("Road(Clone)(Clone)(Clone)(Clone)(Clone)"));

}





}