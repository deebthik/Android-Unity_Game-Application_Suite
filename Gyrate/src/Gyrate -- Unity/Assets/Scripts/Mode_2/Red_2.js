#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {

	if(Ring_Rotate_2.play_2 && !Instructions.instructions && GameObject.Find("Pause Plane").transform.position.z == 10){

		if(Ring_Rotate.mode_2 && !Ring_Rotate.mode_1){
		
			if(GameObject.Find("Red Pointer 2 Empty").transform.rotation.y == 0){
			
				for(var i = 0; i < Ring_Rotate_2.score_rings_2.length; i++){
				
					if(Ring_Rotate_2.score_rings_2[i] != "Red Score Ring"){
					
						GameObject.Find(Ring_Rotate_2.score_rings_2[i]).transform.position.x = 100;
					
					}else{
					
						GameObject.Find(Ring_Rotate_2.score_rings_2[i]).transform.position.x = -3.25;
					
					}
				
				}
				
				for(var j = 0; j < Ring_Rotate_2.pause_rings_2.length; j++){
				
					if(Ring_Rotate_2.pause_rings_2[j] != "Red Pause Ring"){
					
						GameObject.Find(Ring_Rotate_2.pause_rings_2[j]).transform.position.x = 100;
					
					}else{
					
						GameObject.Find(Ring_Rotate_2.pause_rings_2[j]).transform.position.x = 0;
					
					}
				
				}
				
				if(Ring_Rotate_2.clockwise_2){
				
					GameObject.Find("Red Pointer 2 Empty").transform.Rotate(Vector3.back * Ring_Rotate_2.speed_2);
					
				}else{
				
					GameObject.Find("Red Pointer 2 Empty").transform.Rotate(Vector3.forward * Ring_Rotate_2.speed_2);
				
				}
			
			}
			
			
			
			
			
			if(Ring_Rotate_2.check_2){
			
				if(Input.GetMouseButtonDown(0)){
				
					ray = Camera.main.ScreenPointToRay(Input.mousePosition);
					if(Physics.Raycast(ray, hit)){
					
						if(!Instructions.instructions){
						
							if(hit.transform.name not in Ring_Rotate.intangible_items){
							
								if(GameObject.Find("Red Pointer 2 Empty").transform.rotation.y == 0){
							
									if(Ring_Rotate_2.play_2){
								
										Ring_Rotate_2.Clockwise_Anticlockwise_2("Red Pointer 2", "Red Pointer 2 Empty", "Red Side 2", "Red Pause Ring");
								
									}
						
								}
							
							}
							
						}
						
						if(GameObject.Find("Red Pause Ring").transform.position.x == 0){
					
							if(hit.transform.name in Play_Pause.restart_items){
							
								if(GameObject.Find("Restart Symbol").transform.position.x == 0){
							
									GameObject.Find("Red Score Ring").transform.position.x = 100;
									Ring_Rotate_2.Restart_2("Red Pointer 2 Empty", "Red Pause Ring");
									Ring_Rotate.restart = false;
									
									Ring_Rotate.Main_Menu_Items_Restart();
								
								}
							
							}
						
						}
						
					}
					
				}
							
				if(Ring_Rotate_2.play_2 && Ring_Rotate.mode_2 && !Instructions.instructions){
					
					if(GameObject.Find("Red Pause Ring").transform.position.x == 0){
						
						if(Ring_Rotate_2.Distance_2("Red Pointer 2", "Red Side 2", "Red Pause Ring")){
						
							Ring_Rotate_2.in_range_2 = true;
						
						}
						
						if(Ring_Rotate_2.in_range_2){
						
							if(!Ring_Rotate_2.Distance_2("Red Pointer 2", "Red Side 2", "Red Pause Ring")){
																
								Ring_Rotate_2.Game_Over_2("Red Pointer 2", "Red Pointer 2 Empty", "Red Pause Ring");
								Ring_Rotate_2.in_range_2 = false;
								
							}
						
						}
					
					}
																			
				}
			
			}
		
		}
	
	}

}
