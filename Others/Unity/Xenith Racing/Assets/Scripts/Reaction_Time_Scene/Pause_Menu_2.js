#pragma strict

public static var pause : boolean;

function Start () {

	pause = false;

}

function Update () {

	if(GameObject.Find("Xenith Racing Car")){

		if(GameObject.Find("Xenith Racing Car").transform.position.z == -8.200016){
		
			if(!pause && GameObject.Find("Pause Menu(Clone)")){
		
				if(Input.GetKeyDown(KeyCode.Escape)){
					
					Destroy(GameObject.Find("Pause Menu(Clone)"));
					GameObject.Find("Road").transform.position.x = 0;
					GameObject.Find("Xenith Racing Car").transform.position.x = 0;
					GameObject.Find("Trigger").transform.position.x = 4.5;
			
				}

			}
		
		
			if(pause){
		
				Instantiate(GameObject.Find("Pause Menu"), Vector3(0, 0, 0), Quaternion.Euler(0, 0, 0));
				pause = false;
		
			}
		
		}
	
	}

}