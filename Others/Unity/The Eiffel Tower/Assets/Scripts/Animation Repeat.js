#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

	

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "<3"){
				
				Intro_Repeat();
			
			}
		
		}
		
	}

}

function Intro_Repeat(){

	AudioListener.volume = 0;
	PlayerPrefs.SetInt("fireworks volume", 0);

	GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Intro Reverse");;

	GameObject.Find("<3").GetComponent(Animation).GetComponent.<Animation>().Stop("Heart Beat");
	GameObject.Find("<3").GetComponent(Animation).GetComponent.<Animation>().Rewind("Heart Beat");
	GameObject.Find("Che Eiffel Tower").transform.position = Vector3(2500, 5000, 200);
	GameObject.Find("For you Esha, <3").transform.position = Vector3(-2500, -5000, 300);
	GameObject.Find("Che Eiffel Tower").transform.localScale = Vector3(0, 0, 0);
	GameObject.Find("For you Esha, <3").transform.localScale = Vector3(0, 0, 0);
	GameObject.Find("Bottom Mirror").transform.position = Vector3(0, -5000, 0);

	Intro.Deactivate_Fireworks();

	yield WaitForSeconds(1);
	Application.LoadLevel("Main_Scene");

}