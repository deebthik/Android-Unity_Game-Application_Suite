#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start () {

	iTween.RotateTo(GameObject.Find("High Score Symbol"), Vector3(90, 180, 0), 2); //Just to kick start the iTween plugin to avoid lagging

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		
			if(hit.transform.name == "High Score Symbol"){
			
				iTween.RotateTo(GameObject.Find("High Score Symbol"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Blue Menu Ring"), Vector3(90, 0, 0), 1.5);
				
				iTween.RotateTo(GameObject.Find("High Score Plane"), Vector3(90, 0, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Blue Menu Ring Rear"), Vector3(90, 180, 0), 1.5);
				
			
			}
			
			if(hit.transform.name == "Blue Menu Ring Rear"){
			
				iTween.RotateTo(GameObject.Find("High Score Symbol"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Blue Menu Ring"), Vector3(90, 180, 0), 1.5);
				
				iTween.RotateTo(GameObject.Find("High Score Plane"), Vector3(90, 180, 0), 1.5);
				iTween.RotateTo(GameObject.Find("Blue Menu Ring Rear"), Vector3(90, 0, 0), 1.5);
			
			}
			
			if(hit.transform.name == "Thumbs Up"){
			
				Application.OpenURL("https://play.google.com/store/apps/details?id=com.deebthik.android.gyrate");
			
			}
		
		}
		
	}

}
