#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var about_the_team : GameObject;
var transparent_plane : GameObject;
var xr86 : GameObject;
var invictus10 : GameObject;
var xr04 : GameObject;

function Start () {

	about_the_team = GameObject.Find("About The Team Rotation Parent");
	transparent_plane = GameObject.Find("Transparent Plane");
	xr86 = GameObject.Find("XR'86 Image");
	invictus10 = GameObject.Find("Invictus 10 Image");
	xr04 = GameObject.Find("XR'04 Image");

}

function Update () {
	
	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(GameObject.Find("Main Camera").transform.position.z == -9.75){
			
				if(about_the_team.transform.position == Vector3(-1.75, 1.225, -9)){
				
					if(hit.transform.name == "XR'86 Image" && xr86.transform.localPosition.x == 0.28){
					
						Move_Cars_Image_Away(xr86, "XR'86 Text");
					
					}
					
					if(hit.transform.name == "XR'86 Image" && xr86.transform.localPosition.x == 0){
					
						Move_Cars_Image_Home(xr86, "XR'86 Text", 0.28, 0.11, 0.1, 0.045, 0.0241, 0.0241);
					
					}
					
					
					
					if(hit.transform.name == "Invictus 10 Image" && invictus10.transform.localPosition.x == 0.28){
					
						Move_Cars_Image_Away(invictus10, "Invictus 10 Text");
					
					}
					
					if(hit.transform.name == "Invictus 10 Image" && invictus10.transform.localPosition.x == 0){
					
						Move_Cars_Image_Home(invictus10, "Invictus 10 Text", 0.28, -0.17, 0.1, 0.045, 0.0241, 0.0241);
					
					}
					
					
					
					if(hit.transform.name == "XR'04 Image" && xr04.transform.localPosition.x == -0.244){
					
						Move_Cars_Image_Away(xr04, "XR'04 Text");
					
					}
					
					if(hit.transform.name == "XR'04 Image" && xr04.transform.localPosition.x == 0){
					
						Move_Cars_Image_Home(xr04, "XR'04 Text", -0.244, 0, 0.1, 0.0534, 0.0286, 0.0286);
					
					}
				
				}
			
			}
		
		}
		
	}
	
}

function Move_Transparent_Plane_And_Cars_Text_Home(){

	yield WaitForSeconds(0.1);
	transparent_plane.transform.position.x = 0;
	GameObject.Find("Cars Text").transform.localPosition.x = 100;

}

function Move_Cars_Image_Away(game_object : GameObject, car_text){

	iTween.MoveTo(game_object, iTween.Hash("position", Vector3(0, 0.11, 0.12), "isLocal", true, "time", 0.5));
	iTween.ScaleTo(game_object, iTween.Hash("scale", Vector3(0.068, 0.0364, 0.0364), "isLocal", true, "time", 0.5));
	
	iTween.MoveTo(GameObject.Find(car_text), iTween.Hash("position", Vector3(0, -0.2, 0.2), "isLocal", true, "time", 0.5));
	
	Move_Transparent_Plane_And_Cars_Text_Home();

}

function Move_Cars_Image_Home(game_object : GameObject, car_text, cpx, cpy, cpz, csx, csy, csz){ //cpx => x position coordinate of car image and so forth, csx => x scale coordinate of car image and so forth

	iTween.MoveTo(game_object, iTween.Hash("position", Vector3(cpx, cpy, cpz), "isLocal", true, "time", 0.5));
	iTween.ScaleTo(game_object, iTween.Hash("scale", Vector3(csx, csy, csz), "isLocal", true, "time", 0.5));
	
	iTween.MoveTo(GameObject.Find(car_text), iTween.Hash("position", Vector3(0, -0.5, 0.2), "isLocal", true, "time", 0.5));
	
	transparent_plane.transform.localPosition.x = 100;
	GameObject.Find("Cars Text").transform.localPosition.x = 0;

}
