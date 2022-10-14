#pragma strict

var gui_skin : GUISkin;
var leaderboard_button : Texture;

function Start () {

}

function Update () {

}

function OnGUI(){

if(Menu.statistics){

GUI.depth = 0;
GUI.skin = gui_skin;

gui_skin.button.normal.background = leaderboard_button;
gui_skin.button.active.background = leaderboard_button;
gui_skin.button.hover.background = leaderboard_button;

if(GUI.Button(Rect(Screen.width/80, Screen.height/1.325, Screen.width/2.55, Screen.height/9), "")){

PlayerPrefs.SetInt("show leaderboard", 1);

}

}

}