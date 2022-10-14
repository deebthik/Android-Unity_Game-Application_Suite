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


function Start () {

}

function Update () {

if(Input.GetMouseButtonDown(0)){
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
		if(hit.transform.name == "Play Button(Clone)"){
		
		Destroy(GameObject.Find("Pause Menu(Clone)"));
		Destroy(GameObject.Find("Play Button(Clone)"));
		Destroy(GameObject.Find("Options Button(Clone)"));
		Destroy(GameObject.Find("How to play button(Clone)"));
		Destroy(GameObject.Find("Exit Button(Clone)"));
		
		}
		
		
		if(hit.transform.name == "Play Again Button(Clone)"){
				
			Time.timeScale = 1;
			Play.score_int = 0;
			Play.score.text = "0";
			Play.i = 0;
			Play.t = 0;
			Play.time_start = Time.timeSinceLevelLoad;
			
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
			Destroy(GameObject.Find("Options Button(Clone)"));
			Destroy(GameObject.Find("How to play button(Clone)"));
			Destroy(GameObject.Find("Exit Button(Clone)"));
	
       		
			Play_Movement(red_cylinder.transform, Vector3(red_cylinder.transform.position.x, -12, red_cylinder.transform.position.z), 1);
			Play_Movement(red_cylinder_halo.transform, Vector3(red_cylinder_halo.transform.position.x, -10, red_cylinder_halo.transform.position.z), 1);
			Play_Movement(green_cylinder.transform, Vector3(green_cylinder.transform.position.x, -12, green_cylinder.transform.position.z), 1);
			Play_Movement(green_cylinder_halo.transform, Vector3(green_cylinder_halo.transform.position.x, -10, green_cylinder_halo.transform.position.z), 1);
			Play_Movement(blue_cylinder.transform, Vector3(blue_cylinder.transform.position.x, -12, blue_cylinder.transform.position.z), 1);
			Play_Movement(blue_cylinder_halo.transform, Vector3(blue_cylinder_halo.transform.position.x, -10, blue_cylinder_halo.transform.position.z), 1);
			Play_Movement(yellow_cylinder.transform, Vector3(yellow_cylinder.transform.position.x, -12, yellow_cylinder.transform.position.z), 1);
			Play_Movement(yellow_cylinder_halo.transform, Vector3(yellow_cylinder_halo.transform.position.x, -10, yellow_cylinder_halo.transform.position.z), 1);
			Play_Movement(crane.transform, Vector3(15, crane.transform.position.y, crane.transform.position.z), 1);
			Play_Movement(big_cuboid.transform, Vector3(big_cuboid.transform.position.x, 1, big_cuboid.transform.position.z), 1);
			Play_Movement(small_cuboid_1.transform, Vector3(small_cuboid_1.transform.position.x, -3.5, small_cuboid_1.transform.position.z), 1);
			Play_Movement(small_cuboid_2.transform, Vector3(small_cuboid_2.transform.position.x, -3.5, small_cuboid_2.transform.position.z), 1);
			Play_Movement(score.transform, Vector3(-18, 8, 11), 3);
			Play_Movement(score_text.transform, Vector3(-18, 11.5, 11), 3);
			
			PlayVariable_and_InstantiateClones();
			
		
		}
		
		
		if(hit.transform.name == "Menu Exit Button"){
		
		Application.Quit();
		
		}
		
		
		if(hit.transform.name == "Exit Button(Clone)" || hit.transform.name == "Game Over Exit Button(Clone)" || hit.transform.name == "Game Over Exit Button 2"){
			
			Time.timeScale = 1;
			Play.score_int = 0;
			
			Destroy(GameObject.Find("Red Ball(Clone)"));
			Destroy(GameObject.Find("Green Ball(Clone)"));
			Destroy(GameObject.Find("Blue Ball(Clone)"));
			Destroy(GameObject.Find("Yellow Ball(Clone)"));
			
			Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
			Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
			Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
			Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));
					
			Play.play = false;
			
			Destroy(GameObject.Find("Game Over(Clone)"));
			Destroy(GameObject.Find("Game Over Plane(Clone)"));
			Destroy(GameObject.Find("Game Over Score(Clone)"));
			Destroy(GameObject.Find("Game Over Exit Button(Clone)"));
			Destroy(GameObject.Find("Time Elapsed(Clone)"));
			Destroy(GameObject.Find("New High Score(Clone)"));
			Destroy(GameObject.Find("Play Again Button(Clone)"));
			
			Destroy(GameObject.Find("Pause Menu(Clone)"));
			Destroy(GameObject.Find("Play Button(Clone)"));
			Destroy(GameObject.Find("Options Button(Clone)"));
			Destroy(GameObject.Find("How to play button(Clone)"));
			Destroy(GameObject.Find("Exit Button(Clone)"));
			
       		Movement(tilt_city.transform, Vector3(1, tilt_city.transform.position.y, tilt_city.transform.position.z), 1);
			Movement(menu_options_button.transform, Vector3(1, menu_options_button.transform.position.y, menu_options_button.transform.position.z), 1);
			Movement(menu_how_to_play_button.transform, Vector3(1, menu_how_to_play_button.transform.position.y, menu_how_to_play_button.transform.position.z), 1);
			Movement(menu_play_button.transform, Vector3(5, menu_play_button.transform.position.y, menu_play_button.transform.position.z), 5);
			Movement(menu_exit_button.transform, Vector3(1, menu_exit_button.transform.position.y, menu_exit_button.transform.position.z), 1);
			/*Play_Movement(red_cylinder.transform, Vector3(red_cylinder.transform.position.x, -24, red_cylinder.transform.position.z), 1);
			Play_Movement(red_cylinder_halo.transform, Vector3(red_cylinder_halo.transform.position.x, -22, red_cylinder_halo.transform.position.z), 1);
			Play_Movement(green_cylinder.transform, Vector3(green_cylinder.transform.position.x, -24, green_cylinder.transform.position.z), 1);
			Play_Movement(green_cylinder_halo.transform, Vector3(green_cylinder_halo.transform.position.x, -22, green_cylinder_halo.transform.position.z), 1);
			Play_Movement(blue_cylinder.transform, Vector3(blue_cylinder.transform.position.x, -24, blue_cylinder.transform.position.z), 1);
			Play_Movement(blue_cylinder_halo.transform, Vector3(blue_cylinder_halo.transform.position.x, -22, blue_cylinder_halo.transform.position.z), 1);
			Play_Movement(yellow_cylinder.transform, Vector3(yellow_cylinder.transform.position.x, -24, yellow_cylinder.transform.position.z), 1);
			Play_Movement(yellow_cylinder_halo.transform, Vector3(yellow_cylinder_halo.transform.position.x, -22, yellow_cylinder_halo.transform.position.z), 1);
			Play_Movement(crane.transform, Vector3(40, crane.transform.position.y, crane.transform.position.z), 1);
			Play_Movement(big_cuboid.transform, Vector3(big_cuboid.transform.position.x, 20, big_cuboid.transform.position.z), 1);
			Play_Movement(small_cuboid_1.transform, Vector3(small_cuboid_1.transform.position.x, -20, small_cuboid_1.transform.position.z), 1);
			Play_Movement(small_cuboid_2.transform, Vector3(small_cuboid_2.transform.position.x, -20, small_cuboid_2.transform.position.z), 1);
			Play_Movement(score.transform, Vector3(-18, 40, 11), 3);
			Play_Movement(score_text.transform, Vector3(-18, 43.5, 11), 3);*/
			
			Destroy(red_cylinder);
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
			Destroy(score_text);
			
			Restart();
		
		}
		
		
		
		
		}

	}

}



function Movement (thisTransform : Transform, vector : Vector3, speed : float){

	var t = 0.0;
	while (t < 1.0){
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	yield;
	}
}

	function Play_Movement (thisTransform : Transform, vector : Vector3, speed : float){

	//yield WaitForSeconds(1);
	var t = 0.0;
	while (t < 1.0){
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	yield;
	
	}
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

yield WaitForSeconds(0.85);
Application.LoadLevel("Play Scene");

}


function PlayVariable_and_InstantiateClones(){

Play.play = false;

Instantiate(GameObject.Find("1"));
Instantiate(GameObject.Find("2"));
Instantiate(GameObject.Find("3"));


yield WaitForSeconds(1);
GameObject.Find("3(Clone)").animation.Play();
yield WaitForSeconds(1.25);
Destroy(GameObject.Find("3(Clone)"));
GameObject.Find("2(Clone)").animation.Play();
yield WaitForSeconds(1);
Play.play = true;
yield WaitForSeconds(0.25);
Destroy(GameObject.Find("2(Clone)"));
GameObject.Find("1(Clone)").animation.Play();
yield WaitForSeconds(1.25);
Destroy(GameObject.Find("1(Clone)"));

yield WaitForSeconds(1.5);
Instantiate(GameObject.Find("Game Over Plane"));
Instantiate(GameObject.Find("Game Over"));
Instantiate(GameObject.Find("Game Over Score"));
Instantiate(GameObject.Find("Game Over Exit Button"));
Instantiate(GameObject.Find("Time Elapsed"));
Instantiate(GameObject.Find("New High Score"));
Instantiate(GameObject.Find("Play Again Button"));
										
}
