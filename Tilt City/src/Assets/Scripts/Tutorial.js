#pragma strict

var gui_skin_3 : GUISkin;
var tilt_icon : Texture;
var touch_icon : Texture;
var touch_icon_inverted : Texture;
public static var main_platform_instruction : boolean;
main_platform_instruction = true;
public static var secondary_platform_instruction : boolean;
secondary_platform_instruction = false;
public static var ball_instruction : boolean;
ball_instruction = false;
public static var instantiate_ball : boolean;
instantiate_ball = true;
public static var wait_for_2_seconds : boolean;
wait_for_2_seconds = false;
public static var play_trial : boolean;
play_trial = false;
public static var try_again : boolean;
try_again = false;
public static var repeated_instantiate : boolean;
repeated_instantiate = false;
public static var surprises_instruction : boolean;
surprises_instruction = false;
public static var game_over_instruction : boolean;
game_over_instruction = false;
public static var got_it : boolean;
got_it = false;
public static var clone : GameObject;
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
public static var balls : Array;
balls = [red_ball, green_ball, blue_ball, yellow_ball, glowing_red_ball, glowing_green_ball, glowing_blue_ball, glowing_yellow_ball]; 
public static var red_ball_tutorial : boolean;
red_ball_tutorial = false;
public static var green_ball_tutorial : boolean;
green_ball_tutorial = false;
public static var blue_ball_tutorial : boolean;
blue_ball_tutorial = false;
public static var yellow_ball_tutorial : boolean;
yellow_ball_tutorial = false;
var balls_tutorial_boolean : Array;
balls_tutorial_boolean = [red_ball_tutorial, green_ball_tutorial, blue_ball_tutorial, yellow_ball_tutorial];

function Start () {

}

function Update () {

if(Input.GetKeyDown(KeyCode.Escape)){

if(!GameObject.Find("Pause Menu(Clone)") && GameObject.Find("Game Over Plane").transform.position.y == 20){

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 1 && GameObject.Find("Big Cuboid").transform.position.y == 1){

Tutorial_Toggle_Slider.tutorial_on = false;
Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 0;

GameObject.Find("Transparent Plane").transform.position.x = 0;

Instantiate(GameObject.Find("Pause Menu"), Vector3(0, 0, 5), Quaternion.Euler(270, 0, 0));
Instantiate(GameObject.Find("Play Button"), Vector3(0, 2.5, 1), Quaternion.Euler(90, 180, 0));
Instantiate(GameObject.Find("Restart Button"), Vector3(0, 0.9, 1), Quaternion.Euler(90, 180, 0));
Instantiate(GameObject.Find("Options Button"), Vector3(0, -0.7, 1), Quaternion.Euler(90, 180, 0));
Instantiate(GameObject.Find("Exit Button"), Vector3(0, -2.3, 1), Quaternion.Euler(90, 180, 0));

PlayerPrefs.SetInt("is the game paused from tutorial?", 1);

}

}

}

}


function OnGUI(){

if(Tutorial_Toggle_Slider.tutorial_on && GameObject.Find("Big Cuboid").transform.position.y == 1){

if(!ball_instruction){

GameObject.Find("Transparent Plane").transform.position.x = 0;

}

GUI.skin = gui_skin_3;

if(main_platform_instruction){

if(GameObject.Find("Big Cuboid").transform.position.y == 1){

GameObject.Find("Big Cuboid (Clone)").transform.rotation.z = -Input.acceleration.x * Accelerometer_Rotate.tilt_sensitivity;

}

if((GameObject.Find("Big Cuboid (Clone)").transform.eulerAngles.z > 20) && (GameObject.Find("Big Cuboid (Clone)").transform.eulerAngles.z < 180)){

//this.transform.rotation.z = -Input.acceleration.x * 0.5;
GameObject.Find("Big Cuboid (Clone)").transform.rotation = Quaternion.Euler(0, 0, 19.9);

}

if((GameObject.Find("Big Cuboid (Clone)").transform.eulerAngles.z > 270) && (GameObject.Find("Big Cuboid (Clone)").transform.eulerAngles.z < 340)){

//this.transform.rotation.z = -Input.acceleration.x * 0.5;
GameObject.Find("Big Cuboid (Clone)").transform.rotation = Quaternion.Euler(0, 0, -19.9);

}

GameObject.Find("Big Cuboid (Clone)").transform.position.x = 0;

GUI.Label(Rect(Screen.width/6, Screen.height/3, 1000, 500), "Tilt the device to tilt the main platform");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/10;
gui_skin_3.label.fontSize = Screen.height/15;

GUI.DrawTexture(Rect(Screen.width/2.6, Screen.height/2.1, Screen.width/4.2, Screen.height/4.5), tilt_icon);

gui_skin_3.button.fontSize = Screen.height/16;


if(GUI.Button(Rect(Screen.width/2.8, Screen.height/1.45, Screen.width/3.5, Screen.height/10), "Okay, Got It !")){

GameObject.Find("Big Cuboid").transform.rotation = Quaternion.Euler(0, 0, 0);

GameObject.Find("Big Cuboid (Clone)").transform.position.x = -100;

main_platform_instruction = false;
secondary_platform_instruction = true;

}

}


if(secondary_platform_instruction){

if (Input.touchCount == 2)
{
    var touch1 = Input.touches[0];
    var touch2 = Input.touches[1];
    if ((touch1.position.x < Screen.width/2 && touch2.position.x > Screen.width/2) || (touch1.position.x > Screen.width/2 && touch2.position.x < Screen.width/2))
    {
    	/*if ((touch1.phase == TouchPhase.Began && touch2.phase == TouchPhase.Began) || (touch1.phase == TouchPhase.Stationary && touch2.phase == TouchPhase.Began) || (touch1.phase == TouchPhase.Began && touch2.phase == TouchPhase.Stationary) || (touch1.phase == TouchPhase.Canceled && touch2.phase == TouchPhase.Canceled)){
        Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, 0), 0.1);
        Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, 0), 0.1);
        }
        
        if((touch1.phase == TouchPhase.Stationary && touch2.phase == TouchPhase.Ended)){
        Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, 25), 0.1);
        Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, 25), 0.1);
        }
        
        if(touch1.phase == TouchPhase.Ended && touch2.phase == TouchPhase.Stationary){
        Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, -25), 0.1);
        Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, -25), 0.1);
        }*/

        if(touch1.phase == TouchPhase.Stationary && touch2.phase == TouchPhase.Began){
        Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, 25), 0.1);
        Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, 25), 0.1);
        }
		
        if(touch2.phase == TouchPhase.Stationary && touch1.phase == TouchPhase.Began){
        Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, -25), 0.1);
        Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, -25), 0.1);
        }
        
    }
    

}

if (Input.touchCount == 1){

var touch = Input.touches[0];

if (touch.position.x < Screen.width/2){

if(touch.phase == TouchPhase.Began){
Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, 25), 0.1);
Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, 25), 0.1);
}

if(touch.phase == TouchPhase.Ended){
Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, 0), 0.1);
Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, 0), 0.1);
}

}

if(touch.position.x > Screen.width/2){

if(touch.phase == TouchPhase.Began){
Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, -25), 0.1);
Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, -25), 0.1);
}

if(touch.phase == TouchPhase.Ended){
Rotation(GameObject.Find("Small Cuboid 1 (Clone)").transform, Vector3(0, 0, 0), 0.1);
Rotation(GameObject.Find("Small Cuboid 2 (Clone)").transform, Vector3(0, 0, 0), 0.1);
}

}

}




GameObject.Find("Small Cuboid 1 (Clone)").transform.position.x = -9.240073;
GameObject.Find("Small Cuboid 2 (Clone)").transform.position.x = 9.055124;

GUI.Label(Rect(Screen.width/17, Screen.height/4, 1000, 500), "Touch the device on the left and right sides to tilt\nthe secondary platforms left and right respectively");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/5;
gui_skin_3.label.fontSize = Screen.height/15;

GUI.DrawTexture(Rect(Screen.width/1.3, Screen.height/2.3, Screen.width/5, Screen.height/4.5), touch_icon);
GUI.DrawTexture(Rect(Screen.width/40, Screen.height/2.3, Screen.width/5, Screen.height/4.5), touch_icon_inverted);


if(GUI.Button(Rect(Screen.width/2.8, Screen.height/1.45, Screen.width/3.5, Screen.height/10), "Okay, Got It !")){

GameObject.Find("Small Cuboid 1 (Clone)").transform.position.x = -100;
GameObject.Find("Small Cuboid 2 (Clone)").transform.position.x = -100;

secondary_platform_instruction = false;
ball_instruction = true;

}


}



if(ball_instruction){

GameObject.Find("Small Cuboid 1").transform.rotation = Quaternion.Euler(0, 0, 0);
GameObject.Find("Small Cuboid 2").transform.rotation = Quaternion.Euler(0, 0, 0);

if(instantiate_ball){

GameObject.Find("Transparent Plane").transform.position.x = -100;

if(PlayerPrefs.GetInt("tutorial random balls instantiate", 1) == 1){

red_ball_tutorial = true;

}

if(PlayerPrefs.GetInt("tutorial random balls instantiate", 1) == 2){

green_ball_tutorial = true;

}

if(PlayerPrefs.GetInt("tutorial random balls instantiate", 1) == 3){

blue_ball_tutorial = true;

}

if(PlayerPrefs.GetInt("tutorial random balls instantiate", 1) == 4){

yellow_ball_tutorial = true;

}

if(red_ball_tutorial){

clone = Instantiate(GameObject.Find("Red Ball"), Vector3(25, 10, 11), transform.rotation);
clone.name = "Red Ball(Clone)";
instantiate_ball = false;

}

if(green_ball_tutorial){

clone = Instantiate(GameObject.Find("Green Ball"), Vector3(25, 10, 11), transform.rotation);
clone.name = "Green Ball(Clone)";
instantiate_ball = false;

}

if(blue_ball_tutorial){

clone = Instantiate(GameObject.Find("Blue Ball"), Vector3(25, 10, 11), transform.rotation);
clone.name = "Blue Ball(Clone)";
instantiate_ball = false;

}

if(yellow_ball_tutorial){

clone = Instantiate(GameObject.Find("Yellow Ball"), Vector3(25, 10, 11), transform.rotation);
clone.name = "Yellow Ball(Clone)";
instantiate_ball = false;

}

}

Wait_For_1_Seconds();

if(wait_for_2_seconds){
GameObject.Find("Transparent Plane").transform.position.x = 0;

clone.rigidbody.isKinematic = true;

GUI.Label(Rect(Screen.width/15, Screen.height/3.8, 1000, 500), "Put the colored balls in their respective cylinders\nby tilting the platforms in the right time and in the\nright way");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/4;
gui_skin_3.label.fontSize = Screen.height/15;

if(GUI.Button(Rect(Screen.width/2.8, Screen.height/1.45, Screen.width/3.5, Screen.height/10), "Okay, Got It !")){

clone.rigidbody.isKinematic = false;

ball_instruction = false;

}

}

}



if(!ball_instruction && !main_platform_instruction && !secondary_platform_instruction){

GameObject.Find("Transparent Plane").transform.position.x = -100;

play_trial = true;

}


/*if((GameObject.Find("Red Ball(Clone)").transform.position.y < -8 && GameObject.Find("Red Ball(Clone)").transform.position.y > -8.5) && (GameObject.Find("Red Ball(Clone)").transform.position.x < -10 && GameObject.Find("Red Ball(Clone)").transform.position.x > -16)){

GUI.Label(Rect(Screen.width/3, Screen.height/20, 1000, 500), "EXCELLENT !");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/5;
gui_skin_3.label.fontSize = Screen.height/10;

GameObject.Find("Score").GetComponent(TextMesh).text = "0";

}*/


if(Play.score_int == -1){

try_again = true;
PlayerPrefs.SetInt("repeated instantiate", 1);

}

if(try_again){

GUI.Label(Rect(Screen.width/2.5, Screen.height/20, 1000, 500), "Try Again !");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/5;
gui_skin_3.label.fontSize = Screen.height/10;

Play.score_int = 0;

GameObject.Find("Score").GetComponent(TextMesh).text = "0";

if(PlayerPrefs.GetInt("repeated instantiate", 1) == 1){

repeated_instantiate = true;

}

}

if(surprises_instruction){

play_trial = false;

gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/4;
gui_skin_3.label.fontSize = Screen.height/15.5;
GUI.Label(Rect(Screen.width/15, Screen.height/3.55, 1000, 500), "Be ready for surpises which will be preceded by a\n3 second countdown !");

if(GUI.Button(Rect(Screen.width/2.8, Screen.height/1.45, Screen.width/3.5, Screen.height/10), "Okay, Got It !")){

game_over_instruction = true;

}

}



if(game_over_instruction){

surprises_instruction = false;
play_trial = false;

gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/4;
gui_skin_3.label.fontSize = Screen.height/15.5;
GUI.Label(Rect(Screen.width/10, Screen.height/3.55, 1000, 500), "The game will end if 2 cylinders on the right or left\nfall down");

if(GUI.Button(Rect(Screen.width/2.8, Screen.height/1.45, Screen.width/3.5, Screen.height/10), "Okay, Got It !")){

got_it = true;

}

}



}

}


function Rotation (thisTransform : Transform, degrees : Vector3, time : float) {
	var startRotation = thisTransform.rotation;
	var endRotation = Quaternion.Euler(degrees);
	var rate = 1.0/time;
	var t = 0.0;
	while (t < 1.0) {
		t += Time.deltaTime * rate;
		thisTransform.rotation = Quaternion.Slerp(startRotation, endRotation, t);
		yield;
	}
	
	}
	
	
function Wait_For_1_Seconds(){

yield WaitForSeconds(1);
wait_for_2_seconds = true;

}
