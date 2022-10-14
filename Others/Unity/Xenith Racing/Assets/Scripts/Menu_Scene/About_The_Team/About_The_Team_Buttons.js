#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var about_the_team : GameObject;
var team_objects : Array = ["Team Plane", "Team Text"];
var sponsors_objects : Array = ["Sponsors Plane", "Platinum Sponsors Text 1", "Platinum Sponsors Text 2", 
								"Gold Spondors Text 1", "Gold Sponsors Text 2", "Silver Sponsors Text 1", 
								"Silver Sponsors Text 2", "Bronze Sponsors Text 1", "Bronze Sponsors Text 2"];
var history_objects : Array = ["History Plane"];
var members_objects : Array = ["Members Plane"];
var cars_objects : Array = ["Cars Plane", "Cars Text"];

function Start () {

	about_the_team = GameObject.Find("About The Team Rotation Parent");

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(ray, hit)){
		
			if(GameObject.Find("Main Camera").transform.position.z == -9.75){
		
				if(about_the_team.transform.position == Vector3(0, 1.225, -9) && (about_the_team.transform.eulerAngles.z >= -0.001 && about_the_team.transform.eulerAngles.z <= 0.001) && (about_the_team.transform.eulerAngles.y >= 269.999 && about_the_team.transform.eulerAngles.y <= 270.001)){
			
					if(hit.transform.name == "Team Button"){
					
						GameObject.Find("Team").transform.localPosition.y = 0;
						iTween.RotateTo(about_the_team, Vector3(0, 270, 179.999), 1);
					
					}
					
					if(hit.transform.name == "Sponsors Button"){
						
						GameObject.Find("Sponsors").transform.localPosition.x = 0;
						iTween.RotateTo(about_the_team, Vector3(0, 449.999, 0), 1);
					
					}
					
					if(hit.transform.name == "History Button"){
						
						GameObject.Find("History").transform.localPosition.x = 0;
						iTween.RotateTo(about_the_team, Vector3(0, 90.001, 0), 1);
					
					}
					
					if(hit.transform.name == "Members Button"){
						
						GameObject.Find("Members").transform.localPosition.y = 0;
						GameObject.Find("Members").transform.localPosition.x = -1.75;
						iTween.MoveTo(about_the_team, Vector3(1.75, 1.225, -9), 1);
					
					}
					
					if(hit.transform.name == "Cars Button"){
					
						GameObject.Find("Cars").transform.localPosition.y = 0;
						GameObject.Find("Cars").transform.localPosition.x = 1.75;
						iTween.MoveTo(about_the_team, Vector3(-1.75, 1.225, -9), 1);
					
					}
				
				}
				
				if(about_the_team.transform.position == Vector3(0, 1.225, -9) && about_the_team.transform.rotation == Quaternion.Euler(0, 270, 179.999)){
				
					if(hit.transform.name in team_objects){
				
						iTween.RotateTo(about_the_team, Vector3(0, 270, 0), 1);
						Move_Team_Away();
					
					}
				
				}
				
				if(about_the_team.transform.position == Vector3(0, 1.225, -9) && about_the_team.transform.rotation == Quaternion.Euler(0, 449.999, 0)){
				
					if(hit.transform.name in sponsors_objects){
					
						iTween.RotateTo(about_the_team, Vector3(0, 270, 0), 1);
						Move_Sponsors_Away();
					
					}
				
				}
				
				if(about_the_team.transform.position == Vector3(0, 1.225, -9) && about_the_team.transform.rotation == Quaternion.Euler(0, 90.001, 0)){
				
					if(hit.transform.name in history_objects){
					
						iTween.RotateTo(about_the_team, Vector3(0, 270, 0), 1);
						Move_History_Away();
					
					}
				
				}
				
				if(about_the_team.transform.position == Vector3(1.75, 1.225, -9)){
				
					if(hit.transform.name in members_objects){
					
						iTween.MoveTo(about_the_team, Vector3(0, 1.225, -9), 1);
						Move_Members_Away();
					
					}
				
				}
				
				if(about_the_team.transform.position == Vector3(-1.75, 1.225, -9)){
				
					if(hit.transform.name in cars_objects){
					
						iTween.MoveTo(about_the_team, Vector3(0, 1.225, -9), 1);
						Move_Cars_Away();
					
					}
				
				}
			
			}
			
		}
		
	}

}

public static function Move_Team_Away(){

	yield WaitForSeconds(1);
	GameObject.Find("Team").transform.localPosition.y = 5;

}

public static function Move_Sponsors_Away(){

	yield WaitForSeconds(1);
	GameObject.Find("Sponsors").transform.localPosition.x = -3;

}

public static function Move_History_Away(){

	yield WaitForSeconds(1);
	GameObject.Find("History").transform.localPosition.x = 1.75;

}

public static function Move_Members_Away(){

	yield WaitForSeconds(1);
	GameObject.Find("Members").transform.localPosition.y = -7;
	GameObject.Find("Members").transform.localPosition.x = -7;
	
}

public static function Move_Cars_Away(){

	yield WaitForSeconds(1);
	GameObject.Find("Cars").transform.localPosition.y = -7;
	GameObject.Find("Cars").transform.localPosition.x = 7;

}
