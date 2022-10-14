#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){
	
		if(GameObject.Find("Pause Plane").transform.position.z == 5.5 && Back_Key_Pause.back_key_play_pause){
		
			if(Ring_Rotate.mode_1){
			
				Ring_Rotate.play = true;
			
			}else{
			
				Ring_Rotate_2.play_2 = true;
			
			}
			
			GameObject.Find("Pause Plane").transform.position.z = 10;
			GameObject.Find("Pause Symbol").transform.position.x = 0;
			GameObject.Find("Play Symbol").transform.position.x = 100;
			Back_Key_Pause.back_key_play_pause = false;
			Back_Key_Pause.Back_Key_Play_Pause();
			
		}
		
	}

}