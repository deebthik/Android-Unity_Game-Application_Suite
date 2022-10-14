#pragma strict

function Start () {

}

function Update () {

	if(GameObject.Find("Gyrate Text").transform.position.x != 0){
	
		if(Ring_Rotate.score < 10){
		
			GameObject.Find("Score").transform.position.x = -3.65;
		
		}
		
		if(Ring_Rotate.score >= 10 && Ring_Rotate.score < 20){
		
			GameObject.Find("Score").transform.position.x = -4.1;
	
		}
		
		if(Ring_Rotate.score >= 20 && Ring_Rotate.score < 100){
		
			GameObject.Find("Score").transform.position.x = -4.05;
	
		}
		
		if(Ring_Rotate.score >= 100){
		
			if(Ring_Rotate.score >= 100 && Ring_Rotate.score < 200){
			
				GameObject.Find("Score").transform.position.x = -4.325;
			
			}
			
			if(Ring_Rotate.score >= 200){
			
				GameObject.Find("Score").transform.position.x = -4.275;
			
			}
			
			GameObject.Find("Score").transform.position.y = 8.7;
			GameObject.Find("Score").transform.localScale.x = 0.125;
			GameObject.Find("Score").transform.localScale.y = 0.125;
			GameObject.Find("Score").transform.localScale.z = 0.125;
		
		}
	
	}

	if(GameObject.Find("Pause Plane").transform.position.z == 5.5){

		if(Ring_Rotate.score < 10){
		
			GameObject.Find("Score").transform.position.x = -3.65;
		
		}
		
		if(Ring_Rotate.score >= 10 && Ring_Rotate.score < 20){
		
			GameObject.Find("Score").transform.position.x = -4.1;
	
		}
		
		if(Ring_Rotate.score >= 20 && Ring_Rotate.score < 100){
		
			GameObject.Find("Score").transform.position.x = -4.05;
	
		}
		
		if(Ring_Rotate.score >= 100){
		
			if(Ring_Rotate.score >= 100 && Ring_Rotate.score < 200){
			
				GameObject.Find("Score").transform.position.x = -4.325;
			
			}
			
			if(Ring_Rotate.score >= 200){
			
				GameObject.Find("Score").transform.position.x = -4.275;
			
			}
			
			GameObject.Find("Score").transform.position.y = 8.7;
			GameObject.Find("Score").transform.localScale.x = 0.125;
			GameObject.Find("Score").transform.localScale.y = 0.125;
			GameObject.Find("Score").transform.localScale.z = 0.125;
		
		}
		
	}

	if(Ring_Rotate.play || Ring_Rotate.restart){
	
		if(Ring_Rotate.score < 10){
		
			GameObject.Find("Score").transform.position.x = -3.65;
		
		}
		
		if(Ring_Rotate.score >= 10 && Ring_Rotate.score < 20){
		
			GameObject.Find("Score").transform.position.x = -4.1;
	
		}
		
		if(Ring_Rotate.score >= 20 && Ring_Rotate.score < 100){
		
			GameObject.Find("Score").transform.position.x = -4.05;
	
		}
		
		if(Ring_Rotate.score >= 100){
		
			if(Ring_Rotate.score >= 100 && Ring_Rotate.score < 200){
			
				GameObject.Find("Score").transform.position.x = -4.325;
			
			}
			
			if(Ring_Rotate.score >= 200){
			
				GameObject.Find("Score").transform.position.x = -4.275;
			
			}
			
			GameObject.Find("Score").transform.position.y = 8.7;
			GameObject.Find("Score").transform.localScale.x = 0.125;
			GameObject.Find("Score").transform.localScale.y = 0.125;
			GameObject.Find("Score").transform.localScale.z = 0.125;
		
		}
		
		if(GameObject.Find("Red Pointer").transform.position.x == 0 || GameObject.Find("Red Pointer 2 Empty").transform.position.x == 0){
		
			GameObject.Find("Red Score Ring").transform.position.x = -3.25;
			GameObject.Find("Green Score Ring").transform.position.x = 100;
			GameObject.Find("Blue Score Ring").transform.position.x = 100;
			GameObject.Find("Yellow Score Ring").transform.position.x = 100;
			
			GameObject.Find("Red Pause Ring").transform.position.x = 0;
			GameObject.Find("Green Pause Ring").transform.position.x = 100;
			GameObject.Find("Blue Pause Ring").transform.position.x = 100;
			GameObject.Find("Yellow Pause Ring").transform.position.x = 100;
		
		}
		
		if(GameObject.Find("Green Pointer").transform.position.x == 0 || GameObject.Find("Green Pointer 2 Empty").transform.position.x == 0){
		
			GameObject.Find("Green Score Ring").transform.position.x = -3.25;
			GameObject.Find("Red Score Ring").transform.position.x = 100;
			GameObject.Find("Blue Score Ring").transform.position.x = 100;
			GameObject.Find("Yellow Score Ring").transform.position.x = 100;
			
			GameObject.Find("Green Pause Ring").transform.position.x = 0;
			GameObject.Find("Red Pause Ring").transform.position.x = 100;
			GameObject.Find("Blue Pause Ring").transform.position.x = 100;
			GameObject.Find("Yellow Pause Ring").transform.position.x = 100;
		
		}
		
		if(GameObject.Find("Blue Pointer").transform.position.x == 0 || GameObject.Find("Blue Pointer 2 Empty").transform.position.x == 0){
		
			GameObject.Find("Blue Score Ring").transform.position.x = -3.25;
			GameObject.Find("Green Score Ring").transform.position.x = 100;
			GameObject.Find("Red Score Ring").transform.position.x = 100;
			GameObject.Find("Yellow Score Ring").transform.position.x = 100;
			
			GameObject.Find("Blue Pause Ring").transform.position.x = 0;
			GameObject.Find("Green Pause Ring").transform.position.x = 100;
			GameObject.Find("Red Pause Ring").transform.position.x = 100;
			GameObject.Find("Yellow Pause Ring").transform.position.x = 100;
		
		}
		
		if(GameObject.Find("Yellow Pointer").transform.position.x == 0 || GameObject.Find("Yellow Pointer 2 Empty").transform.position.x == 0){
		
			GameObject.Find("Yellow Score Ring").transform.position.x = -3.25;
			GameObject.Find("Blue Score Ring").transform.position.x = 100;
			GameObject.Find("Green Score Ring").transform.position.x = 100;
			GameObject.Find("Red Score Ring").transform.position.x = 100;
			
			GameObject.Find("Yellow Pause Ring").transform.position.x = 0;
			GameObject.Find("Blue Pause Ring").transform.position.x = 100;
			GameObject.Find("Green Pause Ring").transform.position.x = 100;
			GameObject.Find("Red Pause Ring").transform.position.x = 100;
		
		}
	
	}
	

}