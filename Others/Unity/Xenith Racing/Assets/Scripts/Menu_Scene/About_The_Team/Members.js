#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var about_the_team : GameObject;
var transparent_plane : GameObject;
var atree : GameObject;
var tushar : GameObject;
var sahil : GameObject;
var tanish : GameObject;
var kabir : GameObject;

function Start () {

	about_the_team = GameObject.Find("About The Team Rotation Parent");
	transparent_plane = GameObject.Find("Transparent Plane");
	atree = GameObject.Find("Atree Image");
	tushar = GameObject.Find("Tushar Image");
	sahil = GameObject.Find("Sahil Image");
	tanish = GameObject.Find("Tanish Image");
	kabir = GameObject.Find("Kabir Image");

}

function Update () {
	
	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(GameObject.Find("Main Camera").transform.position.z == -9.75){
			
				if(about_the_team.transform.position == Vector3(1.75, 1.225, -9)){
				
					if(hit.transform.name == "Atree Image" && atree.transform.localPosition.x == 0.42){
					
						Move_Member_Image_Away(atree, "Atree Text");
					
					}
					
					if(hit.transform.name == "Atree Image" && atree.transform.localPosition.x == 0.32){
					
						Move_Member_Image_Home(atree, "Atree Text", 0.42, 0.145, 0.1);
					
					}
					
					
					
					if(hit.transform.name == "Tushar Image" && tushar.transform.localPosition.x == 0){
					
						Move_Member_Image_Away(tushar, "Tushar Text");
					
					}
					
					if(hit.transform.name == "Tushar Image" && tushar.transform.localPosition.x == 0.32){
					
						Move_Member_Image_Home(tushar, "Tushar Text", 0, 0.145, 0.1);
					
					}
					
					
					
					if(hit.transform.name == "Sahil Image" && sahil.transform.localPosition.x == -0.42){
					
						Move_Member_Image_Away(sahil, "Sahil Text");
					
					}
					
					if(hit.transform.name == "Sahil Image" && sahil.transform.localPosition.x == 0.32){
					
						Move_Member_Image_Home(sahil, "Sahil Text", -0.42, 0.145, 0.1);
					
					}
					
					
					
					if(hit.transform.name == "Tanish Image" && tanish.transform.localPosition.x == 0.21){
					
						Move_Member_Image_Away(tanish, "Tanish Text");
					
					}
					
					if(hit.transform.name == "Tanish Image" && tanish.transform.localPosition.x == 0.32){
					
						Move_Member_Image_Home(tanish, "Tanish Text", 0.21, -0.14, 0.1);
					
					}
					
					
					
					if(hit.transform.name == "Kabir Image" && kabir.transform.localPosition.x == -0.21){
					
						Move_Member_Image_Away(kabir, "Kabir Text");
					
					}
					
					if(hit.transform.name == "Kabir Image" && kabir.transform.localPosition.x == 0.32){
					
						Move_Member_Image_Home(kabir, "Kabir Text", -0.21, -0.14, 0.1);
					
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

function Move_Member_Image_Away(game_object : GameObject, member_text){

	iTween.MoveTo(game_object, iTween.Hash("position", Vector3(0.32, 0, 0.12), "isLocal", true, "time", 0.5));
	iTween.ScaleTo(game_object, iTween.Hash("scale", Vector3(0.035, 0.059, 0.059), "isLocal", true, "time", 0.5));
	
	iTween.MoveTo(GameObject.Find(member_text), iTween.Hash(("position"), Vector3(-0.168, 0, 0.2), "isLocal", true, "time", 0.5));
	
	Move_Transparent_Plane_Home();

}

function Move_Member_Image_Home(game_object : GameObject, member_text, mx, my, mz){ //mx => x position coordinate of member image and so forth

	iTween.MoveTo(game_object, iTween.Hash("position", Vector3(mx, my, mz), "isLocal", true, "time", 0.5));
	iTween.ScaleTo(game_object, iTween.Hash("scale", Vector3(0.0206, 0.034, 0.034), "isLocal", true, "time", 0.5));
	
	iTween.MoveTo(GameObject.Find(member_text), iTween.Hash(("position"), Vector3(-0.168, 0.75, 0.2), "isLocal", true, "time", 0.5));
	
	transparent_plane.transform.localPosition.x = 100;

}
