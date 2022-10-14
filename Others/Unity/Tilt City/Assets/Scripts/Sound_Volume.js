#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var menu_play_button : GameObject;
menu_play_button = GameObject.Find("Menu Play Button");
var menu_options_button : GameObject;
menu_options_button = GameObject.Find("Menu Options Button");
var menu_how_to_play_button : GameObject;
menu_how_to_play_button = GameObject.Find("Menu How to play button");
var menu_exit_button : GameObject;
menu_exit_button = GameObject.Find("Menu Exit Button");
var tilt_city : GameObject;
tilt_city = GameObject.Find("Tilt City");
var menu_play_button_plane_prefab : Transform;
var menu_options_button_plane_prefab : Transform;
var menu_how_to_play_button_plane_prefab : Transform;
var red_cylinder : GameObject;
red_cylinder = GameObject.Find("Red Cylinder");
var red_cylinder_halo : GameObject;
red_cylinder_halo = GameObject.Find("Red Cylinder Halo");
var green_cylinder : GameObject;
green_cylinder = GameObject.Find("Green Cylinder");
var green_cylinder_halo : GameObject;
green_cylinder_halo = GameObject.Find("Green Cylinder Halo");
var blue_cylinder : GameObject;
blue_cylinder = GameObject.Find("Blue Cylinder");
var blue_cylinder_halo : GameObject;
blue_cylinder_halo = GameObject.Find("Blue Cylinder Halo");
var yellow_cylinder : GameObject;
yellow_cylinder = GameObject.Find("Yellow Cylinder");
var yellow_cylinder_halo : GameObject;
yellow_cylinder_halo = GameObject.Find("Yellow Cylinder Halo");
var crane : GameObject;
crane = GameObject.Find("Crane");
var big_cuboid : GameObject;
big_cuboid = GameObject.Find("Big Cuboid");
var small_cuboid_1 : GameObject;
small_cuboid_1 = GameObject.Find("Small Cuboid 1");
var small_cuboid_2 : GameObject;
small_cuboid_2 = GameObject.Find("Small Cuboid 2");
var score : GameObject;
score = GameObject.Find("Score");
var score_text : GameObject;
score_text = GameObject.Find("Score Text");
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
var pause_button : GameObject;
pause_button = GameObject.Find("Pause Button");
var gui_skin : GUISkin;
public static var sound_volume_slider_value : float;
sound_volume_slider_value = PlayerPrefs.GetFloat("sound volume", 1);


function Start () {

}

function Update () {


/*if(Menu.options){

if(Input.GetKeyDown(KeyCode.Escape)){

Menu.options = false;
Movement(tilt_city, Vector3(0, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
Movement(menu_options_button, Vector3(0, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 1);
Movement(menu_how_to_play_button, Vector3(0, menu_how_to_play_button.transform.position.y, menu_how_to_play_button.transform.position.z), 1);
Movement(menu_play_button, Vector3(0, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 1);
Movement(menu_exit_button, Vector3(0, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);
Movement(green_button, Vector3(-13, green_button.transform.position.y, green_button.transform.position.z), 1);
Movement(blue_button, Vector3(-10, blue_button.transform.position.y, blue_button.transform.position.z), 1);
Movement(music_on, Vector3(-9.83, music_on.transform.position.y, music_on.transform.position.z), 1);
Movement(music_off, Vector3(-20, music_off.transform.position.y, music_off.transform.position.z), 1);
Movement(mute, Vector3(-20, mute.transform.position.y, mute.transform.position.z), 1);
Movement(unmute, Vector3(-13, unmute.transform.position.y, unmute.transform.position.z), 1);
Movement(slash, Vector3(-20, slash.transform.position.y, slash.transform.position.z), 1);




}

}*/


}

function OnGUI(){

if(Menu.options){

GUI.depth = 0;
GUI.skin = gui_skin;
gui_skin.horizontalSlider.fixedHeight = Screen.height/10;
gui_skin.horizontalSliderThumb.fixedHeight = Screen.height/10;
gui_skin.horizontalSliderThumb.fixedWidth = Screen.width/15;
sound_volume_slider_value = GUI.HorizontalSlider(Rect(Screen.width/10, Screen.height/2.6, Screen.width/2, Screen.height/10), sound_volume_slider_value, 0.0, 1.0);

GUI.Label(Rect(Screen.width/10, Screen.height/3.35, 1000, 500), "Sound Volume");
gui_skin.label.fixedWidth = Screen.width/2;
gui_skin.label.fixedHeight = Screen.height/10;
gui_skin.label.fontSize = Screen.height/15;

if(!Play.mute_sound_effects){

GameObject.Find("Countdown Beep").audio.volume = sound_volume_slider_value;
GameObject.Find("Countdown Finish Beep").audio.volume = sound_volume_slider_value;
GameObject.Find("Score Music").audio.volume = sound_volume_slider_value/2;
GameObject.Find("Score Music 2").audio.volume = sound_volume_slider_value/2;

PlayerPrefs.SetFloat("sound volume", sound_volume_slider_value);

}

}

}


function Movement (gameobject : GameObject, vector : Vector3, time : float){

	iTween.MoveTo(gameobject, vector, time);
}