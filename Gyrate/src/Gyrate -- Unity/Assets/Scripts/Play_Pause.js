#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
public static var pause_items : Array = ["Pause Symbol"];
public static var play_items : Array = ["Play Symbol"];
public static var restart_items : Array = ["Restart Symbol"];

function Start () {

}

function Update () {
	
	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
			
			if(Ring_Rotate.play || Ring_Rotate_2.play_2){
			
				if(hit.transform.name in pause_items){
				
					if(GameObject.Find("Pause Symbol").transform.position.x == 0){
					
						Ring_Rotate.play = false;
						Ring_Rotate_2.play_2 = false;
						GameObject.Find("Pause Plane").transform.position.z = 5.5;
						GameObject.Find("Pause Symbol").transform.position.x = 100;
						GameObject.Find("Play Symbol").transform.position.x = 0;
					
					}
				
				}
			
			}
			
			
			if(hit.transform.name in play_items){
						
				if(GameObject.Find("Play Symbol").transform.position.x == 0){
			
					if(PlayerPrefs.GetInt("first time", 1) == 1){
					
						Instructions.instructions = true;
						PlayerPrefs.SetInt("first time", 0);
					
					}
					
					if(GameObject.Find("Pause Plane").transform.position.z == 10){
							
							GameObject.Find("Gyrate Text").transform.position.x = 100;
							Ring_Rotate.beginning_pointer = true;
						
					}
						
					//GameObject.Find("Question Mark").transform.position.x = 100;
					if(GameObject.Find("Gyrate Text").transform.position.x == 0){
						GameObject.Find("Score").transform.position.x = -3.65;
						GameObject.Find("High Score Dynamic").transform.position.x = 2.9;
					}
					GameObject.Find("High Score Dynamic Ring").transform.position.x = 3.3;
					GameObject.Find("Pause Plane").transform.position.z = 10;
					GameObject.Find("Pause Symbol").transform.position.x = 0;
					GameObject.Find("Play Symbol").transform.position.x = 100;
					
					GameObject.Find("Red Menu Ring").transform.position.x = 100;
					GameObject.Find("Blue Menu Ring").transform.position.x = 100;
					GameObject.Find("Yellow Menu Ring").transform.position.x = 100;
					GameObject.Find("Green Menu Ring").transform.position.x = 100;
					
					GameObject.Find("Red Menu Ring Rear").transform.position.x = 100;
					GameObject.Find("Blue Menu Ring Rear").transform.position.x = 100;
					GameObject.Find("Green Menu Ring Rear").transform.position.x = 100;
					GameObject.Find("Yellow Menu Ring Rear").transform.position.x = 100;
					
					GameObject.Find("Unmute Symbol").transform.position.x = 100;
					GameObject.Find("Mute Symbol").transform.position.x = 100;
					GameObject.Find("High Score Plane").transform.position.x = 100;
					GameObject.Find("High Score Symbol").transform.position.x = 100;
					GameObject.Find("Leaderboard Symbol").transform.position.x = 100;
					GameObject.Find("Leaderboard Symbol Rear").transform.position.x = 100;
					GameObject.Find("Achievements Symbol").transform.position.x = 100;
					GameObject.Find("Achievements Symbol Rear").transform.position.x = 100;
					GameObject.Find("Thumbs Up").transform.position.x = 100;
					GameObject.Find("Information Symbol").transform.position.x = 100;
					
					if(!Instructions.instructions){
						
						if(Ring_Rotate.mode_1){
						
							Ring_Rotate.play = true;
						
						}else{
							
							Ring_Rotate_2.play_2 = true;
						}
					
					}	
				
				}
			
			}
			
		}
	
	}

}

/*function OnApplicationPause(){

	if(Ring_Rotate.play){
	
		Ring_Rotate.play = false;
		GameObject.Find("Pause Plane").transform.position.z = 5.5;
		GameObject.Find("Pause Symbol").transform.position.x = 100;
		GameObject.Find("Play Symbol").transform.position.x = 0;
	
	}

}*/
