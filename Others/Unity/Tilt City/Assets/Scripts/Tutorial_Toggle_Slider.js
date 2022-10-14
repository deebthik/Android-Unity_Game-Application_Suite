#pragma strict

var gui_skin : GUISkin;
public static var tutorial_toggle_slider_value: int;
tutorial_toggle_slider_value = PlayerPrefs.GetInt("tutorial toggle slider value", 1);
public static var tutorial_on : boolean;

function Start () {

}

function Update () {

if(tutorial_toggle_slider_value == 1){

tutorial_on = true;
PlayerPrefs.SetInt("tutorial toggle slider value", 1);

}

if(tutorial_toggle_slider_value == 0){

tutorial_on = false;
PlayerPrefs.SetInt("tutorial toggle slider value", 0);

}

}


 
function OnGUI () {

if(Menu.options && GameObject.Find("Big Cuboid").transform.position.y != 1){

GUI.depth = 0;
GUI.skin = gui_skin;
gui_skin.horizontalSlider.fixedHeight = Screen.height/10;
gui_skin.horizontalSliderThumb.fixedHeight = Screen.height/10;
gui_skin.horizontalSliderThumb.fixedWidth = Screen.width/15;
tutorial_toggle_slider_value = GUI.HorizontalSlider(Rect(Screen.width/2, Screen.height/1.3, Screen.width/10, Screen.height/10), tutorial_toggle_slider_value, 1, 0);

GUI.Label(Rect(Screen.width/3, Screen.height/1.3, 1000, 500), "Tutorial");
gui_skin.label.fixedWidth = Screen.width/2;
gui_skin.label.fixedHeight = Screen.height/10;
gui_skin.label.fontSize = Screen.height/15;
    
}

}