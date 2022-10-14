#pragma strict

public static var rotate_high_score_dynamic_ring : boolean = false;
var high_score_dynamic : int;
var speed : float = 5;

function Start () {

}

function Update () {

	high_score_dynamic = PlayerPrefs.GetInt("high score", 0);
	GameObject.Find("High Score Dynamic").GetComponent(TextMesh).text = high_score_dynamic.ToString();
	
	if(Ring_Rotate.score > PlayerPrefs.GetInt("high score")){
	
		rotate_high_score_dynamic_ring = true;
		high_score_dynamic = Ring_Rotate.score;
		GameObject.Find("High Score Dynamic").GetComponent(TextMesh).text = high_score_dynamic.ToString();
		PlayerPrefs.SetInt("high score", Ring_Rotate.score);
		speed += 0.1;
	
	}
	
	if(rotate_high_score_dynamic_ring){
	
		GameObject.Find("High Score Dynamic Ring").transform.Rotate(Vector3.up * speed);
	
	}
	
	if(GameObject.Find("Gyrate Text").transform.position.x != 0){
		
		if(high_score_dynamic < 10){
		
			GameObject.Find("High Score Dynamic").transform.position.x = 2.9;

		}
		
		if(high_score_dynamic >= 10 && high_score_dynamic < 20){
		
			GameObject.Find("High Score Dynamic").transform.position.x = 2.45;

		}
		
		if(high_score_dynamic >= 20 && high_score_dynamic < 100){
		
			GameObject.Find("High Score Dynamic").transform.position.x = 2.5;

		}
		
		if(high_score_dynamic >= 100){
			
			if(high_score_dynamic >= 100 && high_score_dynamic < 200){
			
				GameObject.Find("High Score Dynamic").transform.position.x = 2.225;
			
			}
			
			if(high_score_dynamic >= 200){
			
				GameObject.Find("High Score Dynamic").transform.position.x = 2.275;
			
			}
			
			GameObject.Find("High Score Dynamic").transform.position.y = 8.7;
			GameObject.Find("High Score Dynamic").transform.localScale.x = 0.125;
			GameObject.Find("High Score Dynamic").transform.localScale.y = 0.125;
			GameObject.Find("High Score Dynamic").transform.localScale.z = 0.125;
		
		}
	
	}
	
	
}