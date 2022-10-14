#pragma strict

function Start () {

}

function Update () {

	if(GameObject.Find("Xenith Racing Car")){

		if(GameObject.Find("Xenith Racing Car").transform.position.z == -8.200016){
		
			if(!GameObject.Find("Pause Menu(Clone)") && Input.GetKeyDown(KeyCode.Escape) && !Red_Lights.reaction_over){
				
				Pause_Menu_2.pause = true;
				GameObject.Find("Road").transform.position.x = 100;
				GameObject.Find("Xenith Racing Car").transform.position.x = 100;
				GameObject.Find("Trigger").transform.position.x = 100;

			}	
		
		}
	
	}

}