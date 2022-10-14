#pragma strict

var gui_skin : GUISkin;
var toggle_false : Texture;
var toggle_true : Texture;
public static var hard : boolean;
hard = false;

function Start () {

if(PlayerPrefs.GetInt("difficulty hard", 0) == 0){

hard = false;

}else{

hard = true;

}

}

function Update () {

}


function OnGUI(){

if(Menu.options && GameObject.Find("Big Cuboid").transform.position.y != 1){

GUI.depth = 0;
GUI.skin = gui_skin;

gui_skin.label.fixedWidth = Screen.width/2;
gui_skin.label.fixedHeight = Screen.height/10;
gui_skin.label.fontSize = Screen.height/15;

GUI.Label(Rect(Screen.width/1.325, Screen.height/1.89, 1000, 500), "Hard");


if(!hard){

gui_skin.button.normal.background = toggle_false;
gui_skin.button.hover.background = toggle_false;
gui_skin.button.active.background = toggle_false;

}

if(!hard){

if(GUI.Button(Rect(Screen.width/1.5, Screen.height/1.95, Screen.width/13, Screen.height/8), " ")){

hard = true;
PlayerPrefs.SetInt("difficulty hard", 1);
PlayerPrefs.SetInt("difficulty medium", 0);
PlayerPrefs.SetInt("difficulty easy", 0);
Difficulty_Easy.easy = false;
Difficulty_Medium.medium = false;

}

}

if(hard){

if(GUI.Button(Rect(Screen.width/1.5, Screen.height/1.95, Screen.width/13, Screen.height/8), " ")){

hard = false;
PlayerPrefs.SetInt("difficulty hard", 0);

}

}

if(hard){

gui_skin.button.normal.background = toggle_true;
gui_skin.button.hover.background = toggle_true;
gui_skin.button.active.background = toggle_true;

}



}

}