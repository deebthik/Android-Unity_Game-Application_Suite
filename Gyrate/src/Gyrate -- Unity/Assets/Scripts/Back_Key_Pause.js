#pragma strict

public static var back_key_play_pause : boolean = true;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){
	
		if((Ring_Rotate.play || Ring_Rotate_2.play_2) && back_key_play_pause && GameObject.Find("Pause Plane").transform.position.z == 10){
				
			if(Ring_Rotate.mode_1){
			
				Ring_Rotate.play = false;
			
			}else{
			
				Ring_Rotate_2.play_2 = false;
			
			}
			GameObject.Find("Pause Plane").transform.position.z = 5.5;
			GameObject.Find("Pause Symbol").transform.position.x = 100;
			GameObject.Find("Play Symbol").transform.position.x = 0;
			back_key_play_pause = false;
			Back_Key_Play_Pause();
			
		}
	
	}

}

public static function Back_Key_Play_Pause(){

	yield WaitForSeconds(0.001);
	back_key_play_pause = true;

}