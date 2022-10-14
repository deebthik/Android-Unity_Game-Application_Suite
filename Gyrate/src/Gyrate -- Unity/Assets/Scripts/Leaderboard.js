#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
	
			if(hit.transform.name == "Leaderboard Symbol"){
			
				Sign_In();
				
				PlayerPrefs.SetInt("allow was signed in", 1);
								
				if(PlayerPrefs.GetInt("was signed in") == 1 && PlayerPrefs.GetInt("show leaderboard") == 0){
				
					Show_Leaderboard();
				
				}
				
				iTween.RotateTo(GameObject.Find("Yellow Menu Ring"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Leaderboard Symbol"), Vector3(90, 0, 0), 1.5);
				
				iTween.RotateTo(GameObject.Find("Yellow Menu Ring Rear"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Leaderboard Symbol Rear"), Vector3(90, 180, 0), 1.5);
				
			}
			
			if(hit.transform.name == "Leaderboard Symbol Rear"){
			
				Sign_In();
				
				PlayerPrefs.SetInt("allow was signed in", 1);
								
				if(PlayerPrefs.GetInt("was signed in") == 1 && PlayerPrefs.GetInt("show leaderboard") == 0){
				
					Show_Leaderboard();
				
				}
							
				iTween.RotateTo(GameObject.Find("Yellow Menu Ring"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Leaderboard Symbol"), Vector3(90, 180, 0), 1.5);
				
				iTween.RotateTo(GameObject.Find("Yellow Menu Ring Rear"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Leaderboard Symbol Rear"), Vector3(90, 0, 0), 1.5);
				
			}
			
		}
		
	}
	
	/*if(PlayerPrefs.GetInt("rotate leaderboard") == 1){
	
		if(GameObject.Find("Leaderboard Symbol").transform.rotation == Quaternion.Euler(90, 180, 0)){
		
			iTween.RotateTo(GameObject.Find("Yellow Menu Ring"), Vector3(90, 0, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Leaderboard Symbol"), Vector3(90, 0, 0), 1.5);
					
			iTween.RotateTo(GameObject.Find("Yellow Menu Ring Rear"), Vector3(90, 180, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Leaderboard Symbol Rear"), Vector3(90, 180, 0), 1.5);
			
			PlayerPrefs.SetInt("rotate leaderboard", 0);
		
		}
		
		if(GameObject.Find("Leaderboard Symbol Rear").transform.rotation == Quaternion.Euler(90, 180, 0)){
		
			iTween.RotateTo(GameObject.Find("Yellow Menu Ring"), Vector3(90, 180, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Leaderboard Symbol"), Vector3(90, 180, 0), 1.5);
				
			iTween.RotateTo(GameObject.Find("Yellow Menu Ring Rear"), Vector3(90, 0, 0), 1.5);
			iTween.RotateTo(GameObject.Find("Leaderboard Symbol Rear"), Vector3(90, 0, 0), 1.5);
			
			PlayerPrefs.SetInt("rotate leaderboard", 0);
		
		}
	
	}*/
	

}

function Sign_In(){

	yield WaitForSeconds(0.75);
	PlayerPrefs.SetInt("sign in", 1);

}

function Show_Leaderboard(){

	yield WaitForSeconds(0.25);
	PlayerPrefs.SetInt("show leaderboard", 1);

}
