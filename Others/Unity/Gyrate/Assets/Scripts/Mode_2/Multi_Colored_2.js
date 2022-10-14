#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var new_pointer : String;

function Start () {

}

function Update () {

	if(Ring_Rotate_2.play_2 && !Instructions.instructions){

		if(Ring_Rotate.mode_2 && !Ring_Rotate.mode_1){
		
		if(GameObject.Find("Multi Colored Pointer 2 Empty").transform.rotation.y == 0){
		
				if(Ring_Rotate_2.clockwise_2){
					
					GameObject.Find("Multi Colored Pointer 2 Empty").transform.Rotate(Vector3.back * Ring_Rotate_2.speed_2);
						
				}else{
					
					GameObject.Find("Multi Colored Pointer 2 Empty").transform.Rotate(Vector3.forward * Ring_Rotate_2.speed_2);
					
				}
			
			}
		
		}
		
	}

	if(Ring_Rotate_2.check_2){
	
		if(Input.GetMouseButtonDown(0)){
	
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if(Physics.Raycast(ray, hit)){
			
				if(!Instructions.instructions){
				
					if(hit.transform.name != "Pause Symbol" && hit.transform.name != "Green Pause Ring" && hit.transform.name != "Play Symbol" && hit.transform.name != "Question Mark"){

						if(GameObject.Find("Multi Colored Pointer 2 Empty").transform.rotation.y == 0){
											
							Ring_Rotate.mode_2 = false;
							Ring_Rotate.mode_1 = true;
							
							iTween.RotateTo(GameObject.Find("Ring"), Vector3(90, 180, 0), 1.5);
							iTween.RotateTo(GameObject.Find("Ring 2"), Vector3(90, 0, 0), 1.5);
							
							GameObject.Find("Multi Colored Pointer 2 Empty").transform.position.x = 100;
							GameObject.Find("Multi Colored Pointer 2 Empty").transform.rotation.y = 180;
							
							Ring_Rotate.play = false;
							New_Pointer();
							Play();
															
						}
					
					}
				
				}
			
			}
		
		}
	
	}

}

function New_Pointer(){

	yield WaitForSeconds(1);
	new_pointer = Ring_Rotate.beginning_pointers_name[Random.Range(0, Ring_Rotate.beginning_pointers_name.length)];
	GameObject.Find(new_pointer).transform.position.x = 0;

}

function Play(){

	yield WaitForSeconds(0.5);
	Ring_Rotate.play = true;

}
