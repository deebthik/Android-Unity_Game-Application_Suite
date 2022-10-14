#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var fast_forward_score : int;
public static var rotate_ring : boolean = false;
public static var fast_forwarding : boolean = false;
var ring_rotation_quaternion;

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

	if(GameObject.Find("Gyrate Text").transform.position.x != 0 && PlayerPrefs.GetInt("high score") >= 100){
	
		GameObject.Find("Fast Forward Symbol").transform.position.x = -4;
		GameObject.Find("Fast Forward Score").transform.position.x = -2.75;
	
	}
	
	if(Ring_Rotate.score > 10 || Ring_Rotate.game_over){
	
		GameObject.Find("Fast Forward Symbol").transform.position.x = 100;
		GameObject.Find("Fast Forward Score").transform.position.x = 100;
	
	}
		
	fast_forward_score = (PlayerPrefs.GetInt("high score")-PlayerPrefs.GetInt("high score")%50)/2;
	GameObject.Find("Fast Forward Score").GetComponent(TextMesh).text = fast_forward_score.ToString(); 
	
	
	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "Fast Forward Symbol"){
	
				ring_rotation_quaternion = GameObject.Find("Ring").transform.rotation;
				fast_forwarding = true;
				Fast_Forward_Score_Transition();
				GameObject.Find("Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
				GameObject.Find("Ring 2").transform.rotation = Quaternion.Euler(90, 0, 0);
				rotate_ring = true;
				GameObject.Find("Fast Forward Symbol").transform.position.x = 100;
				GameObject.Find("Fast Forward Score").transform.position.x = 100;
				
			}
			
		}
		
	}
	
	if(rotate_ring){
		
		if(Ring_Rotate.score < fast_forward_score){
		
			GameObject.Find("Ring").transform.Rotate(Vector3.left * 15);
			GameObject.Find("Ring 2").transform.Rotate(Vector3.right * 15);
		
		}else{
			
			
			/*GameObject.Find("Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
			GameObject.Find("Ring 2").transform.rotation = Quaternion.Euler(90, 0, 0);*/
			Correction_Rotation_Ring();
			Correction_Rotation_Ring_2();
			
			Stop_Fast_Forwarding();
			rotate_ring = false;
		
		}
	
	}

}

function Fast_Forward_Score_Transition(){

	while(Ring_Rotate.score < fast_forward_score){
	
		Ring_Rotate.score += 1;
		GameObject.Find("Score").GetComponent(TextMesh).text = Ring_Rotate.score.ToString();
		yield WaitForSeconds(0.0001);
	
	}

}

function Stop_Fast_Forwarding(){

	yield WaitForSeconds(2);
	
	if(fast_forward_score == 50){
	
		Ring_Rotate.speed = 1.5 + (0.09*30);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*30);
	
	}
	
	if(fast_forward_score == 75){
	
		Ring_Rotate.speed = 1.5 + (0.09*55);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*55);
	
	}
	
	if(fast_forward_score == 100){
	
		Ring_Rotate.speed = 1.5 + (0.09*60);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*60);
	
	}
	
	if(fast_forward_score == 125){
	
		Ring_Rotate.speed = 1.5 + (0.09*85);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*85);
	
	}
	
	if(fast_forward_score == 150){
	
		Ring_Rotate.speed = 1.5 + (0.09*90);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*90);
	
	}
	
	if(fast_forward_score == 175){
	
		Ring_Rotate.speed = 1.5 + (0.09*115);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*115);
	
	}
	
	if(fast_forward_score == 200){
	
		Ring_Rotate.speed = 1.5 + (0.09*120);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*120);
	
	}
	
	if(fast_forward_score == 225){
	
		Ring_Rotate.speed = 1.5 + (0.09*145);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*145);
	
	}
	
	if(fast_forward_score == 250){
	
		Ring_Rotate.speed = 1.5 + (0.09*150);
		Ring_Rotate_2.speed_2 = 1.5 + (0.08*150);
	
	}
	
	fast_forwarding = false;

}

function Correction_Rotation_Ring(){

	while(GameObject.Find("Ring").transform.rotation != Quaternion.Euler(90, 180, 0)){
			
		GameObject.Find("Ring").transform.Rotate(Vector3.left * 15);
		yield;
	
	}
	
	GameObject.Find("Ring").transform.rotation =  ring_rotation_quaternion;

}

function Correction_Rotation_Ring_2(){

	while(GameObject.Find("Ring 2").transform.rotation != Quaternion.Euler(90, 0, 0)){
	
		GameObject.Find("Ring 2").transform.Rotate(Vector3.right * 15);
		yield;
	
	}

}
