#pragma strict

private var score : int = 0;
var guiScore : GUIText;

function Start () {
	guiScore.text = "Score: 0";
}

function Awake(){
	rigidbody.velocity.x = -10;
	rigidbody.velocity.y = 10;

}

function Update () {
	
}

function OnCollisionEnter(col : Collision){
	if(col.collider.name == "Brick"){
		Destroy(col.gameObject);
		score += 10;
		guiScore.text = "Score: " + score;
		print("collide with brick");
	}
}

