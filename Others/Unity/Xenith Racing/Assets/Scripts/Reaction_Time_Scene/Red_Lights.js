#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var last_time_intervals : Array = [3, 4, 5, 6, 7, 8, 9];
public static var reaction_time_start : float;
public static var reaction_time_end : float;
public static var reaction_time : float;
var calculate_reaction_start_time : boolean;
calculate_reaction_start_time = true;
public static var move_car : boolean;
public static var reaction : boolean;
public static var reaction_over : boolean;
public static var fault : boolean;
var red_light_clone_1 : GameObject;
var red_light_clone_2 : GameObject;
var red_light_clone_3 : GameObject;
var red_light_clone_4 : GameObject;
var red_light_clone_5 : GameObject;

function Start () {

reaction_time = 0;
reaction_time_end = 0;
reaction_time_start = 0;
move_car = false;
reaction = false;
reaction_over = false;
fault = false;

Instantiate(GameObject.Find("Red Light 1"), Vector3(-100, 5, 0), Quaternion.Euler(0, 0, 0));
Instantiate(GameObject.Find("Red Light 2"), Vector3(-100, 5, 0), Quaternion.Euler(0, 0, 0));
Instantiate(GameObject.Find("Red Light 3"), Vector3(-100, 5, 0), Quaternion.Euler(0, 0, 0));
Instantiate(GameObject.Find("Red Light 4"), Vector3(-100, 5, 0), Quaternion.Euler(0, 0, 0));
Instantiate(GameObject.Find("Red Light 5"), Vector3(-100, 5, 0), Quaternion.Euler(0, 0, 0));

red_light_clone_1 = GameObject.Find("Red Light 1(Clone)");
red_light_clone_2 = GameObject.Find("Red Light 2(Clone)");
red_light_clone_3 = GameObject.Find("Red Light 3(Clone)");
red_light_clone_4 = GameObject.Find("Red Light 4(Clone)");
red_light_clone_5 = GameObject.Find("Red Light 5(Clone)");

}

function Update () {

	if(GameObject.Find("Pause Menu(Clone)")){
	
		Time.timeScale = 0;
	
	}else{
	
		Time.timeScale = 1;
	
	}
	
	Display_Red_Light();
	
	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "Trigger"){
			
				if(reaction){
					
					GameObject.Find("F1 Car Sound").GetComponent(AudioSource).audio.Play();
					reaction_time_end = Time.time;
					reaction_time = reaction_time_end - reaction_time_start;
					
					if(reaction_time < PlayerPrefs.GetFloat("best_reaction_time", 1000)){
					
						PlayerPrefs.SetFloat("best_reaction_time", reaction_time);
					
					}
					
					PlayerPrefs.SetInt("reaction_tests_taken", PlayerPrefs.GetInt("reaction_tests_taken", 0) + 1);
					
					GameObject.Find("Reaction Time Plane").transform.position.x = 0;
					move_car = true;
					reaction_over = true;
				
				}else{
					
					Time.timeScale = 1;
					fault = true;
					GameObject.Find("Fault Plane").transform.position.x = 0;
					Destroy(red_light_clone_1);
					Destroy(red_light_clone_2);
					Destroy(red_light_clone_3);
					Destroy(red_light_clone_4);
					Destroy(red_light_clone_5);
					
					Destroy(GameObject.Find("Xenith Racing Car"));
					Destroy(GameObject.Find("Road"));
					Destroy(GameObject.Find("Trigger"));
					Instantiate(GameObject.Find("Restart Button"), Vector3(0, 1, -1), Quaternion.Euler(90, 180, 0));
					Instantiate(GameObject.Find("Quit Button 2"), Vector3(0, -1.5, -1), Quaternion.Euler(90, 180, 0));
			
				}
							
			}
		
		}
		
	}
		
}


function Display_Red_Light(){
	
	yield WaitForSeconds(2);
	if(red_light_clone_1){
	
		red_light_clone_1.transform.position.x = -5.25;
		
	}
	
	yield WaitForSeconds(2);
	if(red_light_clone_2){
	
		red_light_clone_2.transform.position.x = -3.25;
		
	}
	
	yield WaitForSeconds(2);
	if(red_light_clone_3){
	
		red_light_clone_3.transform.position.x = -1.25;
	
	}
	
	yield WaitForSeconds(2);
	if(red_light_clone_4){
	
		red_light_clone_4.transform.position.x = 0.75;
	
	}
	
	yield WaitForSeconds(2);
	if(red_light_clone_5){
	
		red_light_clone_5.transform.position.x = 2.75;
	
	}
	
	yield WaitForSeconds(last_time_intervals[Random.Range(0, last_time_intervals.length)]);
	
	if(calculate_reaction_start_time){
		reaction_time_start = Time.time;
		calculate_reaction_start_time = false;
	}
	
	Destroy(GameObject.Find("Red Light 1(Clone)"));
	Destroy(GameObject.Find("Red Light 2(Clone)"));
	Destroy(GameObject.Find("Red Light 3(Clone)"));
	Destroy(GameObject.Find("Red Light 4(Clone)"));
	Destroy(GameObject.Find("Red Light 5(Clone)"));
	reaction = true;
	
	
}