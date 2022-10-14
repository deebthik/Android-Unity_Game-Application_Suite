#pragma strict

var big_cuboid : GameObject;
big_cuboid = GameObject.Find("Big Cuboid");
var small_cuboid_1 : GameObject;
small_cuboid_1 = GameObject.Find("Small Cuboid 1");
var small_cuboid_2 : GameObject;
small_cuboid_2 = GameObject.Find("Small Cuboid 2");
var red_cylinder : GameObject;
red_cylinder = GameObject.Find("Red Cylinder");
var green_cylinder : GameObject;
green_cylinder = GameObject.Find("Green Cylinder");
var blue_cylinder : GameObject;
blue_cylinder = GameObject.Find("Blue Cylinder");
var yellow_cylinder : GameObject;
yellow_cylinder = GameObject.Find("Yellow Cylinder");
var green_cylinder_halo : GameObject;
green_cylinder_halo = GameObject.Find("Green Cylinder Halo");
var glowing_green_ball_clone : GameObject;
glowing_green_ball_clone = GameObject.Find("Glowing Green Ball(Clone)");

function Start () {

}

function Update () {

if(GameObject.Find("Pause Menu(Clone)")){

Destroy(this.GetComponent(Rigidbody));

}else{

this.gameObject.AddComponent(Rigidbody);

}


if(!Play.green_cylinder_fallen/*green_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -2 && this.transform.position.x > -8)){

green_cylinder_halo.animation.Play();
Play.score_int += 2;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
}
}

if(this.transform.position.y - GameObject.Find("Base").transform.position.y < 1 && this.transform.position.y - GameObject.Find("Base").transform.position.y > 0){

Play.score_int -= 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));

}

if(!Play.red_cylinder_fallen/*red_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -10 && this.transform.position.x > -16)){

Handheld.Vibrate();
GameObject.Find("Red Cylinder").animation.Play();
Play.red_cylinder_fallen = true;
Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));

}
}

if(!Play.blue_cylinder_fallen/*blue_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 8.5 && this.transform.position.x > -2)){

Handheld.Vibrate();
GameObject.Find("Blue Cylinder").animation.Play();
Play.blue_cylinder_fallen = true;
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));

}
}

if(!Play.yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 16 && this.transform.position.x > 10)){

Handheld.Vibrate();
GameObject.Find("Yellow Cylinder").animation.Play();
Play.yellow_cylinder_fallen = true;
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

}
}

var distance = this.transform.position.y - big_cuboid.transform.position.y;
var distance_2 = this.transform.position.y - small_cuboid_1.transform.position.y;
var distance_3 = this.transform.position.y - small_cuboid_2.transform.position.y;

if(distance > 5){
this.rigidbody.velocity = Vector3(-10, -9.81, 0);
}

if(distance <= 5){
if ((big_cuboid.transform.rotation.z > 0) && (this.transform.position.x > 0)){

this.rigidbody.velocity = Vector3(-1, -9.81, 0);

}

if ((big_cuboid.transform.rotation.z < 0) && (this.transform.position.x < 0)){

this.rigidbody.velocity = Vector3(1, -9.81, 0);

}

}

if(distance_2 <= 3){
if ((small_cuboid_1.transform.rotation.z > 0) && (this.transform.position.x < 0)){

this.rigidbody.velocity = Vector3(-1, -9.81, 0);

}

if ((small_cuboid_1.transform.rotation.z < 0) && (this.transform.position.x < 0)){

this.rigidbody.velocity = Vector3(1, -9.81, 0);

}

}

if(distance_3 <= 3){
if ((small_cuboid_2.transform.rotation.z > 0) && (this.transform.position.x > 0)){

this.rigidbody.velocity = Vector3(-1, -9.81, 0);

}

if ((small_cuboid_2.transform.rotation.z < 0) && (this.transform.position.x > 0)){

this.rigidbody.velocity = Vector3(1, -9.81, 0);

}

}

}