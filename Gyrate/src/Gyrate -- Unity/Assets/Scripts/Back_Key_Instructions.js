#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){
	
		if(GameObject.Find("Instructions").transform.position.x == 0 && GameObject.Find("Gyrate Text").transform.position.x != 0){
		
			if(GameObject.Find("Pause Symbol").transform.position.x == 0 || GameObject.Find("Restart Symbol").transform.position.x == 0){
			
				GameObject.Find("Pause Plane").transform.position.z = 10;
			
			}
			
			if(GameObject.Find("Play Symbol").transform.position.x == 0){
			
				GameObject.Find("Pause Plane").transform.position.z = 5.5;
				
			}
			
			GameObject.Find("Instructions").transform.position.x = 100;
			Back_Key_Pause.back_key_play_pause = false;
			Back_Key_Pause.Back_Key_Play_Pause();
			Instructions.instructions = false;
			
			if(GameObject.Find("Gyrate Text").transform.position.x != 0 && !Ring_Rotate.game_over && GameObject.Find("Pause Symbol").transform.position.x == 0){
					
				Ring_Rotate.play = true;
					
			}
		
		}
		
		if(GameObject.Find("Instructions").transform.position.x == 0 && GameObject.Find("Gyrate Text").transform.position.x == 0){
		
			GameObject.Find("Instructions").transform.position.x = 100;
			GameObject.Find("Pause Plane").transform.position.z = 10;
			Instructions.instructions = false;
		
		}
		
	}

}

