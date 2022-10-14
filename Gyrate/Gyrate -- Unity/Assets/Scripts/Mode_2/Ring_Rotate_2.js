#pragma strict

public static var beginning_pointer_2 : boolean = true;
public static var beginning_pointers_name_2 : Array = ["Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty"];
public static var pointers_name_2 : Array = ["Red Pointer 2 Empty", "Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty","Red Pointer 2 Empty", "Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty", "Red Pointer 2 Empty", "Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty","Red Pointer 2 Empty", "Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty", "Red Pointer 2 Empty", "Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty", "Red Pointer 2 Empty", "Green Pointer 2 Empty", "Blue Pointer 2 Empty", "Yellow Pointer 2 Empty", "Multi Colored Pointer 2 Empty"];
public static var score_rings_2 : Array = ["Red Score Ring", "Green Score Ring", "Blue Score Ring", "Yellow Score Ring"];
public static var pause_rings_2 : Array = ["Red Pause Ring", "Green Pause Ring", "Blue Pause Ring", "Yellow Pause Ring"];
public static var speed_2 : float = 1.5;
public static var clockwise_2 : boolean = true;
public static var anticlockwise_2 : boolean = false;
public static var check_2 : boolean = true;
public static var new_pointer_2 : String;
public static var in_range_2 : boolean;
public static var play_2 : boolean = false;

function Start () {

}

function Update () {

	if(Ring_Rotate.mode_2 && !Ring_Rotate.mode_1){

		if(Ring_Rotate.game_over){
			
			if(!anticlockwise_2){
			
				GameObject.Find("Ring 2").transform.Rotate(Vector3.up * 20);
			
			}else{
			
				GameObject.Find("Ring 2").transform.Rotate(Vector3.down * 20);
			
			}
		
		}
		
	}

}

public static function Distance_2(pointer, side, pause_ring){

	if(Mathf.Sqrt(Mathf.Pow((GameObject.Find(pointer).transform.position.x - GameObject.Find(side).transform.position.x), 2) + Mathf.Pow((GameObject.Find(pointer).transform.position.y-GameObject.Find(side).transform.position.y), 2)) <= 3.55){
	
		return true;
		
	}else{
	
		return false;
	
	}

}

public static function Clockwise_Anticlockwise_2(pointer, pointer_empty, side, pause_ring){

	if(Distance_2(pointer, side, pause_ring)){
		
			Ring_Rotate.Sounds_Play();
			Ring_Rotate.score += 1;
			GameObject.Find("Score").GetComponent(TextMesh).text = Ring_Rotate.score.ToString();
			
			new_pointer_2 = pointers_name_2[Random.Range(0, pointers_name_2.length)];
			while(new_pointer_2 == pointer_empty){
			
				new_pointer_2 = pointers_name_2[Random.Range(0, pointers_name_2.length)];
			
			}
			in_range_2 = false;
			GameObject.Find(pointer_empty).transform.position.x = 100;
			GameObject.Find(new_pointer_2).transform.position.x = 0;
			GameObject.Find(new_pointer_2).transform.rotation.y = 0;
			GameObject.Find(new_pointer_2).transform.rotation = GameObject.Find(pointer_empty).transform.rotation;
			GameObject.Find(pointer_empty).transform.rotation.y = 180;
			if(Ring_Rotate.score < 30){
				speed_2 += 0.08;
			}
			if(Ring_Rotate.score >= 50 && Ring_Rotate.score < 80){
				speed_2 += 0.08;
			}
			if(Ring_Rotate.score >= 100 && Ring_Rotate.score < 130){
				speed_2 += 0.08;
			}
			if(Ring_Rotate.score >= 150 && Ring_Rotate.score < 180){
				speed_2 += 0.08;
			}
			if(Ring_Rotate.score >= 200 && Ring_Rotate.score < 230){
				speed_2 += 0.08;
			}
			check_2 = false;
			
			if(anticlockwise_2){
			
				clockwise_2 = true;
				anticlockwise_2 = false;
			
			}else{
			
				clockwise_2 = false;
				anticlockwise_2 = true;
			
			}
				
	}else{
		
		GameObject.Find("B End").GetComponent(AudioSource).audio.Play();
		Ring_Rotate.game_over = true;
		Ring_Rotate.play = false;
		GameObject.Find("Pause Symbol").transform.position.x = 100;
		GameObject.Find(pause_ring).transform.position.x = 100;
		GameObject.Find("Game Over").transform.position.x = 0;
		GameObject.Find(pointer_empty).transform.rotation.y = 180;
		GameObject.Find(pointer_empty).transform.position.x = 100;
		
		yield WaitForSeconds(1);
		GameObject.Find("Game Over").transform.position.x = 100;
		GameObject.Find(pause_ring).transform.position.x = 0;
		GameObject.Find("Restart Symbol").transform.position.x = 0;
		
	}

}

public static function Game_Over_2(pointer, pointer_empty, pause_ring){
		
		GameObject.Find("B End").GetComponent(AudioSource).audio.Play();
		Ring_Rotate.game_over = true;
		Ring_Rotate.play = false;
		GameObject.Find("Pause Symbol").transform.position.x = 100;
		GameObject.Find(pause_ring).transform.position.x = 100;
		GameObject.Find("Game Over").transform.position.x = 0;
		GameObject.Find(pointer_empty).transform.rotation.y = 180;
		GameObject.Find(pointer_empty).transform.position.x = 100;
		
		yield WaitForSeconds(1);
		GameObject.Find("Game Over").transform.position.x = 100;
		GameObject.Find(pause_ring).transform.position.x = 0;
		GameObject.Find("Restart Symbol").transform.position.x = 0;
	
}

public static function Restart_2(pointer_empty, pause_ring){

		Ring_Rotate.restart = true;
		Ring_Rotate.anticlockwise = Ring_Rotate.booleans[Random.Range(0, Ring_Rotate.booleans.length)];
		Ring_Rotate.game_over = false;
		Ring_Rotate.score = 0;
		Ring_Rotate_2.play_2 = false;
		Ring_Rotate_2.speed_2 = 1.5;
		Ring_Rotate.speed = 1.5;
		GameObject.Find("High Score Dynamic").transform.position.x = 100;
		GameObject.Find("High Score Dynamic Ring").transform.position.x = 100;
		GameObject.Find("Gyrate Text").transform.position.x = 0;
		GameObject.Find("Score").transform.position.x = 100;
		GameObject.Find("Restart Symbol").transform.position.x = 100;
		GameObject.Find("Game Over").transform.position.x = 100;
		GameObject.Find("Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
		GameObject.Find("Score").GetComponent(TextMesh).text = "0";
		GameObject.Find("Play Symbol").transform.position.x = 0;
		GameObject.Find("Pause Symbol").transform.position.x = 100;
		GameObject.Find(pause_ring).transform.position.x = 100;
		GameObject.Find(pointer_empty).transform.rotation.y = 180;
		GameObject.Find(pointer_empty).transform.position.x = 100;
		High_Score_Dynamic.rotate_high_score_dynamic_ring = false;
		GameObject.Find("High Score Dynamic Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
		
		Ring_Rotate.mode_1 = true;
		Ring_Rotate.mode_2 = false;
		
		GameObject.Find("Ring").transform.rotation = Quaternion.Euler(90, 180, 0);
		GameObject.Find("Ring 2").transform.rotation = Quaternion.Euler(90, 0, 0);
		
		Sounds.A = true;
		Sounds.B = false;
		Sounds.C = false;
		Sounds.D = false;

}
