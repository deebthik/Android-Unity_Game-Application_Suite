#pragma strict

function Start () {

}

function Update () {

	if(Red_Lights.reaction_over){
	
		Reaction_Over();
		Red_Lights.reaction_over = false;
	
	}

}

function Reaction_Over(){
	
	yield WaitForSeconds(2);
	
	Time.timeScale = 1;
	Destroy(GameObject.Find("Xenith Racing Car"));
	Destroy(GameObject.Find("Road"));
	Destroy(GameObject.Find("Trigger"));
	Instantiate(GameObject.Find("Restart Button"), Vector3(0, 1, -1), Quaternion.Euler(90, 180, 0));
	Instantiate(GameObject.Find("Quit Button 2"), Vector3(0, -1.5, -1), Quaternion.Euler(90, 180, 0));

}