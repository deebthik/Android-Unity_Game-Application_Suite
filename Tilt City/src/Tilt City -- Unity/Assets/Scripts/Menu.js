#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var menu_play_button : GameObject;
menu_play_button = GameObject.Find("Menu Play Button");
var menu_options_button : GameObject;
menu_options_button = GameObject.Find("Menu Options Button");
var menu_statistics_button : GameObject;
menu_statistics_button = GameObject.Find("Menu Statistics Button");
var menu_exit_button : GameObject;
menu_exit_button = GameObject.Find("Menu Exit Button");
var tilt_city : GameObject;
tilt_city = GameObject.Find("Tilt City");
var menu_play_button_plane_prefab : Transform;
var menu_options_button_plane_prefab : Transform;
var menu_statistics_button_plane_prefab : Transform;
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
public static var options : boolean;
options = false;
public static var statistics : boolean;
statistics = false;




function Start () {

Movement(tilt_city, Vector3(0, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
Movement(menu_options_button, Vector3(0, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 1);
Movement(menu_statistics_button, Vector3(0, menu_statistics_button.transform.position.y, menu_statistics_button.transform.position.z), 1);
Movement(menu_play_button, Vector3(0, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 1);
Movement(menu_exit_button, Vector3(0, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);
/*Movement(green_button, Vector3(-13, green_button.transform.position.y, green_button.transform.position.z), 1);
Movement(blue_button, Vector3(-10, blue_button.transform.position.y, blue_button.transform.position.z), 1);
Movement(music_on, Vector3(-9.83, music_on.transform.position.y, music_on.transform.position.z), 1);
Movement(music_off, Vector3(-20, music_off.transform.position.y, music_off.transform.position.z), 1);
Movement(mute, Vector3(-20, mute.transform.position.y, mute.transform.position.z), 1);
Movement(unmute, Vector3(-13, unmute.transform.position.y, unmute.transform.position.z), 1);
Movement(slash, Vector3(-20, slash.transform.position.y, slash.transform.position.z), 1);*/

}

function Update () {


	if(Input.GetMouseButtonDown(0)){
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
			
			if(hit.transform.name == "Menu Play Button"){
			
			Movement(tilt_city, Vector3(-30, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
			Movement(menu_options_button, Vector3(-30, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 1);
			Movement(menu_statistics_button, Vector3(-30, menu_statistics_button.transform.position.y, menu_statistics_button.transform.position.z), 1);
			Movement(menu_play_button, Vector3(-30, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 5);
			Movement(menu_exit_button, Vector3(-30, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);
			/*Movement(green_button, Vector3(-33, green_button.transform.position.y, green_button.transform.position.z), 1);
			Movement(blue_button, Vector3(-30, blue_button.transform.position.y, blue_button.transform.position.z), 1);
			Movement(music_on, Vector3(-29.83, music_on.transform.position.y, music_on.transform.position.z), 1);
			Movement(music_off, Vector3(-40, music_off.transform.position.y, music_off.transform.position.z), 1);
			Movement(mute, Vector3(-40, mute.transform.position.y, mute.transform.position.z), 1);
			Movement(unmute, Vector3(-33, unmute.transform.position.y, unmute.transform.position.z), 1);
			Movement(slash, Vector3(-29.8, slash.transform.position.y, slash.transform.position.z), 1);*/
			Play_Movement(red_cylinder, Vector3(red_cylinder.transform.position.x, -12, red_cylinder.transform.position.z), 1);
			Play_Movement(red_cylinder_halo, Vector3(red_cylinder_halo.transform.position.x, -10, red_cylinder_halo.transform.position.z), 1);
			Play_Movement(green_cylinder, Vector3(green_cylinder.transform.position.x, -12, green_cylinder.transform.position.z), 1);
			Play_Movement(green_cylinder_halo, Vector3(green_cylinder_halo.transform.position.x, -10, green_cylinder_halo.transform.position.z), 1);
			Play_Movement(blue_cylinder, Vector3(blue_cylinder.transform.position.x, -12, blue_cylinder.transform.position.z), 1);
			Play_Movement(blue_cylinder_halo, Vector3(blue_cylinder_halo.transform.position.x, -10, blue_cylinder_halo.transform.position.z), 1);
			Play_Movement(yellow_cylinder, Vector3(yellow_cylinder.transform.position.x, -12, yellow_cylinder.transform.position.z), 1);
			Play_Movement(yellow_cylinder_halo, Vector3(yellow_cylinder_halo.transform.position.x, -10, yellow_cylinder_halo.transform.position.z), 1);
			Play_Movement(crane, Vector3(15, crane.transform.position.y, crane.transform.position.z), 1);
			Play_Movement(big_cuboid, Vector3(big_cuboid.transform.position.x, 1, big_cuboid.transform.position.z), 1);
			Play_Movement(small_cuboid_1, Vector3(small_cuboid_1.transform.position.x, -3.5, small_cuboid_1.transform.position.z), 1);
			Play_Movement(small_cuboid_2, Vector3(small_cuboid_2.transform.position.x, -3.5, small_cuboid_2.transform.position.z), 1);
			Play_Movement(score, Vector3(-18, 8, 11), 1);
			Play_Movement(score_text, Vector3(-18, 11.5, 11), 1);
			Play_Movement(pause_button, Vector3(13.5, -7.5, 5), 1);
			
			PlayVariable();
			
			}
			
			if(hit.transform.name == "Menu Options Button"){
			
			Movement(tilt_city, Vector3(-30, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
			Movement(menu_options_button, Vector3(-30, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 5);
			Movement(menu_statistics_button, Vector3(-30, menu_statistics_button.transform.position.y, menu_statistics_button.transform.position.z), 1);
			Movement(menu_play_button, Vector3(-30, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 1);
			Movement(menu_exit_button, Vector3(-30, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);
			/*Movement(green_button, Vector3(-33, green_button.transform.position.y, green_button.transform.position.z), 1);
			Movement(blue_button, Vector3(-30, blue_button.transform.position.y, blue_button.transform.position.z), 1);
			Movement(music_on, Vector3(-29.83, music_on.transform.position.y, music_on.transform.position.z), 1);
			Movement(music_off, Vector3(-40, music_off.transform.position.y, music_off.transform.position.z), 1);
			Movement(mute, Vector3(-40, mute.transform.position.y, mute.transform.position.z), 1);
			Movement(unmute, Vector3(-33, unmute.transform.position.y, unmute.transform.position.z), 1);
			Movement(slash, Vector3(-29.8, slash.transform.position.y, slash.transform.position.z), 1);*/
			Options_Scene();
			
			}
			
			if(hit.transform.name == "Menu Statistics Button"){
			
			Movement(tilt_city, Vector3(-30, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
			Movement(menu_options_button, Vector3(-30, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 1);
			Movement(menu_statistics_button, Vector3(-30, menu_statistics_button.transform.position.y, menu_statistics_button.transform.position.z), 5);
			Movement(menu_play_button, Vector3(-30, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 1);
			Movement(menu_exit_button, Vector3(-30, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);
			Statistics_Scene();
			
			}
			
		
			}
			
			
		}
		
}

function Movement (gameobject : GameObject, vector : Vector3, time : float){

	iTween.MoveTo(gameobject, vector, time);
}

	function Play_Movement (gameobject : GameObject, vector : Vector3, time : float){

	yield WaitForSeconds(1);
	iTween.MoveTo(gameobject, vector, time);
}

 
function PlayScene (){

	yield WaitForSeconds (1.5);
	Application.LoadLevel("Play Scene");
	
}

function Rotation (thisTransform : Transform, degrees : Vector3, time : float) {
	var startRotation = thisTransform.rotation;
	var endRotation = Quaternion.Euler(degrees);
	var rate = 1.0/time;
	var t = 0.0;
	while (t < 1.0) {
		t += Time.deltaTime * rate;
		thisTransform.rotation = Quaternion.Slerp(startRotation, endRotation, t);
		yield;
	}
	
	}


function PlayVariable(){

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0){

yield WaitForSeconds(2);
GameObject.Find("3(Clone)").animation.Play();
yield WaitForSeconds(0.5);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(0.5);
Destroy(GameObject.Find("3(Clone)"));
GameObject.Find("2(Clone)").animation.Play();
yield WaitForSeconds(0.5);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(0.5);
Destroy(GameObject.Find("2(Clone)"));
GameObject.Find("1(Clone)").animation.Play();
yield WaitForSeconds(0.5);
GameObject.Find("Countdown Beep").audio.Play();
yield WaitForSeconds(0.5);
Destroy(GameObject.Find("1(Clone)"));
yield WaitForSeconds(0.5);
Play.play = true;
GameObject.Find("Countdown Finish Beep").audio.Play();

}

}


function Options_Scene(){

yield WaitForSeconds(0.8);
options = true;

}

function Statistics_Scene(){

yield WaitForSeconds(0.9);
statistics = true;

}
	