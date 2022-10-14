#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
public static var instructions : boolean;
public static var close_instructions : boolean = false;
var instructions_plane_paused : boolean;

function Start () {

}

function Update () {

	if(Instructions.instructions){
		
		if(GameObject.Find("Pause Plane").transform.position.z == 5.5){
		
			instructions_plane_paused = true;
		
		}
		GameObject.Find("Pause Plane").transform.position.z = 1;
		GameObject.Find("Instructions").transform.position.x = 0;
		
		Close_Instructions();
	
	}
	
	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
			if(close_instructions){
			
				if(hit.transform.name == "Pause Plane" || hit.transform.name == "Instructions"){
				
					Instructions.instructions = false;
					if(GameObject.Find("Pause Plane").transform.position.z == 1){
					
						GameObject.Find("Pause Plane").transform.position.z = 10;
					
					}
					if(instructions_plane_paused){
						
						if(GameObject.Find("Restart Symbol").transform.position.x == 0){
						
							GameObject.Find("Pause Plane").transform.position.z = 10;
						
						}else{
						
							GameObject.Find("Pause Plane").transform.position.z = 5.5;
						
						}
						instructions_plane_paused = false;
					
					}
					GameObject.Find("Instructions").transform.position.x = 100;
					close_instructions = false;
					if(GameObject.Find("Gyrate Text").transform.position.x != 0 && !Ring_Rotate.game_over && GameObject.Find("Pause Symbol").transform.position.x == 0){
					
						Ring_Rotate.play = true;
					
					}
				
				}
				
			}
			
			if(hit.transform.name == "Question Mark"){
			
				instructions = true;
			
			}
		
		}

	}

}

function Close_Instructions(){

	yield WaitForSeconds(0.1);
	close_instructions = true;

}