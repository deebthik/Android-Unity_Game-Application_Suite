#pragma strict

var gui_skin_3 : GUISkin;
public static var trial_success : boolean;
trial_success = false;
public static var wait_for_2_seconds : boolean;
wait_for_2_seconds = false;
public static var numbers_1_to_4 : Array;
numbers_1_to_4 = [1, 2, 3, 4];

function Start () {

}

function Update () {

if(Tutorial.red_ball_tutorial){

if((Tutorial.clone.transform.position.y < -8 && Tutorial.clone.transform.position.y > -8.5 && Tutorial.clone.transform.position.x < -10 && Tutorial.clone.transform.position.x > -16)){

trial_success = true;
wait_for_2_seconds = false;
Tutorial.red_ball_tutorial = false;
PlayerPrefs.SetInt("tutorial random balls instantiate", numbers_1_to_4[Random.Range(0, numbers_1_to_4.length)]);

}

}

if(Tutorial.green_ball_tutorial){

if((Tutorial.clone.transform.position.y < -8 && Tutorial.clone.transform.position.y > -8.5 && Tutorial.clone.transform.position.x < -2 && Tutorial.clone.transform.position.x > -8)){

trial_success = true;
wait_for_2_seconds = false;
Tutorial.green_ball_tutorial = false;
PlayerPrefs.SetInt("tutorial random balls instantiate", numbers_1_to_4[Random.Range(0, numbers_1_to_4.length)]);

}

}

if(Tutorial.blue_ball_tutorial){

if((Tutorial.clone.transform.position.y < -8 && Tutorial.clone.transform.position.y > -8.5 && Tutorial.clone.transform.position.x < 8.5 && Tutorial.clone.transform.position.x > -2)){

trial_success = true;
wait_for_2_seconds = false;
Tutorial.blue_ball_tutorial = false;
PlayerPrefs.SetInt("tutorial random balls instantiate", numbers_1_to_4[Random.Range(0, numbers_1_to_4.length)]);

}

}

if(Tutorial.yellow_ball_tutorial){

if((Tutorial.clone.transform.position.y < -8 && Tutorial.clone.transform.position.y > -8.5 && Tutorial.clone.transform.position.x < 16 && Tutorial.clone.transform.position.x > 10)){

trial_success = true;
wait_for_2_seconds = false;
Tutorial.yellow_ball_tutorial = false;
PlayerPrefs.SetInt("tutorial random balls instantiate", numbers_1_to_4[Random.Range(0, numbers_1_to_4.length)]);

}

}

}

function OnGUI(){

GUI.skin = gui_skin_3;

if(Tutorial.play_trial){

if(trial_success){

GameObject.Find("Small Cuboid 1").transform.rotation = Quaternion.Euler(0, 0, 0);
GameObject.Find("Small Cuboid 2").transform.rotation = Quaternion.Euler(0, 0, 0);
GameObject.Find("Big Cuboid").transform.rotation = Quaternion.Euler(0, 0, 0);

GUI.Label(Rect(Screen.width/3, Screen.height/20, 1000, 500), "EXCELLENT !");
gui_skin_3.label.fixedWidth = Screen.width/1;
gui_skin_3.label.fixedHeight = Screen.height/5;
gui_skin_3.label.fontSize = Screen.height/10;

GameObject.Find("Score").GetComponent(TextMesh).text = "0";

Tutorial.try_again = false;

Wait_For_2_Seconds();

if(wait_for_2_seconds){

Tutorial.surprises_instruction = true;

}

}

}

}


function Wait_For_2_Seconds(){

yield WaitForSeconds(2);
wait_for_2_seconds = true;

}
