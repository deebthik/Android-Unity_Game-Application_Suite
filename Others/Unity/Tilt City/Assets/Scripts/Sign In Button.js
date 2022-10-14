#pragma strict

var gui_skin : GUISkin;
var sign_in_button : Texture;

function Start () {

}

function Update () {

}

function OnGUI(){

if(Menu.statistics){

GUI.depth = 0;
GUI.skin = gui_skin;

gui_skin.button.normal.background = sign_in_button;
gui_skin.button.active.background = sign_in_button;
gui_skin.button.hover.background = sign_in_button;

if(GUI.Button(Rect(Screen.width/1.52, Screen.height/10, Screen.width/3, Screen.height/8), "")){

PlayerPrefs.SetInt("sign in", 1);

}

}

}