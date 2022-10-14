#pragma strict

var green_button : GameObject;
green_button = GameObject.Find("Green Button");
var blue_button : GameObject;
blue_button = GameObject.Find("Blue Button");
var music_on : GameObject;
music_on = GameObject.Find("Music On");
var music_off : GameObject;
music_off = GameObject.Find("Music Off");
var mute : GameObject;
mute = GameObject.Find("Mute");
var unmute : GameObject;
unmute = GameObject.Find("Unmute");
var slash : GameObject;
slash = GameObject.Find("Slash");



function Start () {

}

function Update () {


if(Input.GetKeyDown(KeyCode.Escape) && GameObject.Find("Menu Play Button").transform.position.x != 0 && GameObject.Find("Pause Menu(Clone)")){

AudioListener.pause = false;

Play.pause_button_clicked = false;

if(PlayerPrefs.GetInt("is the game paused from tutorial?") == 0){

GameObject.Find("Transparent Plane").transform.position.x = -50;

}

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0){

GameObject.Find("Transparent Plane").transform.position.x = -100;

}

/*Destroy(GameObject.Find("Green Button(Clone)"));
Destroy(GameObject.Find("Blue Button(Clone)"));
Destroy(GameObject.Find("Music On(Clone)"));
Destroy(GameObject.Find("Music Off(Clone)"));
Destroy(GameObject.Find("Mute(Clone)"));
Destroy(GameObject.Find("Unmute(Clone)"));
Destroy(GameObject.Find("Slash(Clone)"));*/

Destroy(GameObject.Find("Pause Menu(Clone)"));
Destroy(GameObject.Find("Play Button(Clone)"));
Destroy(GameObject.Find("Restart Button(Clone)"));
Destroy(GameObject.Find("Options Button(Clone)"));
Destroy(GameObject.Find("Exit Button(Clone)"));

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0 && GameObject.Find("Big Cuboid").transform.position.y == 1){

if(PlayerPrefs.GetInt("is the game paused from tutorial?") == 1 && !Menu.options){

Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 1;
PlayerPrefs.SetInt("is the game paused from tutorial?", 0);
GameObject.Find("Transparent Plane").transform.position.x = 0;
		
}

}

}
	

}


function Movement (gameobject : GameObject, vector : Vector3, time : float){

	iTween.MoveTo(gameobject, vector, time);
}