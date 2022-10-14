#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {

	if(Ring_Rotate.check && !Fast_Forward.fast_forwarding){
	
		if(Input.GetMouseButtonDown(0)){
	
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if(Physics.Raycast(ray, hit)){
			
				if(!Instructions.instructions){
				
					if(hit.transform.name not in Ring_Rotate.intangible_items){
					
						if(GameObject.Find("Red Pointer").transform.position.x == 0){
						
							if(Ring_Rotate.play){
						
								Ring_Rotate.Clockwise_Anticlockwise("Red Side", "Red Pointer", "Red Pause Ring");
							
							}
					
						}
										
					}
					
				}
				
				if(GameObject.Find("Red Pointer").transform.position.x == 0){
				
					if(hit.transform.name in Play_Pause.restart_items){
					
						GameObject.Find("Red Score Ring").transform.position.x = 100;
						Ring_Rotate.Restart("Red Pointer", "Red Pause Ring");
						Ring_Rotate.restart = false;
						
						Ring_Rotate.Main_Menu_Items_Restart();
					
					}
				
				}
				
			}
		
		}
		
		if(Ring_Rotate.play){
		
			if(GameObject.Find("Red Pointer").transform.position.x == 0){
			
				if(Ring_Rotate.Distance("Red Side", "Red Pointer", "Red Pause Ring")){
				
					Ring_Rotate.in_range = true;
				
				}
				
				if(Ring_Rotate.in_range){
				
					if(!Ring_Rotate.Distance("Red Side", "Red Pointer", "Red Pause Ring")){
					
						Ring_Rotate.Game_Over("Red Pointer", "Red Pause Ring");
						Ring_Rotate.in_range = false;
					
					}
				
				}
			
			}
		
		}
	
	}

}