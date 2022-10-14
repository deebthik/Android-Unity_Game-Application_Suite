#pragma strict

var gui_skin : GUISkin;

function Start () {

}

function Update () {

}


function OnGUI(){

	GUI.skin = gui_skin;
	
	gui_skin.label.fixedWidth = Screen.width/2;
	gui_skin.label.fixedHeight = Screen.height/9;
	gui_skin.label.fontSize = Screen.width/16;
	gui_skin.label.normal.textColor = Color.white;
	
	if(Red_Lights.reaction_time == 0){
	
		GUI.Label(Rect(Screen.width/2.6, Screen.height/9.35, 500, 1000), "");
	
	}
	
	if(Red_Lights.reaction_time > 0 && Red_Lights.reaction_time < 10){
	
		GUI.Label(Rect(Screen.width/2.7, Screen.height/9.35, 500, 1000), Red_Lights.reaction_time.ToString("F6"));
	
	}
	
	if(Red_Lights.reaction_time >= 10 && Red_Lights.reaction_time < 100){
	
		GUI.Label(Rect(Screen.width/2.825, Screen.height/9.35, 500, 1000), Red_Lights.reaction_time.ToString("F6"));
	
	}
	
	if(Red_Lights.reaction_time >= 100 && Red_Lights.reaction_time < 1000){
	
		GUI.Label(Rect(Screen.width/2.96, Screen.height/9.35, 500, 1000), Red_Lights.reaction_time.ToString("F6"));
	
	}
	
	if(Red_Lights.reaction_time == 0 && Red_Lights.fault){
		
		GUI.Label(Rect(Screen.width/2.35, Screen.height/9.35, 500, 1000), "Fault");
	
	}
	
}