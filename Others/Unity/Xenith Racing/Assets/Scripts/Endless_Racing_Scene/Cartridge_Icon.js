#pragma strict

var cartridge_icon : Texture;
var gui_skin : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.skin = gui_skin;

	GUI.DrawTexture(Rect(Screen.width/30,Screen.height/20,Screen.width/15,Screen.width/15), cartridge_icon, ScaleMode.StretchToFill, true, 10.0f);
	
	gui_skin.label.fixedWidth = Screen.width/2;
	gui_skin.label.fixedHeight = Screen.height/9;
	gui_skin.label.fontSize = Screen.width/18;
	gui_skin.label.normal.textColor = Color.black;
	
	GUI.Label(Rect(Screen.width/8, Screen.height/20, 500, 1000), Cartridge.score.ToString());
	
	

}