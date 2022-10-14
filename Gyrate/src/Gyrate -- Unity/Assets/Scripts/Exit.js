#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){
		
		if(GameObject.Find("Pause Plane").transform.position.z == 10 && !Ring_Rotate.play){
			
			Application.Quit();
		
		}
		
		/*if(Instructions.close_instructions){
		
			Instructions.instructions = false;
			if(GameObject.Find("Gyrate Text").transform.position.x != 0 && GameObject.Find("Pause Plane").transform.position.z == 1 && GameObject.Find("Play Symbol").transform.position.x != 0){
			
				Wait();
			
			}else{
			
				if(GameObject.Find("High Score Symbol").transform.position.x == 0){
				
					GameObject.Find("Pause Plane").transform.position.z = 10;
				
				}else{
				
					GameObject.Find("Pause Plane").transform.position.z = 5.5;
				
				}
			
			}
			GameObject.Find("Instructions").transform.position.x = 100;
			Instructions.close_instructions = false;
			Back_Key_Pause.back_key_play_pause = false;
			Back_Key_Pause.Back_Key_Play_Pause();
		
		}*/
	
	}
	
}

function OnApplicationQuit() {
		// Make sure prefs are saved before quitting.
		PlayerPrefs.SetInt("allow was signed in", 0);
		PlayerPrefs.SetInt("allow was signed in achievements", 0);
		PlayerPrefs.Save();
}

/*function Wait(){

	yield WaitForSeconds(0.001);
	GameObject.Find("Pause Plane").transform.position.z = 10;

}*/
