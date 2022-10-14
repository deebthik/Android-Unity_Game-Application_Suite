#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var about_the_team : GameObject;
var h2012 : GameObject;
var h2013 : GameObject;
var h2014 : GameObject;
var transparent_plane : GameObject;

function Start () {

	about_the_team = GameObject.Find("About The Team Rotation Parent");
	h2012 = GameObject.Find("2012 Image");
	h2013 = GameObject.Find("2013 Image");
	h2014 = GameObject.Find("2014 Image");
	transparent_plane = GameObject.Find("Transparent Plane");

}

function Update () {
	
	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(GameObject.Find("Main Camera").transform.position.z == -9.75){
			
				if(about_the_team.transform.position == Vector3(0, 1.225, -9) && (about_the_team.transform.eulerAngles.y >= 90 && about_the_team.transform.eulerAngles.y <= 90.002)){
				
					if(hit.transform.name == "2012 Image" && h2012.transform.localPosition.y == 0.18){
					
						Move_History_Image_Away(h2012, "2012 Text");
						
					}
					
					if(hit.transform.name == "2012 Image" && h2012.transform.localPosition.y == 0.14){
					
						Move_History_Image_Home(h2012, "2012 Text", 0.265, 0.18, 0.1);
					
					}
					
					
					
					if(hit.transform.name == "2013 Image" && h2013.transform.localPosition.y == -0.18){
					
						Move_History_Image_Away(h2013, "2013 Text");
						
					}
					
					if(hit.transform.name == "2013 Image" && h2013.transform.localPosition.y == 0.14){
					
						Move_History_Image_Home(h2013, "2013 Text", 0.265, -0.18, 0.1);
					
					}
					
					
					
					if(hit.transform.name == "2014 Image" && h2014.transform.localPosition.y == 0){
					
						Move_History_Image_Away(h2014, "2014 Text");
						
					}
					
					if(hit.transform.name == "2014 Image" && h2014.transform.localPosition.y == 0.14){
					
						Move_History_Image_Home(h2014, "2014 Text", -0.265, 0, 0.1);
					
					}
				
				}
			
			}
		
		}
		
	}
	
}

function Move_Transparent_Plane_Home(){

	yield WaitForSeconds(0.1);
	transparent_plane.transform.localPosition.x = 0;

}

function Move_History_Image_Away(game_object : GameObject, history_text){

	iTween.MoveTo(game_object, iTween.Hash("position", Vector3(0, 0.14, 0.12), "islocal", true, "time", 0.5));
	iTween.ScaleTo(game_object, iTween.Hash("scale", Vector3(0.0676, 0.0258, 0.0302), "isLocal", true, "time", 0.5));
	
	iTween.MoveTo(GameObject.Find(history_text), iTween.Hash("position", Vector3(0, -0.14, 0.2), "isLocal", true, "time", 0.5));
	
	Move_Transparent_Plane_Home();

}

function Move_History_Image_Home(game_object : GameObject, history_text, hx, hy, hz){ //hx => x position coordinate of history image and so forth

	iTween.MoveTo(game_object, iTween.Hash("position", Vector3(hx, hy, hz), "islocal", true, "time", 0.5));
	iTween.ScaleTo(game_object, iTween.Hash("scale", Vector3(0.0504, 0.0195, 0.0231), "isLocal", true, "time", 0.5));
	
	iTween.MoveTo(GameObject.Find(history_text), iTween.Hash("position", Vector3(0, -0.5, 0.2), "isLocal", true, "time", 0.5));
	
	transparent_plane.transform.localPosition.x = 100;

}
