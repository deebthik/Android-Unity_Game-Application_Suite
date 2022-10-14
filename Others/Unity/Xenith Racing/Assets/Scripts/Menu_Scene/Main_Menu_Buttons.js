#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var move_camera_play_options : boolean;
var main_camera : GameObject;
var stats_objects : Array = ["Stats Plane", "Stats Text", "Best Reaction Time Text", "Reaction Tests Taken Text 1", "Reaction Tests Taken Text 2"];
var information_objects : Array = ["Information Plane", "Version", "Developer Text 1", "Developer Text 2", "Copyright Symbol", "Copyright Year", "Website"];

function Start () {

	main_camera = GameObject.Find("Main Camera");
	
	iTween.MoveTo(main_camera, Vector3(0, 1.25, -49.999), 0.1);
	iTween.MoveTo(main_camera, Vector3(0, 1.25, -50), 0.1);
	
	AudioListener.volume = PlayerPrefs.GetInt("audio_listener", 1);

}

function Update () {

	if(AudioListener.volume == 0){
	
		GameObject.Find("Unmute Symbol").transform.localPosition.y = -0.5;
		GameObject.Find("Mute Symbol").transform.localPosition.y = -0.14;
	
	}
	
	if(AudioListener.volume == 1){
	
		GameObject.Find("Unmute Symbol").transform.localPosition.y = -0.14;
		GameObject.Find("Mute Symbol").transform.localPosition.y = -0.5;
	
	}

	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(main_camera.transform.position.z == -50){
		
				if(GameObject.Find("Main Menu").transform.position == Vector3(0, 1, -49)){
		
					if(hit.transform.name == "Advance Button"){
					
						GameObject.Find("F1 Car Sound 2").GetComponent(AudioSource).audio.Play();
						move_camera_play_options = true;
					
					}
					
					if(hit.transform.name == "Quit Button"){
					
						Application.Quit();
					
					}
					
					if(hit.transform.name == "Stats Button"){
					
						iTween.MoveTo(GameObject.Find("Main Menu"), Vector3(1.75, 1, -49), 1);
					
					}
					
					if(hit.transform.name == "Information Symbol"){
					
						iTween.MoveTo(GameObject.Find("Main Menu"), Vector3(-1.75, 1, -49), 1);
					
					}
					
					if(hit.transform.name == "Unmute Symbol"){
					
						AudioListener.volume = 0;
						PlayerPrefs.SetInt("audio_listener", 0);
						GameObject.Find("Unmute Symbol").transform.localPosition.y = -0.5;
						GameObject.Find("Mute Symbol").transform.localPosition.y = -0.14;
					
					}
					
					if(hit.transform.name == "Mute Symbol"){
					
						AudioListener.volume = 1;
						PlayerPrefs.SetInt("audio_listener", 1);
						GameObject.Find("Unmute Symbol").transform.localPosition.y = -0.14;
						GameObject.Find("Mute Symbol").transform.localPosition.y = -0.5;
					
					}
				
				}
				
				if(GameObject.Find("Main Menu").transform.position.x == 1.75){
				
					if(hit.transform.name in stats_objects){
				
						iTween.MoveTo(GameObject.Find("Main Menu"), Vector3(0, 1, -49), 1);
					
					}
				
				}
				
				if(GameObject.Find("Main Menu").transform.position.x == -1.75){
				
					if(hit.transform.name in information_objects){
				
						iTween.MoveTo(GameObject.Find("Main Menu"), Vector3(0, 1, -49), 1);
					
					}
				
				}
			
			}
							
		}
		
	}
	
	if(move_camera_play_options){
		
		main_camera.transform.Translate(Vector3.forward * 0.05); //This is affected by yield WaitForSeconds but iTween isn't so the boolean variable can be falsified after this translation process
		Falsify_Camera_Movement_Var();
		
		if(main_camera.transform.position.z >= -49.5){
	
			iTween.MoveTo(main_camera, Vector3(0, 1.25, -29.75), 1.5);
	
		}	
	
	}
		
}



function Falsify_Camera_Movement_Var(){

	yield WaitForSeconds(0.5);
	move_camera_play_options = false;

}
