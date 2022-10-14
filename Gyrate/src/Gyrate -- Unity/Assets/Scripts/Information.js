#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
public static var close_information = false;

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "Information Symbol"){
			
				GameObject.Find("Pause Plane").transform.position.z = 1;
				GameObject.Find("Information").transform.position.x = 0;
				GameObject.Find("Gyrate Text").transform.position.y = 100;
				Close_Information();
			
			}
			
			if(close_information){
			
				if(hit.transform.name == "Pause Plane" || hit.transform.name == "Information"){
				
					GameObject.Find("Pause Plane").transform.position.z = 10;
					while(GameObject.Find("Information").transform.position.x != 100){
						GameObject.Find("Information").transform.position.x = 100;
					}
					GameObject.Find("Gyrate Text").transform.position.y = 6.5;
					Open_Information();
				
				}	
			
			}
		
		}
		
	}
	
	if(Input.GetKeyDown(KeyCode.Escape)){
	
		if(close_information){
		
			GameObject.Find("Pause Plane").transform.position.z = 10;
			while(GameObject.Find("Information").transform.position.x != 100){
				GameObject.Find("Information").transform.position.x = 100;
			}
			GameObject.Find("Gyrate Text").transform.position.y = 6.5;
			Open_Information();
		
		}
	
	}

}

function Close_Information(){

	yield WaitForSeconds(0.1);
	close_information = true;

}

function Open_Information(){

	yield WaitForSeconds(0.1);
	close_information = false;
	
}