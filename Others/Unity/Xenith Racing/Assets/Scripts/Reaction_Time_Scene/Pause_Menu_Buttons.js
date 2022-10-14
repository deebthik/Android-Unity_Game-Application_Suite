#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

}

function Update () {
	
	if(GameObject.Find("Pause Menu(Clone)")){
	
		Time.timeScale = 0;
	
	}else{
	
		Time.timeScale = 1;
	
	}
	
	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
					
			if(hit.transform.name == "Play Button"){
			
				Destroy(GameObject.Find("Pause Menu(Clone)"));
				GameObject.Find("Road").transform.position.x = 0;
				GameObject.Find("Xenith Racing Car").transform.position.x = 0;
				GameObject.Find("Trigger").transform.position.x = 4.5;
			
			}
			
			
			if(hit.transform.name == "Restart Button" || hit.transform.name == "Restart Button(Clone)"){
				
				Time.timeScale = 1;
				Application.LoadLevel("Reaction_Time_Test_Scene");
			
			}
			
			
			if(hit.transform.name == "Quit Button" || hit.transform.name == "Quit Button(Clone)" || hit.transform.name == "Quit Button 2" || hit.transform.name == "Quit Button 2(Clone)"){
			
				Time.timeScale = 1;
				Application.LoadLevel("Menu_Scene");
			
			}
		
		}
		
	}

}