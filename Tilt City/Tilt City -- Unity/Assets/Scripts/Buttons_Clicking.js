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
var game_over_plane : GameObject;
game_over_plane = GameObject.Find("Game Over Plane");
var game_over : GameObject;
game_over = GameObject.Find("Game Over");
var game_over_score : GameObject;
game_over_score = GameObject.Find("Game Over Score");
var game_over_exit_button : GameObject;
game_over_exit_button = GameObject.Find("Game Over Exit Button");
var time_elapsed : GameObject;
time_elapsed = GameObject.Find("Time Elapsed");
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
public static var background_music_time : float;
public static var options : boolean;
options = false;
var background_gui_texture : Texture;



function Start () {

}

function Update () {


if(Input.GetMouseButtonDown(0)){
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
		if(hit.transform.name == "Play Button(Clone)"){
		
		AudioListener.pause = false;
		
		if(PlayerPrefs.GetInt("is the game paused from tutorial?") != 1){
		
		GameObject.Find("Transparent Plane").transform.position.x = -50;
		
		}
		
		Play.pause_button_clicked = false;
		
		Destroy(GameObject.Find("Green Button(Clone)"));
		Destroy(GameObject.Find("Blue Button(Clone)"));
		Destroy(GameObject.Find("Music On(Clone)"));
		Destroy(GameObject.Find("Music Off(Clone)"));
		Destroy(GameObject.Find("Mute(Clone)"));
		Destroy(GameObject.Find("Unmute(Clone)"));
		Destroy(GameObject.Find("Slash(Clone)"));
		
		Destroy(GameObject.Find("Pause Menu(Clone)"));
		Destroy(GameObject.Find("Play Button(Clone)"));
		Destroy(GameObject.Find("Restart Button(Clone)"));
		Destroy(GameObject.Find("Options Button(Clone)"));
		Destroy(GameObject.Find("Exit Button(Clone)"));
		
		if(PlayerPrefs.GetInt("is the game paused from tutorial?") == 1){
		
		Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 1;
		PlayerPrefs.SetInt("is the game paused from tutorial?", 0);
		
		}
		
		}
		
		
		if(hit.transform.name == "Options Button(Clone)"){
		
		options = true;
		
		/*if(!Play.play){
		
		PlayerPrefs.SetInt("is options clicked from tutorial?", 1);
		
		}*/
		
		}
		
		
		if(hit.transform.name == "Play Again Button(Clone)" || hit.transform.name == "Restart Button(Clone)"){

		
			if(PlayerPrefs.GetInt("is the game paused from tutorial?") == 0){		
		
			AudioListener.pause = false;
			Play.destroy_balls = true;
				
			Time.timeScale = 1;
			Play.score_int = 0;
			Play.score.text = "0";
			Play.i = 0;
			Play.t = 0;
			Play.time_start = Time.timeSinceLevelLoad;
			
			GameObject.Find("Transparent Plane").transform.position.x = -50;
			GameObject.Find("Big Cuboid").transform.rotation = Quaternion.Euler(0, 0, 0);
			
			Play.pause_button_clicked = false;
			
			/*Destroy(GameObject.Find("Green Button(Clone)"));
			Destroy(GameObject.Find("Blue Button(Clone)"));
			Destroy(GameObject.Find("Music On(Clone)"));
			Destroy(GameObject.Find("Music Off(Clone)"));
			Destroy(GameObject.Find("Mute(Clone)"));
			Destroy(GameObject.Find("Unmute(Clone)"));
			Destroy(GameObject.Find("Slash(Clone)"));*/
			
			Play.two_cylinders = false;
			Play.three_cylinders = false;
			
			Play.red_cylinder_fallen = false;
			Play.green_cylinder_fallen = false;
			Play.blue_cylinder_fallen = false;
			Play.yellow_cylinder_fallen = false;
			
			Play.balls.Add(Play.red_ball);
			Play.balls.Add(Play.green_ball);
			Play.balls.Add(Play.blue_ball);
			Play.balls.Add(Play.yellow_ball);
			
			Play.balls.Add(Play.glowing_red_ball);
			Play.balls.Add(Play.glowing_green_ball);
			Play.balls.Add(Play.glowing_blue_ball);
			Play.balls.Add(Play.glowing_yellow_ball);
			
			red_cylinder.animation.Stop();
			green_cylinder.animation.Stop();
			blue_cylinder.animation.Stop();
			yellow_cylinder.animation.Stop();
			
			Destroy(GameObject.Find("Game Over(Clone)"));
			Destroy(GameObject.Find("Game Over Plane(Clone)"));
			Destroy(GameObject.Find("Game Over Score(Clone)"));
			Destroy(GameObject.Find("Game Over Exit Button(Clone)"));
			Destroy(GameObject.Find("Time Elapsed(Clone)"));
			Destroy(GameObject.Find("New High Score(Clone)"));
			Destroy(GameObject.Find("Play Again Button(Clone)"));
			
			Destroy(GameObject.Find("1(Clone)"));
			Destroy(GameObject.Find("2(Clone)"));
			Destroy(GameObject.Find("3(Clone)"));
			
			Destroy(GameObject.Find("Pause Menu(Clone)"));
			Destroy(GameObject.Find("Play Button(Clone)"));
			Destroy(GameObject.Find("Restart Button(Clone)"));
			Destroy(GameObject.Find("Options Button(Clone)"));
			Destroy(GameObject.Find("Exit Button(Clone)"));
	
       		
			Play_Movement(red_cylinder, Vector3(-12, -12, red_cylinder.transform.position.z), 1);
			Play_Movement(red_cylinder_halo, Vector3(-12, -10, red_cylinder_halo.transform.position.z), 1);
			Play_Movement(green_cylinder, Vector3(-5, -12, green_cylinder.transform.position.z), 1);
			Play_Movement(green_cylinder_halo, Vector3(-5, -10, green_cylinder_halo.transform.position.z), 1);
			Play_Movement(blue_cylinder, Vector3(5, -12, blue_cylinder.transform.position.z), 1);
			Play_Movement(blue_cylinder_halo, Vector3(5, -10, blue_cylinder_halo.transform.position.z), 1);
			Play_Movement(yellow_cylinder, Vector3(12, -12, yellow_cylinder.transform.position.z), 1);
			Play_Movement(yellow_cylinder_halo, Vector3(12, -10, yellow_cylinder_halo.transform.position.z), 1);
			Play_Movement(crane, Vector3(15, crane.transform.position.y, crane.transform.position.z), 1);
			Play_Movement(big_cuboid, Vector3(big_cuboid.transform.position.x, 1, big_cuboid.transform.position.z), 1);
			Play_Movement(small_cuboid_1, Vector3(small_cuboid_1.transform.position.x, -3.5, small_cuboid_1.transform.position.z), 1);
			Play_Movement(small_cuboid_2, Vector3(small_cuboid_2.transform.position.x, -3.5, small_cuboid_2.transform.position.z), 1);
			Play_Movement(score, Vector3(-18, 8, 11), 1);
			Play_Movement(score_text, Vector3(-18, 11.5, 11), 1);
			
			PlayVariable_and_InstantiateClones();
			
			}
			
			if(PlayerPrefs.GetInt("is the game paused from tutorial?") == 1 && GameObject.Find("Game Over Plane").transform.position.y == 20){
			
			Destroy(GameObject.Find("Pause Menu(Clone)"));
			Destroy(GameObject.Find("Play Button(Clone)"));
			Destroy(GameObject.Find("Restart Button(Clone)"));
			Destroy(GameObject.Find("Options Button(Clone)"));
			Destroy(GameObject.Find("Exit Button(Clone)"));
			
			Tutorial_Toggle_Slider.tutorial_toggle_slider_value = 1;
			Tutorial_Toggle_Slider.tutorial_on = true;
			Tutorial.main_platform_instruction = true;
			Tutorial.got_it = false;
			Tutorial.wait_for_2_seconds = false;
			Tutorial.instantiate_ball = true;
			Tutorial.secondary_platform_instruction = false;
			Tutorial.ball_instruction = false;
			Tutorial.play_trial = false;
			Tutorial.try_again = false;
			Tutorial.surprises_instruction = false;
			Tutorial_Trial_Success.trial_success = false;
			Tutorial_Trial_Success.wait_for_2_seconds = false;
			Play.score_int = 0;
			Tutorial.repeated_instantiate = false;
			Tutorial.got_it = false;
			
			}
		
		}
		
		
		if(hit.transform.name == "Menu Exit Button"){
		
		Application.Quit();
		
		}
		
		
		if(hit.transform.name == "Exit Button(Clone)" || hit.transform.name == "Game Over Exit Button(Clone)" || hit.transform.name == "Game Over Exit Button 2"){
			
			Play.destroy_balls = true;
			
			Time.timeScale = 1;
			Play.score_int = 0;
					
			Play.play = false;
			
			GameObject.Find("Transparent Plane").transform.position.x = -50;
			
			Play.pause_button_clicked = false;
			
			background_music_time = GameObject.Find("Background Music").audio.time;
			PlayerPrefs.SetInt("is the application restarting from play?", 1);
			
			/*Destroy(GameObject.Find("Green Button(Clone)"));
			Destroy(GameObject.Find("Blue Button(Clone)"));
			Destroy(GameObject.Find("Music On(Clone)"));
			Destroy(GameObject.Find("Music Off(Clone)"));
			Destroy(GameObject.Find("Mute(Clone)"));
			Destroy(GameObject.Find("Unmute(Clone)"));
			Destroy(GameObject.Find("Slash(Clone)"));*/
			
			Destroy(GameObject.Find("Game Over(Clone)"));
			Destroy(GameObject.Find("Game Over Plane(Clone)"));
			Destroy(GameObject.Find("Game Over Score(Clone)"));
			Destroy(GameObject.Find("Game Over Exit Button(Clone)"));
			Destroy(GameObject.Find("Time Elapsed(Clone)"));
			Destroy(GameObject.Find("New High Score(Clone)"));
			Destroy(GameObject.Find("Play Again Button(Clone)"));
			
			Destroy(GameObject.Find("Pause Menu(Clone)"));
			Destroy(GameObject.Find("Play Button(Clone)"));
			Destroy(GameObject.Find("Restart Button(Clone)"));
			Destroy(GameObject.Find("Options Button(Clone)"));
			Destroy(GameObject.Find("Exit Button(Clone)"));
			
			Destroy(GameObject.Find("Big Cuboid (Clone)"));
			Destroy(GameObject.Find("Small Cuboid 1 (Clone)"));
			Destroy(GameObject.Find("Small Cuboid 2 (Clone)"));
			
       		/*Movement(tilt_city, Vector3(0, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
			Movement(menu_options_button, Vector3(0, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 1);
			Movement(menu_statistics_button, Vector3(0, menu_statistics_button.transform.position.y, menu_statistics_button.transform.position.z), 1);
			Movement(menu_play_button, Vector3(0, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 1.5);
			Movement(menu_exit_button, Vector3(0, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);*/
			Movement(red_cylinder, Vector3(red_cylinder.transform.position.x, -24, red_cylinder.transform.position.z), 1);
			Movement(red_cylinder_halo, Vector3(red_cylinder_halo.transform.position.x, -22, red_cylinder_halo.transform.position.z), 1);
			Movement(green_cylinder, Vector3(green_cylinder.transform.position.x, -24, green_cylinder.transform.position.z), 1);
			Movement(green_cylinder_halo, Vector3(green_cylinder_halo.transform.position.x, -22, green_cylinder_halo.transform.position.z), 1);
			Movement(blue_cylinder, Vector3(blue_cylinder.transform.position.x, -24, blue_cylinder.transform.position.z), 1);
			Movement(blue_cylinder_halo, Vector3(blue_cylinder_halo.transform.position.x, -22, blue_cylinder_halo.transform.position.z), 1);
			Movement(yellow_cylinder, Vector3(yellow_cylinder.transform.position.x, -24, yellow_cylinder.transform.position.z), 1);
			Movement(yellow_cylinder_halo, Vector3(yellow_cylinder_halo.transform.position.x, -22, yellow_cylinder_halo.transform.position.z), 1);
			Movement(crane, Vector3(40, crane.transform.position.y, crane.transform.position.z), 1);
			Movement(big_cuboid, Vector3(big_cuboid.transform.position.x, 20, big_cuboid.transform.position.z), 1);
			Movement(small_cuboid_1, Vector3(small_cuboid_1.transform.position.x, -20, small_cuboid_1.transform.position.z), 1);
			Movement(small_cuboid_2, Vector3(small_cuboid_2.transform.position.x, -20, small_cuboid_2.transform.position.z), 1);
			Movement(score, Vector3(-18, 40, 11), 1);
			Movement(score_text, Vector3(-18, 43.5, 11), 1);
			Movement(pause_button, Vector3(20, -7.5, 5), 1);
			
			/*Destroy(red_cylinder);
			Destroy(red_cylinder_halo);
			Destroy(green_cylinder);
			Destroy(green_cylinder_halo);
			Destroy(blue_cylinder);
			Destroy(blue_cylinder_halo);
			Destroy(yellow_cylinder);
			Destroy(yellow_cylinder_halo);
			Destroy(crane);
			Destroy(big_cuboid);
			Destroy(small_cuboid_1);
			Destroy(small_cuboid_2);
			Destroy(score);
			Destroy(score_text);*/
			
			Restart();
		
		}
		
		/*if(!Play.play){
		if(!Play.mute_sound_effects){
		if(hit.transform.name == "Green Button" || hit.transform.name == "Unmute"){
		
		Play.mute_sound_effects = true;
		GameObject.Find("Unmute").transform.position.x = -20;
		GameObject.Find("Mute").transform.position.x = -13;
		
		}
		}
		
		if(Play.mute_sound_effects){
		if(hit.transform.name == "Green Button" || hit.transform.name == "Mute"){
		
		Play.mute_sound_effects = false;
		GameObject.Find("Mute").transform.position.x = -20;
		GameObject.Find("Unmute").transform.position.x = -13;
		
		}
		}
		
		
		if(!Play.mute_background_music){
		if(hit.transform.name == "Blue Button" || hit.transform.name == "Music On"){
		
		Play.mute_background_music = true;
		GameObject.Find("Slash").transform.position.x = -9.98;
		GameObject.Find("Music Off").transform.position.x = -9.83;
		GameObject.Find("Music On").transform.position.x = -20;
		
		}
		}
		
		
		if(Play.mute_background_music){
		if(hit.transform.name == "Blue Button" || hit.transform.name == "Slash" || hit.transform.name == "Music Off"){
		
		Play.mute_background_music = false;
		GameObject.Find("Slash").transform.position.x = -20;
		GameObject.Find("Music On").transform.position.x = -9.83;
		GameObject.Find("Music Off").transform.position.x = -20;
		
		}
		}
		
		if(!GameObject.Find("Pause Menu(Clone)") && GameObject.Find("Game Over Plane").transform.position.y == 20 && GameObject.Find("Game Over Plane").transform.position.y != 0 && GameObject.Find("Menu Play Button").transform.position.x != 0 && !GameObject.Find("3(Clone)") && !GameObject.Find("2(Clone)") && !GameObject.Find("1(Clone)")){
		if(!Play.pause_button_clicked){
		
		if(hit.transform.name == "Pause Button"){
		
		Play.pause_button_clicked = true;
		
		}
		
		}
		
		}
		
		}*/
		
		
		/*if(Play.play){
		if(!Play.mute_sound_effects){
		if(hit.transform.name == "Green Button(Clone)" || hit.transform.name == "Unmute(Clone)"){
		
		Play.mute_sound_effects = true;
		GameObject.Find("Unmute(Clone)").transform.position.x = -20;
		GameObject.Find("Mute(Clone)").transform.position.x = -13;
		
		}
		}
		
		if(Play.mute_sound_effects){
		if(hit.transform.name == "Green Button(Clone)" || hit.transform.name == "Mute(Clone)"){
		
		Play.mute_sound_effects = false;
		GameObject.Find("Mute(Clone)").transform.position.x = -20;
		GameObject.Find("Unmute(Clone)").transform.position.x = -13;
		
		}
		}
		
		
		if(!Play.mute_background_music){
		if(hit.transform.name == "Blue Button(Clone)" || hit.transform.name == "Music On(Clone)"){
		
		Play.mute_background_music = true;
		GameObject.Find("Slash(Clone)").transform.position.x = -9.98;
		GameObject.Find("Music Off(Clone)").transform.position.x = -9.83;
		GameObject.Find("Music On(Clone)").transform.position.x = -20;
		
		}
		}
		
		
		if(Play.mute_background_music){
		if(hit.transform.name == "Blue Button(Clone)" || hit.transform.name == "Slash(Clone)" || hit.transform.name == "Music Off(Clone)"){
		
		Play.mute_background_music = false;
		GameObject.Find("Slash(Clone)").transform.position.x = -20;
		GameObject.Find("Music On(Clone)").transform.position.x = -9.83;
		GameObject.Find("Music Off(Clone)").transform.position.x = -20;
		
		}
		}*/
				
		if(!GameObject.Find("Pause Menu(Clone)") && GameObject.Find("Game Over Plane").transform.position.y == 20 && GameObject.Find("Game Over Plane").transform.position.y != 0 && GameObject.Find("Menu Play Button").transform.position.x != 0 && !GameObject.Find("3(Clone)") && !GameObject.Find("2(Clone)") && !GameObject.Find("1(Clone)")){
		if(!Play.pause_button_clicked){
		
		if(hit.transform.name == "Pause Button"){
		
		Play.pause_button_clicked = true;
		
		}
		
		}
		
		}
		
		//}
		
		
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
	
	
function Restart(){

yield WaitForSeconds(0.3);
Application.LoadLevel("Play Scene");

}


function PlayVariable_and_InstantiateClones(){

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0){

Play.play = false;

Instantiate(GameObject.Find("1"));
Instantiate(GameObject.Find("2"));
Instantiate(GameObject.Find("3"));


yield WaitForSeconds(1);
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

yield WaitForSeconds(1.5);
Instantiate(GameObject.Find("Game Over Plane"));
Instantiate(GameObject.Find("Game Over"));
Instantiate(GameObject.Find("Game Over Score"));
Instantiate(GameObject.Find("Game Over Exit Button"));
Instantiate(GameObject.Find("Time Elapsed"));
Instantiate(GameObject.Find("New High Score"));
Instantiate(GameObject.Find("Play Again Button"));
										
}

}



function OnGUI(){

if(options){

Menu.options = true;

GUI.depth = 1;

GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background_gui_texture, ScaleMode.StretchToFill, true);

}

}
