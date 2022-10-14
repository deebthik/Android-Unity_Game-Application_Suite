#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
public static var clockwise : boolean = true;
public static var anticlockwise : boolean;
public static var pointers_name : Array;
pointers_name = ["Red Pointer", "Green Pointer", "Blue Pointer", "Yellow Pointer", "Red Pointer", "Green Pointer", "Blue Pointer", "Yellow Pointer", "Red Pointer", "Green Pointer", "Blue Pointer", "Yellow Pointer", "Red Pointer", "Green Pointer", "Blue Pointer", "Yellow Pointer", "Red Pointer", "Green Pointer", "Blue Pointer", "Yellow Pointer", "Red Pointer", "Green Pointer", "Blue Pointer", "Yellow Pointer", "Multi Colored Pointer"];
public static var beginning_pointers_name : Array;
beginning_pointers_name = ["Green Pointer", "Blue Pointer", "Yellow Pointer"];
public static var new_pointer : String;
public static var speed : float = 1.5;
public static var check : boolean = true;
public static var in_range : boolean;
public static var score : int;
public static var play : boolean = false;
public static var beginning_pointer : boolean = true;
public static var restart : boolean = false;
public static var game_over : boolean = false;
public static var booleans : Array = [true, false];
public static var mode_1 : boolean = true;
public static var mode_2 : boolean = false;
public static var intangible_items : Array = ["Pause Symbol", "Blue Pause Ring", "Green Pause Ring", "Red Pause Ring", "Yellow Pause Ring", "Play Symbol", "Question Mark", "Fast Forward Symbol", "Score", "Green Score Ring", "Red Score Ring", "Blue Score Ring", "Yellow Score Ring", "High Score Dynamic", "High Score Dynamic Ring", "Fast Forward Symbol", "Fast Forward Score"];

function Start () {

}

function Update () {

	if(Ring_Rotate.mode_1 && !Ring_Rotate.mode_2 && !Fast_Forward.fast_forwarding){

		if(game_over){
		
			if(!anticlockwise){
			
				GameObject.Find("Ring").transform.Rotate(Vector3.up * 20);
			
			}else{
			
				GameObject.Find("Ring").transform.Rotate(Vector3.down * 20);
			
			}
		
		}
		
		if(play && !Instructions.instructions && GameObject.Find("Pause Plane").transform.position.z == 10){
		
			if(beginning_pointer){
		
				GameObject.Find(beginning_pointers_name[Random.Range(0, beginning_pointers_name.length)]).transform.position.x = 0;
				beginning_pointer = false;
		
			}
		
			if(!Fast_Forward.fast_forwarding){
		
				if(anticlockwise){

					transform.Rotate(Vector3.down * speed);

				}else{

					transform.Rotate(Vector3.up * speed);
				
				}
			
			}
			
			if(check){
			
				if(Input.GetMouseButtonDown(0)){
					//ray = Camera.main.ScreenPointToRay(Input.mousePosition);
					//if(Physics.Raycast(ray, hit)){
					
					/*if(GameObject.Find("Red Pointer").transform.position.x == 0){
						
						Clockwise_Anticlockwise("Red Side", "Red Pointer");
						
					}
					
					if(GameObject.Find("Green Pointer").transform.position.x == 0){
						
						Clockwise_Anticlockwise("Green Side", "Green Pointer");
						
					}
					
					if(GameObject.Find("Blue Pointer").transform.position.x == 0){
						
						Clockwise_Anticlockwise("Blue Side", "Blue Pointer");
						
					}
					
					if(GameObject.Find("Yellow Pointer").transform.position.x == 0){
						
						Clockwise_Anticlockwise("Yellow Side", "Yellow Pointer");
						
					}*/
					//}
				}
			
			}
		
		}
	
	}
	
}

public static function Distance(side, pointer, pause_ring){

	if(Mathf.Sqrt(Mathf.Pow((GameObject.Find(pointer).transform.position.x - GameObject.Find(side).transform.position.x), 2) + Mathf.Pow((GameObject.Find(pointer).transform.position.y-GameObject.Find(side).transform.position.y), 2)) <= 5.1){
	
		return true;
		
	}else{
	
		return false;
	
	}
	
}

public static function Clockwise_Anticlockwise(side, pointer, pause_ring){

	if(anticlockwise){
		
		if(Distance(side, pointer, pause_ring)){
			
			Sounds_Play();
			score += 1;
			GameObject.Find("Score").GetComponent(TextMesh).text = score.ToString();
			in_range = false;
			clockwise = true;
			anticlockwise = false;
			GameObject.Find(pointer).transform.position.x = 100;
			new_pointer = pointers_name[Random.Range(0, pointers_name.length)];
			while(new_pointer == pointer){
			
				new_pointer = pointers_name[Random.Range(0, pointers_name.length)];
			
			}
			if(Ring_Rotate.score <= 10){
			
				while(new_pointer == "Multi Colored Pointer"){
				
					new_pointer = pointers_name[Random.Range(0, pointers_name.length)];
				
				}
			
			}
			GameObject.Find(new_pointer).transform.position.x = 0;
			if(score < 30){
				speed += 0.09;
			}
			if(score >= 50 && score < 80){
				speed += 0.09;
			}
			if(score >= 100 && score < 130){
				speed += 0.09;
			}
			if(score >= 150 && score < 180){
				speed += 0.09;
			}
			if(score >= 200 && score < 230){
				speed += 0.09;
			}
			check = false;
			
		}else{
			
			GameObject.Find("E End").GetComponent(AudioSource).audio.Play();
			game_over = true;
			Ring_Rotate.play = false;
			GameObject.Find("Pause Symbol").transform.position.x = 100;
			GameObject.Find(pause_ring).transform.position.x = 100;
			GameObject.Find("Game Over").transform.position.x = 0;
			
			yield WaitForSeconds(1);
			GameObject.Find("Game Over").transform.position.x = 100;
			GameObject.Find(pause_ring).transform.position.x = 0;
			GameObject.Find("Restart Symbol").transform.position.x = 0;

		
		}
		
	}else{
				
		if(Distance(side, pointer, pause_ring)){
			
			Sounds_Play();
			score += 1;
			GameObject.Find("Score").GetComponent(TextMesh).text = score.ToString();
			in_range = false;
			clockwise = false;
			anticlockwise = true;
			GameObject.Find(pointer).transform.position.x = 100;
			new_pointer = pointers_name[Random.Range(0, pointers_name.length)];
			while(new_pointer == pointer){
			
				new_pointer = pointers_name[Random.Range(0, pointers_name.length)];
			
			}
			if(Ring_Rotate.score <= 10){
			
				while(new_pointer == "Multi Colored Pointer"){
				
					new_pointer = pointers_name[Random.Range(0, pointers_name.length)];
				
				}
			
			}
			GameObject.Find(new_pointer).transform.position.x = 0;	
			if(score < 30){
				speed += 0.09;
			}
			if(score >= 50 && score < 80){
				speed += 0.09;
			}
			if(score >= 100 && score < 130){
				speed += 0.09;
			}
			if(score >= 150 && score < 180){
				speed += 0.09;
			}
			if(score >= 200 && score < 230){
				speed += 0.09;
			}
			check = false;
			
		}else{
		
			GameObject.Find("E End").GetComponent(AudioSource).audio.Play();
			game_over = true;
			Ring_Rotate.play = false;
			GameObject.Find("Pause Symbol").transform.position.x = 100;
			GameObject.Find(pause_ring).transform.position.x = 100;
			GameObject.Find("Game Over").transform.position.x = 0;
			
			yield WaitForSeconds(1);
			GameObject.Find("Game Over").transform.position.x = 100;
			GameObject.Find(pause_ring).transform.position.x = 0;
			GameObject.Find("Restart Symbol").transform.position.x = 0;

		
		}
		
	}

}

public static function Game_Over(pointer, pause_ring){

	GameObject.Find("E End").GetComponent(AudioSource).audio.Play();
	game_over = true;
	Ring_Rotate.play = false;
	GameObject.Find("Pause Symbol").transform.position.x = 100;
	GameObject.Find(pause_ring).transform.position.x = 100;
	GameObject.Find("Game Over").transform.position.x = 0;
	
	yield WaitForSeconds(1);
	
	GameObject.Find("Game Over").transform.position.x = 100;
	GameObject.Find(pause_ring).transform.position.x = 0;
	GameObject.Find("Restart Symbol").transform.position.x = 0;	
	
}

public static function Restart(pointer, pause_ring){

		//GameObject.Find("E").GetComponent(AudioSource).audio.Stop();
		restart = true;
		anticlockwise = booleans[Random.Range(0, booleans.length)];
		game_over = false;
		Ring_Rotate.score = 0;
		Ring_Rotate.play = false;
		Ring_Rotate.speed = 1.5;
		Ring_Rotate_2.speed_2 = 1.5;
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
		GameObject.Find(pointer).transform.position.x = 100;
		High_Score_Dynamic.rotate_high_score_dynamic_ring = false;
		GameObject.Find("High Score Dynamic Ring").transform.rotation = Quaternion.Euler(90, 180, 0);

}

public static function Main_Menu_Items_Restart(){

		//if(Mute_Unmute.mute){
		
			GameObject.Find("Mute Symbol").transform.position.x = 0;
		
		//}else{
		
			GameObject.Find("Unmute Symbol").transform.position.x = 0;
		
		//}
		//GameObject.Find("Question Mark").transform.position.x = 4;
		GameObject.Find("High Score Symbol").transform.position.x = 0;
		GameObject.Find("Leaderboard Symbol").transform.position.x = 2.75;
		GameObject.Find("High Score Plane").transform.position.x = 0;
		GameObject.Find("Leaderboard Symbol Rear").transform.position.x = 2.75;
		GameObject.Find("Achievements Symbol").transform.position.x = -2.75;
		GameObject.Find("Achievements Symbol Rear").transform.position.x = -2.75;
		
		GameObject.Find("Red Menu Ring").transform.position.x = 0;
		GameObject.Find("Blue Menu Ring").transform.position.x = 0;
		GameObject.Find("Yellow Menu Ring").transform.position.x = 2.75;
		GameObject.Find("Green Menu Ring").transform.position.x = -2.75;
		
		GameObject.Find("Red Menu Ring Rear").transform.position.x = 0;
		GameObject.Find("Blue Menu Ring Rear").transform.position.x = 0;
		GameObject.Find("Green Menu Ring Rear").transform.position.x = -2.75;
		GameObject.Find("Yellow Menu Ring Rear").transform.position.x = 2.75;
		GameObject.Find("Thumbs Up").transform.position.x = -4;
		GameObject.Find("Information Symbol").transform.position.x = 0;
		
		Sounds.A = true;
		Sounds.B = false;
		Sounds.C = false;
		Sounds.D = false;
	
}

public static function Sounds_Play(){

	if(mode_1){
	
		if(Sounds.play_sound == "A2"){
		
			Sounds.play_sound = "A1";
		
		}
		
		if(Sounds.play_sound == "B2"){
		
			Sounds.play_sound = "B1";
		
		}
		
		if(Sounds.play_sound == "C2"){
		
			Sounds.play_sound = "C1";
		
		}
		
		if(Sounds.play_sound == "D2"){
		
			Sounds.play_sound = "D1";
		
		}
	
	}else{
	
		if(Sounds.play_sound == "A1"){
		
			Sounds.play_sound = "A2";
		
		}
		
		if(Sounds.play_sound == "B1"){
		
			Sounds.play_sound = "B2";
		
		}
		
		if(Sounds.play_sound == "C1"){
		
			Sounds.play_sound = "C2";
		
		}
		
		if(Sounds.play_sound == "D1"){
		
			Sounds.play_sound = "D2";
		
		}
	
	}
	
	GameObject.Find(Sounds.play_sound).GetComponent(AudioSource).audio.Play();
	
	if(Sounds.play_sound == "A1" || Sounds.play_sound == "A2"){
	
		Sounds.B = true;
	
	}
	
	if(Sounds.play_sound == "B1" || Sounds.play_sound == "B2"){
	
		Sounds.C = true;
	
	}
	
	if(Sounds.play_sound == "C1" || Sounds.play_sound == "C2"){
	
		Sounds.D = true;
	
	}
	
	if(Sounds.play_sound == "D1" || Sounds.play_sound == "D2"){
	
		Sounds.A = true;
	
	}
	
}
