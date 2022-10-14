#pragma strict

var gui_skin_2 : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){

if(Menu.options && GameObject.Find("Big Cuboid").transform.position.y != 1){

GUI.depth = 0;
GUI.skin = gui_skin_2;

GUI.Label(Rect(Screen.width/2, Screen.height/1.15, 1000, 500), "ON");
GUI.Label(Rect(Screen.width/1.8, Screen.height/1.15, 1000, 500), "OFF");
gui_skin_2.label.fixedWidth = Screen.width/4;
gui_skin_2.label.fixedHeight = Screen.height/20;
gui_skin_2.label.fontSize = Screen.height/30;

}

}