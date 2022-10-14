#pragma strict

public static var A : boolean = true;
public static var B : boolean = false;
public static var C : boolean = false;
public static var D : boolean = false;
public static var play_sound : String;

function Start () {

	GameObject.Find("Day One").audio.Play();

}

function Update () {

	if(Ring_Rotate.mode_1){
	
		if(A){
		
			play_sound = "A1";
			A = false;
		
		}
		
		if(B){
		
			play_sound = "B1";
			B = false;
		
		}
		
		if(C){
		
			play_sound = "C1";
			C = false;
		
		}
		
		if(D){
		
			play_sound = "D1";
			D = false;
		
		}
	
	}else{
	
		if(A){
		
			play_sound = "A2";
			A = false;
		
		}
		
		if(B){
		
			play_sound = "B2";
			B = false;
		
		}
		
		if(C){
		
			play_sound = "C2";
			C = false;
		
		}
		
		if(D){
		
			play_sound = "D2";
			D = false;
		
		}
		
	
	}
	
	
	if(GameObject.Find("Gyrate Text").transform.position.x == 0){
	
		GameObject.Find("Day One").GetComponent(AudioSource).audio.volume = 0.6;
	
	}else{
	
		GameObject.Find("Day One").GetComponent(AudioSource).audio.volume = 0.3;
	
	}

}
