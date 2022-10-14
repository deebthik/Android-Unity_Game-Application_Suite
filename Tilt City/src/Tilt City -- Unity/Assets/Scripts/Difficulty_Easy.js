#pragma strict

var gui_skin : GUISkin;
var toggle_false : Texture;
var toggle_true : Texture;
public static var easy : boolean;
easy = false;

function Start () {

if(PlayerPrefs.GetInt("difficulty easy", 0) == 0){

easy = false;

}else{

easy = true;

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
gui_skin.label.fontSize = Screen.height/14;

GUI.Label(Rect(Screen.width/1.35, Screen.height/12, 1000, 500), "Difficulty");

gui_skin.label.fontSize = Screen.height/15;
GUI.Label(Rect(Screen.width/1.325, Screen.height/4.575, 1000, 500), "Easy");


if(!easy){

gui_skin.button.normal.background = toggle_false;
gui_skin.button.hover.background = toggle_false;
gui_skin.button.active.background = toggle_false;

}

if(!easy){

if(GUI.Button(Rect(Screen.width/1.5, Screen.height/5, Screen.width/13, Screen.height/8), " ")){

easy = true;
PlayerPrefs.SetInt("difficulty easy", 1);
PlayerPrefs.SetInt("difficulty medium", 0);
PlayerPrefs.SetInt("difficulty hard", 0);
Difficulty_Medium.medium = false;
Difficulty_Hard.hard = false;

}

}

if(easy){

if(GUI.Button(Rect(Screen.width/1.5, Screen.height/5, Screen.width/13, Screen.height/8), " ")){

easy = false;
PlayerPrefs.SetInt("difficulty easy", 0);

}

}

if(easy){

gui_skin.button.normal.background = toggle_true;
gui_skin.button.hover.background = toggle_true;
gui_skin.button.active.background = toggle_true;

}



}

}