#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var new_pointer : String;

function Start () {

}

function Update () {

	if(Ring_Rotate.check){
	
		if(Input.GetMouseButtonDown(0)){
	
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if(Physics.Raycast(ray, hit)){
			
				if(!Instructions.instructions){
				
					if(hit.transform.name != "Pause Symbol" && hit.transform.name != "Green Pause Ring" && hit.transform.name != "Play Symbol" && hit.transform.name != "Question Mark"){

						if(GameObject.Find("Multi Colored Pointer").transform.position.x == 0){
											
							Ring_Rotate.mode_2 = true;
							Ring_Rotate.mode_1 = false;
							
							GameObject.Find("Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
							iTween.RotateTo(GameObject.Find("Ring"), Vector3(90, 0, 0), 1.5);
							iTween.RotateTo(GameObject.Find("Ring 2"), Vector3(90, 180, 0), 1.5);
							
							GameObject.Find("Multi Colored Pointer").transform.position.x = 100;
							
							Ring_Rotate_2.play_2 = false;
							New_Pointer();
							Play_2();
															
						}
					
					}
				
				}
			
			}
		
		}
	
	}

}

function New_Pointer(){

	yield WaitForSeconds(1);
	new_pointer = Ring_Rotate_2.beginning_pointers_name_2[Random.Range(0, Ring_Rotate_2.beginning_pointers_name_2.length)];
	GameObject.Find(new_pointer).transform.position.x = 0;
	GameObject.Find(new_pointer).transform.rotation = Quaternion.Euler(0, 0, 0);

}

function Play_2(){

	yield WaitForSeconds(1.5);
	Ring_Rotate_2.play_2 = true;

}
