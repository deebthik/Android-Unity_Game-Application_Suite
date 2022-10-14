#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var move_camera_about_the_team : boolean;
var main_camera : GameObject;
var play_options : GameObject;
var about_the_project_objects : Array = ["About The Project Plane", "About The Project Text"];

function Start () {

	main_camera = GameObject.Find("Main Camera");
	play_options = GameObject.Find("Play Options");

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(main_camera.transform.position.z == -29.75){
		
				if(play_options.transform.position == Vector3(0, 1.225, -29) && (play_options.transform.rotation.y >= -0.001 && play_options.transform.rotation.y <= 0.001)){
			
					if(hit.transform.name == "Reaction Time Test Button"){
					
						Application.LoadLevel("Reaction_Time_Test_Scene");
					
					}
					
					if(hit.transform.name == "About The Team Button"){
					
						GameObject.Find("F1 Car Sound 2 High Pitch").GetComponent(AudioSource).audio.Play();
						move_camera_about_the_team = true;
					
					}
					
					if(hit.transform.name == "About The Project Button"){
						
						iTween.RotateTo(play_options, Vector3(0, -179.999, 0), 1);
						
					}
				
				}
				
				if(play_options.transform.position == Vector3(0, 1.225, -29) && play_options.transform.rotation == Quaternion.Euler(0, -179.999, 0)){
					
					if(hit.transform.name in about_the_project_objects){
						
						iTween.RotateTo(play_options, Vector3(0, 0, 0), 1);
					
					}
				
				}
			
			}
							
		}
		
	}
	
	if(move_camera_about_the_team){
	
		main_camera.transform.Translate(Vector3.forward * 0.05); //This is affected by yield WaitForSeconds but iTween isn't so the boolean variable can be falsified after this translation process
		Falsify_Camera_Movement_Var();
		
		if(main_camera.transform.position.z >= -29.25){
	
			iTween.MoveTo(main_camera, Vector3(0, 1.25, -9.75), 1.5);
	
		}
	
	}

}



function Falsify_Camera_Movement_Var(){

	yield WaitForSeconds(0.5);
	move_camera_about_the_team = false;

}
