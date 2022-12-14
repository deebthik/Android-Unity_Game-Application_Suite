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
var blue_cylinder_halo : GameObject;
blue_cylinder_halo = GameObject.Find("Blue Cylinder Halo");
var blue_ball_clone : GameObject;
blue_ball_clone = GameObject.Find("Blue Ball(Clone)");

function Start () {

}

function Update () {

if(Play.big_cuboid_moving_fast_1 && this.transform.position.x > 2 && this.transform.position.y < 2 && this.transform.position.y > -2){

if(big_cuboid.transform.eulerAngles.z > 11 && big_cuboid.transform.eulerAngles.z < 349){

this.transform.position.y = 4;
Play.big_cuboid_moving_fast_1 = false;

}

}

if(Play.big_cuboid_moving_fast_2 && this.transform.position.x < -2 && this.transform.position.y < 2 && this.transform.position.y > -2){

if(big_cuboid.transform.eulerAngles.z > 11 && big_cuboid.transform.eulerAngles.z < 349){

this.transform.position.y = 4;
Play.big_cuboid_moving_fast_2 = false;

}

}

if(this.transform.position.y > -4){

Formations.formations_boolean = true;

}else{

Formations.formations_boolean = false;

}

if(GameObject.Find("Pause Menu(Clone)")){

Destroy(this.GetComponent(Rigidbody));

}else{

this.gameObject.AddComponent(Rigidbody);

}

if(Play.first_formation){
if(!Play.blue_cylinder_fallen/*blue_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 8.5 && this.transform.position.x > -2)){

blue_cylinder_halo.animation.Play("Blue Cylinder Halo Animation First Formation");
Play.score_int += 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
GameObject.Find("Score Music 2").audio.Play();
}
}

if(this.transform.position.y - GameObject.Find("Base").transform.position.y < 1 && this.transform.position.y - GameObject.Find("Base").transform.position.y > 0){

Play.score_int -= 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
Destroy(GameObject.Find("Blue Ball(Clone)"));

}

if(!Play.red_cylinder_fallen/*red_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -10 && this.transform.position.x > -16)){

Handheld.Vibrate();
GameObject.Find("Red Cylinder").animation.Play("Red Cylinder Falling Animation First Formation");
Play.red_cylinder_fallen = true;
Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));

}
}

if(!Play.green_cylinder_fallen/*green_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -2 && this.transform.position.x > -8)){

Handheld.Vibrate();
GameObject.Find("Green Cylinder").animation.Play("Green Cylinder Falling Animation First Formation");
Play.green_cylinder_fallen = true;
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));

}
}

if(!Play.yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 16 && this.transform.position.x > 10)){

Handheld.Vibrate();
GameObject.Find("Yellow Cylinder").animation.Play("Yellow Cylinder Falling Animation First Formation");
Play.yellow_cylinder_fallen = true;
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

}
}
}


if(Play.second_formation){
if(!Play.blue_cylinder_fallen/*blue_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -2 && this.transform.position.x > -8)){

blue_cylinder_halo.animation.Play("Blue Cylinder Halo Animation Second Formation");
Play.score_int += 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
GameObject.Find("Score Music 2").audio.Play();
}
}

if(this.transform.position.y - GameObject.Find("Base").transform.position.y < 1 && this.transform.position.y - GameObject.Find("Base").transform.position.y > 0){

Play.score_int -= 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
Destroy(GameObject.Find("Blue Ball(Clone)"));

}

if(!Play.red_cylinder_fallen/*red_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -10 && this.transform.position.x > -16)){

Handheld.Vibrate();
GameObject.Find("Red Cylinder").animation.Play("Red Cylinder Falling Animation First Formation");
Play.red_cylinder_fallen = true;
Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));

}
}

if(!Play.green_cylinder_fallen/*green_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 8.5 && this.transform.position.x > -2)){

Handheld.Vibrate();
GameObject.Find("Green Cylinder").animation.Play("Green Cylinder Falling Animation Second Formation");
Play.green_cylinder_fallen = true;
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));

}
}

if(!Play.yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 16 && this.transform.position.x > 10)){

Handheld.Vibrate();
GameObject.Find("Yellow Cylinder").animation.Play("Yellow Cylinder Falling Animation First Formation");
Play.yellow_cylinder_fallen = true;
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

}
}
}


if(Play.third_formation){
if(!Play.blue_cylinder_fallen/*blue_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 8.5 && this.transform.position.x > -2)){

blue_cylinder_halo.animation.Play("Blue Cylinder Halo Animation First Formation");
Play.score_int += 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
GameObject.Find("Score Music 2").audio.Play();
}
}

if(this.transform.position.y - GameObject.Find("Base").transform.position.y < 1 && this.transform.position.y - GameObject.Find("Base").transform.position.y > 0){

Play.score_int -= 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
Destroy(GameObject.Find("Blue Ball(Clone)"));

}

if(!Play.red_cylinder_fallen/*red_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 16 && this.transform.position.x > 10)){

Handheld.Vibrate();
GameObject.Find("Red Cylinder").animation.Play("Red Cylinder Falling Animation Third Formation");
Play.red_cylinder_fallen = true;
Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));

}
}

if(!Play.green_cylinder_fallen/*green_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -2 && this.transform.position.x > -8)){

Handheld.Vibrate();
GameObject.Find("Green Cylinder").animation.Play("Green Cylinder Falling Animation First Formation");
Play.green_cylinder_fallen = true;
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));

}
}

if(!Play.yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -10 && this.transform.position.x > -16)){

Handheld.Vibrate();
GameObject.Find("Yellow Cylinder").animation.Play("Yellow Cylinder Falling Animation Third Formation");
Play.yellow_cylinder_fallen = true;
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

}
}
}


if(Play.fourth_formation){
if(!Play.blue_cylinder_fallen/*blue_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -10 && this.transform.position.x > -16)){

blue_cylinder_halo.animation.Play("Blue Cylinder Halo Animation Fourth Formation");
Play.score_int += 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
GameObject.Find("Score Music 2").audio.Play();
}
}

if(this.transform.position.y - GameObject.Find("Base").transform.position.y < 1 && this.transform.position.y - GameObject.Find("Base").transform.position.y > 0){

Play.score_int -= 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
Destroy(GameObject.Find("Blue Ball(Clone)"));

}

if(!Play.red_cylinder_fallen/*red_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 8.5 && this.transform.position.x > -2)){

Handheld.Vibrate();
GameObject.Find("Red Cylinder").animation.Play("Red Cylinder Falling Animation Fourth Formation");
Play.red_cylinder_fallen = true;
Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));

}
}

if(!Play.green_cylinder_fallen/*green_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -2 && this.transform.position.x > -8)){

Handheld.Vibrate();
GameObject.Find("Green Cylinder").animation.Play("Green Cylinder Falling Animation First Formation");
Play.green_cylinder_fallen = true;
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));

}
}

if(!Play.yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 16 && this.transform.position.x > 10)){

Handheld.Vibrate();
GameObject.Find("Yellow Cylinder").animation.Play("Yellow Cylinder Falling Animation First Formation");
Play.yellow_cylinder_fallen = true;
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

}
}
}


if(Play.fifth_formation){
if(!Play.blue_cylinder_fallen/*blue_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 8.5 && this.transform.position.x > -2)){

blue_cylinder_halo.animation.Play("Blue Cylinder Halo Animation First Formation");
Play.score_int += 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
GameObject.Find("Score Music 2").audio.Play();
}
}

if(this.transform.position.y - GameObject.Find("Base").transform.position.y < 1 && this.transform.position.y - GameObject.Find("Base").transform.position.y > 0){

Play.score_int -= 1;
Play.score.text = Play.score_int.ToString();
this.transform.position.y = -20;
Destroy(GameObject.Find("Blue Ball(Clone)"));

}

if(!Play.red_cylinder_fallen/*red_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -10 && this.transform.position.x > -16)){

Handheld.Vibrate();
GameObject.Find("Red Cylinder").animation.Play("Red Cylinder Falling Animation First Formation");
Play.red_cylinder_fallen = true;
Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));

}
}

if(!Play.green_cylinder_fallen/*green_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < 16 && this.transform.position.x > 10)){

Handheld.Vibrate();
GameObject.Find("Green Cylinder").animation.Play("Green Cylinder Falling Animation Fifth Formation");
Play.green_cylinder_fallen = true;
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));

}
}

if(!Play.yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -12*/){
if((this.transform.position.y < -8 && this.transform.position.y > -8.5) && (this.transform.position.x < -2 && this.transform.position.x > -8)){

Handheld.Vibrate();
GameObject.Find("Yellow Cylinder").animation.Play("Yellow Cyinder Falling Animation Fifth Formation");
Play.yellow_cylinder_fallen = true;
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

}
}
}


var distance = this.transform.position.y - big_cuboid.transform.position.y;
var distance_2 = this.transform.position.y - small_cuboid_1.transform.position.y;
var distance_3 = this.transform.position.y - small_cuboid_2.transform.position.y;


if(distance > 6){

this.rigidbody.velocity = Vector3(-10, -9.81, 0);

}

if(distance > 4 && distance <= 6){

this.rigidbody.velocity = Vector3(-5, -9.81, 0);


}

if(distance <= 4){

if ((big_cuboid.transform.rotation.z > 0) && (this.transform.position.x > 0)){

this.rigidbody.velocity = Vector3(-1, -9.81, 0);

}

if((big_cuboid.transform.rotation.z < 0) && (this.transform.position.x < 0)){

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