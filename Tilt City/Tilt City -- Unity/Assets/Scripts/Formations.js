#pragma strict

var red_cylinder : GameObject;
red_cylinder = GameObject.Find("Red Cylinder");
var green_cylinder : GameObject;
green_cylinder = GameObject.Find("Green Cylinder");
var blue_cylinder : GameObject;
blue_cylinder = GameObject.Find("Blue Cylinder");
var yellow_cylinder : GameObject;
yellow_cylinder = GameObject.Find("Yellow Cylinder");
var red_cylinder_halo : GameObject;
red_cylinder_halo = GameObject.Find("Red Cylinder Halo");
var green_cylinder_halo : GameObject;
green_cylinder_halo = GameObject.Find("Green Cylinder Halo");
var blue_cylinder_halo : GameObject;
blue_cylinder_halo = GameObject.Find("Blue Cylinder Halo");
var yellow_cylinder_halo : GameObject;
yellow_cylinder_halo = GameObject.Find("Yellow Cylinder Halo");
public static var red_ball : GameObject;
red_ball = GameObject.Find("Red Ball");
public static var glowing_red_ball : GameObject;
glowing_red_ball = GameObject.Find("Glowing Red Ball");
public static var green_ball : GameObject;
green_ball = GameObject.Find("Green Ball");
public static var glowing_green_ball : GameObject;
glowing_green_ball = GameObject.Find("Glowing Green Ball");
public static var blue_ball : GameObject;
blue_ball = GameObject.Find("Blue Ball");
public static var glowing_blue_ball : GameObject;
glowing_blue_ball = GameObject.Find("Glowing Blue Ball");
public static var yellow_ball : GameObject;
yellow_ball = GameObject.Find("Yellow Ball");
public static var glowing_yellow_ball : GameObject;
glowing_yellow_ball = GameObject.Find("Glowing Yellow Ball");
public static var time_intervals : Array;
time_intervals = [10, 15, 20];
public static var formations : Array;
formations = ["First", "Second", "Third", "Fourth", "Fifth"];
public static var formation : String;
public static var formations_boolean : boolean;
formations_boolean = true;
public static var two_cylinders_formations : boolean;
two_cylinders_formations = false;

function Start () {

if(!Difficulty_Easy.easy){

while(true){

yield WaitForSeconds(Random.Range(10, 20));

if(Play.score_int > 10){

if(!GameObject.Find("Pause Menu(Clone)")){

if(!two_cylinders_formations){

if(formations_boolean){

formation = formations[Random.Range(0, formations.length)];

if(formation == "First" && !Play.first_formation){

Three_Two_One();

}

if(formation == "Second" && !Play.second_formation){

Three_Two_One();

}

if(formation == "Third" && !Play.third_formation){

Three_Two_One();

}

if(formation == "Fourth" && !Play.fourth_formation){

Three_Two_One();

}

if(formation == "Fifth" && !Play.fifth_formation){

Three_Two_One();

}

}

}

}

}

}

}

}

function Update () {

if(!Difficulty_Easy){

if(Play.first_formation){

if((red_cylinder.transform.position.x != -12 && green_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.x != -5 && red_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

if((blue_cylinder.transform.position.x != 5 && yellow_cylinder.transform.position.y == -20) || (yellow_cylinder.transform.position.x != 12 && blue_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

}


if(Play.second_formation){

if((red_cylinder.transform.position.x != -12 && blue_cylinder.transform.position.y == -20) || (blue_cylinder.transform.position.x != -5 && red_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

if((green_cylinder.transform.position.x != 5 && yellow_cylinder.transform.position.y == -20) || (yellow_cylinder.transform.position.x != 12 && green_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

}


if(Play.third_formation){

if((yellow_cylinder.transform.position.x != -12 && green_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.x != -5 && yellow_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

if((blue_cylinder.transform.position.x != 5 && red_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.x != 12 && blue_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

}


if(Play.fourth_formation){

if((blue_cylinder.transform.position.x != -12 && green_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.x != -5 && blue_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

if((red_cylinder.transform.position.x != 5 && yellow_cylinder.transform.position.y == -20) || (yellow_cylinder.transform.position.x != 12 && red_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

}


if(Play.fifth_formation){

if((red_cylinder.transform.position.x != -12 && yellow_cylinder.transform.position.y == -20) || (yellow_cylinder.transform.position.x != -5 && red_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

if((blue_cylinder.transform.position.x != 5 && green_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.x != 12 && blue_cylinder.transform.position.y == -20)){

two_cylinders_formations = true;

}

}

}

}


function Movement (gameobject : GameObject, vector : Vector3, time : float){

	iTween.MoveTo(gameobject, vector, time);

}


function First_Formation(){

Movement(red_cylinder, Vector3(-12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(red_cylinder_halo, Vector3(-12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(green_cylinder, Vector3(-5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(green_cylinder_halo, Vector3(-5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder, Vector3(5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder_halo, Vector3(5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder, Vector3(12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder_halo, Vector3(12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);

}


function Second_Formation(){

Movement(red_cylinder, Vector3(-12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(red_cylinder_halo, Vector3(-12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(green_cylinder, Vector3(5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(green_cylinder_halo, Vector3(5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder, Vector3(-5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder_halo, Vector3(-5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder, Vector3(12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder_halo, Vector3(12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);

}


function Third_Formation(){

Movement(red_cylinder, Vector3(12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(red_cylinder_halo, Vector3(12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(green_cylinder, Vector3(-5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(green_cylinder_halo, Vector3(-5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder, Vector3(5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder_halo, Vector3(5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder, Vector3(-12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder_halo, Vector3(-12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);

}


function Fourth_Formation(){

Movement(red_cylinder, Vector3(5, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(red_cylinder_halo, Vector3(5, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(green_cylinder, Vector3(-5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(green_cylinder_halo, Vector3(-5, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder, Vector3(-12, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder_halo, Vector3(-12, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder, Vector3(12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder_halo, Vector3(12, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);

}


function Fifth_Formation(){

Movement(red_cylinder, Vector3(-12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(red_cylinder_halo, Vector3(-12, red_cylinder.transform.position.y, red_cylinder.transform.position.z), 0.5);
Movement(green_cylinder, Vector3(12, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(green_cylinder_halo, Vector3(12, green_cylinder.transform.position.y, green_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder, Vector3(5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(blue_cylinder_halo, Vector3(5, blue_cylinder.transform.position.y, blue_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder, Vector3(-5, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);
Movement(yellow_cylinder_halo, Vector3(-5, yellow_cylinder.transform.position.y, yellow_cylinder.transform.position.z), 0.5);

}


function Three_Two_One () {

Instantiate(GameObject.Find("Formation 3"));
Instantiate(GameObject.Find("Formation 2"));
Instantiate(GameObject.Find("Formation 1"));

iTween.MoveTo(GameObject.Find("Formation 3(Clone)"), Vector3(24, 16, 20), 1);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(1);
Destroy(GameObject.Find("Formation 3(Clone)"));
iTween.MoveTo(GameObject.Find("Formation 2(Clone)"), Vector3(24, 16, 20), 1);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(1);
Destroy(GameObject.Find("Formation 2(Clone)"));
iTween.MoveTo(GameObject.Find("Formation 1(Clone)"), Vector3(24, 16, 20), 1);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(1);
Destroy(GameObject.Find("Formation 1(Clone)"));
GameObject.Find("Countdown Finish Beep").audio.Play();

if(!Play.two_cylinders){
if(formation == "First"){

First_Formation();
Play.first_formation = true;
Play.second_formation = false;
Play.third_formation = false;
Play.fourth_formation = false;
Play.fifth_formation = false;


}

if(formation == "Second"){

Second_Formation();
Play.first_formation = false;
Play.second_formation = true;
Play.third_formation = false;
Play.fourth_formation = false;
Play.fifth_formation = false;

}

if(formation == "Third"){

Third_Formation();
Play.first_formation = false;
Play.second_formation = false;
Play.third_formation = true;
Play.fourth_formation = false;
Play.fifth_formation = false;

}

if(formation == "Fourth"){

Fourth_Formation();
Play.first_formation = false;
Play.second_formation = false;
Play.third_formation = false;
Play.fourth_formation = true;
Play.fifth_formation = false;

}

if(formation == "Fifth"){

Fifth_Formation();
Play.first_formation = false;
Play.second_formation = false;
Play.third_formation = false;
Play.fourth_formation = false;
Play.fifth_formation = true;

}

}

}