#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "Achievements Symbol"){
			
				Sign_In();
				
				PlayerPrefs.SetInt("allow was signed in achievements", 1);
								
				if(PlayerPrefs.GetInt("was signed in achievements") == 1){
				
					Show_Achievements();
				
				}
			
				iTween.RotateTo(GameObject.Find("Achievements Symbol"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Green Menu Ring"), Vector3(90, 0, 0), 1.5);
				
				iTween.RotateTo(GameObject.Find("Achievements Symbol Rear"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Green Menu Ring Rear"), Vector3(90, 180, 0), 1.5);
				
			}
			
			if(hit.transform.name == "Achievements Symbol Rear"){
			
				Sign_In();
				
				PlayerPrefs.SetInt("allow was signed in achievements", 1);
								
				if(PlayerPrefs.GetInt("was signed in achievements") == 1){
				
					Show_Achievements();
				
				}
			
				iTween.RotateTo(GameObject.Find("Achievements Symbol"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Green Menu Ring"), Vector3(90, 180, 0), 1.5);
				
				iTween.RotateTo(GameObject.Find("Achievements Symbol Rear"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Green Menu Ring Rear"), Vector3(90, 0, 0), 1.5);
				
			}
		
		}
		
	}
	
	
	/*if(PlayerPrefs.GetInt("rotate achievements") == 1){
	
		if(GameObject.Find("Achievements Symbol").transform.rotation == Quaternion.Euler(90, 180, 0)){
		
			iTween.RotateTo(GameObject.Find("Green Menu Ring"), Vector3(90, 0, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Achievements Symbol"), Vector3(90, 0, 0), 1.5);
					
			iTween.RotateTo(GameObject.Find("Green Menu Ring Rear"), Vector3(90, 180, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Achievements Symbol Rear"), Vector3(90, 180, 0), 1.5);
			
			PlayerPrefs.SetInt("rotate achievements", 0);
		
		}
		
		if(GameObject.Find("Achievements Symbol Rear").transform.rotation == Quaternion.Euler(90, 180, 0)){
		
			iTween.RotateTo(GameObject.Find("Green Menu Ring"), Vector3(90, 180, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Achievements Symbol"), Vector3(90, 180, 0), 1.5);
				
			iTween.RotateTo(GameObject.Find("Green Menu Ring Rear"), Vector3(90, 0, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Achievements Symbol Rear"), Vector3(90, 0, 0), 1.5);
			
			PlayerPrefs.SetInt("rotate achievements", 0);
		
		}
	
	}*/

}

function Show_Achievements(){

	yield WaitForSeconds(0.5);
	PlayerPrefs.SetInt("show achievements", 1);

}

function Sign_In(){

	yield WaitForSeconds(0.75);
	PlayerPrefs.SetInt("sign in achievements", 1);

}