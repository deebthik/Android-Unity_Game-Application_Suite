#pragma strict

function Start () {

}

function Update () {

	if(Ring_Rotate.game_over){
	
		if(Ring_Rotate.score > PlayerPrefs.GetInt("high score", 0)){
		
			PlayerPrefs.SetInt("high score", Ring_Rotate.score);
		
		}
	
	}
	
	GameObject.Find("High Score").GetComponent(TextMesh).text = PlayerPrefs.GetInt("high score").ToString();
	
	if(PlayerPrefs.GetInt("high score") >= 10 && PlayerPrefs.GetInt("high score") < 20){
	
		GameObject.Find("High Score").transform.localPosition.x = -3.85;
	
	}
	
	if(PlayerPrefs.GetInt("high score") >= 20 && PlayerPrefs.GetInt("high score") < 100){
	
		GameObject.Find("High Score").transform.localPosition.x = -3.6;
	
	}
	
	if(PlayerPrefs.GetInt("high score") >= 100){
	
		if(PlayerPrefs.GetInt("high score") >= 100 && PlayerPrefs.GetInt("high score") < 200){
			
			GameObject.Find("High Score").transform.localPosition.x = -5.05;
			
		}
		
		if(PlayerPrefs.GetInt("high score") >= 200){
		
			GameObject.Find("High Score").transform.localPosition.x = -5;
		
		}
			
		GameObject.Find("High Score").transform.localPosition.z = -3.3;
		GameObject.Find("High Score").transform.localScale.x = 0.6;
		GameObject.Find("High Score").transform.localScale.y = 0.6;
		GameObject.Find("High Score").transform.localScale.z = 0.6;
	
	}

}