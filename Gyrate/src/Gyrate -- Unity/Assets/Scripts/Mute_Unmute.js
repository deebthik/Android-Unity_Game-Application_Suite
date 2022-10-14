#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
public static var mute : boolean = false;

function Awake(){

	if(PlayerPrefs.GetInt("mute") == 1){
	
		AudioListener.volume = 0;
		GameObject.Find("Mute Symbol").transform.rotation = Quaternion.Euler(90, 180, 0);
		GameObject.Find("Red Menu Ring Rear").transform.rotation = Quaternion.Euler(90, 180, 0);
		
		GameObject.Find("Unmute Symbol").transform.rotation = Quaternion.Euler(90, 0, 0);
		GameObject.Find("Red Menu Ring").transform.rotation = Quaternion.Euler(90, 0, 0);
	
	}else{
	
		AudioListener.volume = 1;
		GameObject.Find("Mute Symbol").transform.rotation = Quaternion.Euler(90, 0, 0);
		GameObject.Find("Red Menu Ring Rear").transform.rotation = Quaternion.Euler(90, 0, 0);
		
		GameObject.Find("Unmute Symbol").transform.rotation = Quaternion.Euler(90, 180, 0);
		GameObject.Find("Red Menu Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
	
	}

}

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
				
			if(hit.transform.name == "Unmute Symbol"){
			
					iTween.RotateTo(GameObject.Find("Unmute Symbol"), Vector3(90, 0, 0), 1.5);
					iTween.RotateTo(GameObject.Find("Red Menu Ring"), Vector3(90, 0, 0), 1.5);
					
					iTween.RotateTo(GameObject.Find("Mute Symbol"), Vector3(90, 180, 0), 1.5);
					iTween.RotateTo(GameObject.Find("Red Menu Ring Rear"), Vector3(90, 180, 0), 1.5);
					
					AudioListener.volume = 0;
					PlayerPrefs.SetInt("mute", 1);
					
			}
			
			if(hit.transform.name == "Mute Symbol"){
				
				iTween.RotateTo(GameObject.Find("Unmute Symbol"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Red Menu Ring"), Vector3(90, 180, 0), 1.5);
					
				iTween.RotateTo(GameObject.Find("Mute Symbol"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Red Menu Ring Rear"), Vector3(90, 0, 0), 1.5);
					
				AudioListener.volume = 1;
				PlayerPrefs.SetInt("mute", 0);
					
			}	
				
		}
				
	}

}
