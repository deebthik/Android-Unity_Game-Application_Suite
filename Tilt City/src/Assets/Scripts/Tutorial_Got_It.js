#pragma strict

var gui_skin_3 : GUISkin;
public static var wait_for_2_seconds : boolean;
var red_cylinder : GameObject;
red_cylinder = GameObject.Find("Red Cylinder");
var red_cylinder_halo : GameObject;
red_cylinder_halo = GameObject.Find("Red Cylinder Halo");
var green_cylinder : GameObject;
green_cylinder = GameObject.Find("Green Cylinder");
var green_cylinder_halo : GameObject;
green_cylinder_halo = GameObject.Find("Green Cylinder Halo");
var blue_cylinder : GameObject;
blue_cylinder = GameObject.Find("Blue Cylinder");
var blue_cylinder_halo : GameObject;
blue_cylinder_halo = GameObject.Find("Blue Cylinder Halo");
var yellow_cylinder : GameObject;
yellow_cylinder = GameObject.Find("Yellow Cylinder");
var yellow_cylinder_halo : GameObject;
yellow_cylinder_halo = GameObject.Find("Yellow Cylinder Halo");



function Start () {

}

function Update () {

}

function OnGUI(){

GUI.skin = gui_skin_3;

if(Tutorial.got_it){

Tutorial.surprises_instruction = false;
Tutorial.game_over_instruction = false;
Tutorial.play_trial = false;
Tutorial.main_platform_instruction = false;

GUI.Label(Rect(Screen.width/2.5, Screen.height/20, 1000, 500), "Got it ?");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/5;
gui_skin_3.label.fontSize = Screen.height/10;

//Wait_For_2_Seconds();

if(GUI.Button(Rect(Screen.width/5.5, Screen.height/1.45, Screen.width/4, Screen.height/10), "I Got it !")){

Tutorial_Toggle_Slider.tutorial_on = false;
PlayerPrefs.SetInt("tutorial toggle slider value", 0);
Tutorial.got_it = false;
Tutorial.surprises_instruction = false;
Tutorial.play_trial = false;
Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 0;

Move_Cylinders_Up();
PlayVariable();

}

if(GUI.Button(Rect(Screen.width/2, Screen.height/1.45, Screen.width/4, Screen.height/10), "I didn't get it !")){

Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 1;
Tutorial_Toggle_Slider.tutorial_on = true;
Tutorial.main_platform_instruction = true;
Tutorial.got_it = false;
Tutorial.wait_for_2_seconds = false;
Tutorial.instantiate_ball = true;
Tutorial.secondary_platform_instruction = false;
Tutorial.ball_instruction = false;
Tutorial.play_trial = false;
Tutorial.try_again = false;
Tutorial.surprises_instruction = false;
Tutorial_Trial_Success.trial_success = false;
Tutorial_Trial_Success.wait_for_2_seconds = false;
Play.score_int = 0;
Tutorial.repeated_instantiate = false;
Tutorial.got_it = false;

Move_Cylinders_Up();

}

}

/*if(wait_for_2_seconds){

Tutorial_Toggle_Slider.tutorial_on = false;
PlayerPrefs.SetInt("tutorial toggle slider value", 0);
Tutorial.got_it = false;
Tutorial.surprises_instruction = false;
Tutorial.play_trial = false;
Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 0;

Tutorial_321.tutorial_over = true; 

}*/

}




function Wait_For_2_Seconds(){

yield WaitForSeconds(2);

wait_for_2_seconds = true;

}


function Play_Movement (gameobject : GameObject, vector : Vector3, time : float){

	yield WaitForSeconds(1);
	iTween.MoveTo(gameobject, vector, time);
}


function PlayVariable(){

if(!Tutorial_Toggle_Slider.tutorial_on){

yield WaitForSeconds(1);
GameObject.Find("3(Clone)").animation.Play();
yield WaitForSeconds(0.5);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(0.5);
Destroy(GameObject.Find("3(Clone)"));
GameObject.Find("2(Clone)").animation.Play();
yield WaitForSeconds(0.5);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(0.5);
Destroy(GameObject.Find("2(Clone)"));
GameObject.Find("1(Clone)").animation.Play();
yield WaitForSeconds(0.5);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(0.5);
Destroy(GameObject.Find("1(Clone)"));
yield WaitForSeconds(0.5);
Play.play = true;
GameObject.Find("Countdown Finish Beep").audio.Play();

}

}


function Move_Cylinders_Up(){

red_cylinder.animation.Stop();
green_cylinder.animation.Stop();
blue_cylinder.animation.Stop();
yellow_cylinder.animation.Stop();


Play_Movement(red_cylinder, Vector3(-12, -12, red_cylinder.transform.position.z), 1);
Play_Movement(red_cylinder_halo, Vector3(-12, -10, red_cylinder_halo.transform.position.z), 1);
Play_Movement(green_cylinder, Vector3(-5, -12, green_cylinder.transform.position.z), 1);
Play_Movement(green_cylinder_halo, Vector3(-5, -10, green_cylinder_halo.transform.position.z), 1);
Play_Movement(blue_cylinder, Vector3(5, -12, blue_cylinder.transform.position.z), 1);
Play_Movement(blue_cylinder_halo, Vector3(5, -10, blue_cylinder_halo.transform.position.z), 1);
Play_Movement(yellow_cylinder, Vector3(12, -12, yellow_cylinder.transform.position.z), 1);
Play_Movement(yellow_cylinder_halo, Vector3(12, -10, yellow_cylinder_halo.transform.position.z), 1);

}
