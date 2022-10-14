#pragma strict

private var ray : Ray;
private var hit : RaycastHit;
var main_camera : GameObject;
var move_camera_main_menu : boolean;
var move_camera_play_options : boolean;
var about_the_team : GameObject;
var transparent_plane : GameObject;
var xr86 : GameObject;
var invictus10 : GameObject;
var xr04 : GameObject;
var h2012 : GameObject;
var h2013 : GameObject;
var h2014 : GameObject;
var atree : GameObject;
var tushar : GameObject;
var sahil : GameObject;
var tanish : GameObject;
var kabir : GameObject;
var play_options : GameObject;

function Start () {

	main_camera = GameObject.Find("Main Camera");
	about_the_team = GameObject.Find("About The Team Rotation Parent");
	transparent_plane = GameObject.Find("Transparent Plane");
	xr86 = GameObject.Find("XR'86 Image");
	invictus10 = GameObject.Find("Invictus 10 Image");
	xr04 = GameObject.Find("XR'04 Image");
	h2012 = GameObject.Find("2012 Image");
	h2013 = GameObject.Find("2013 Image");
	h2014 = GameObject.Find("2014 Image");
	atree = GameObject.Find("Atree Image");
	tushar = GameObject.Find("Tushar Image");
	sahil = GameObject.Find("Sahil Image");
	tanish = GameObject.Find("Tanish Image");
	kabir = GameObject.Find("Kabir Image");
	play_options = GameObject.Find("Play Options");

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){
	
		if(main_camera.transform.position.z == -50){
	
			if(GameObject.Find("Main Menu").transform.position.x == 0){
			
				Application.Quit();
			
			}
			
			if(GameObject.Find("Main Menu").transform.position.x == 1.75 || GameObject.Find("Main Menu").transform.position.x == -1.75){
						
				iTween.MoveTo(GameObject.Find("Main Menu"), Vector3(0, 1, -49), 1);
			
			}
		
		}
		
		if(main_camera.transform.position.z == -29.75 && (play_options.transform.rotation.y >= -0.001 && play_options.transform.rotation.y <= 0.001)){
		
			GameObject.Find("F1 Car Sound 2 Reverse").GetComponent(AudioSource).audio.Play();
			move_camera_main_menu = true;
		
		}
		
		if(play_options.transform.position == Vector3(0, 1.225, -29) && play_options.transform.rotation == Quaternion.Euler(0, -179.999, 0)){
		
			iTween.RotateTo(play_options, Vector3(0, 0, 0), 1);
		
		}
		
		if(main_camera.transform.position.z == -9.75){
		
			if(about_the_team.transform.position == Vector3(0, 1.225, -9) && (about_the_team.transform.eulerAngles.z >= -0.001 && about_the_team.transform.eulerAngles.z <= 0.001) && (about_the_team.transform.eulerAngles.y >= 269.999 && about_the_team.transform.eulerAngles.y <= 270.001)){
			
				GameObject.Find("F1 Car Sound 2 High Pitch Reverse").GetComponent(AudioSource).audio.Play();
				GameObject.Find("Team").transform.position.y = 100;
				move_camera_play_options = true;
			
			}
			
			if(about_the_team.transform.position == Vector3(0, 1.225, -9) && about_the_team.transform.rotation == Quaternion.Euler(0, 270, 179.999)){
			
				iTween.RotateTo(about_the_team, Vector3(0, 270, 0), 1);
				About_The_Team_Buttons.Move_Team_Away();
			
			}
			
			if(about_the_team.transform.position == Vector3(0, 1.225, -9) && about_the_team.transform.rotation == Quaternion.Euler(0, 449.999, 0)){
			
				iTween.RotateTo(about_the_team, Vector3(0, 270, 0), 1);
				About_The_Team_Buttons.Move_Sponsors_Away();
			
			}
			
			if(about_the_team.transform.position == Vector3(0, 1.225, -9) && about_the_team.transform.rotation == Quaternion.Euler(0, 90.001, 0) && (h2012.transform.localPosition.x == 0.265 && h2013.transform.localPosition.x == 0.265 && h2014.transform.localPosition.x == -0.265)){
			
				iTween.RotateTo(about_the_team, Vector3(0, 270, 0), 1);
				About_The_Team_Buttons.Move_History_Away();
			
			}
			
			if(about_the_team.transform.position == Vector3(1.75, 1.225, -9) && (atree.transform.localPosition.x == 0.42 && tushar.transform.localPosition.x == 0 && sahil.transform.localPosition.x == -0.42 && tanish.transform.localPosition.x == 0.21 && kabir.transform.localPosition.x == -0.21)){
			
				iTween.MoveTo(about_the_team, Vector3(0, 1.225, -9), 1);
				About_The_Team_Buttons.Move_Members_Away();
			
			}
			
			if(about_the_team.transform.position == Vector3(-1.75, 1.225, -9) && (xr86.transform.localPosition.x == 0.28 && invictus10.transform.localPosition.x == 0.28 && xr04.transform.localPosition.x == -0.244)){
			
				iTween.MoveTo(about_the_team, Vector3(0, 1.225, -9), 1);
				About_The_Team_Buttons.Move_Cars_Away();
			
			}
			
			if(about_the_team.transform.position == Vector3(-1.75, 1.225, -9)){
			
				if(xr86.transform.localPosition.x == 0){
					
					Move_Cars_Image_Home(xr86, "XR'86 Text", 0.28, 0.11, 0.1, 0.045, 0.0241, 0.0241);
				
				}
				
				if(invictus10.transform.localPosition.x == 0){
					
					Move_Cars_Image_Home(invictus10, "Invictus 10 Text", 0.28, -0.17, 0.1, 0.045, 0.0241, 0.0241);
				
				}
				
				if(xr04.transform.localPosition.x == 0){
					
					Move_Cars_Image_Home(xr04, "XR'04 Text", -0.244, 0, 0.1, 0.0534, 0.0286, 0.0286);
				
				}
			
			}
			
			
			
			if(about_the_team.transform.position == Vector3(0, 1.225, -9) && (about_the_team.transform.eulerAngles.y >= 90 && about_the_team.transform.eulerAngles.y <= 90.002)){
			
				if(h2012.transform.localPosition.y == 0.14){
					
					Move_History_Image_Home(h2012, "2012 Text", 0.265, 0.18, 0.1);
				
				}
				
				if(h2013.transform.localPosition.y == 0.14){
					
					Move_History_Image_Home(h2013, "2013 Text", 0.265, -0.18, 0.1);
				
				}
				
				if(h2014.transform.localPosition.y == 0.14){
					
					Move_History_Image_Home(h2014, "2014 Text", -0.265, 0, 0.1);
				
				}
			
			}
			
			
			
			if(about_the_team.transform.position == Vector3(1.75, 1.225, -9)){
			
				if(atree.transform.localPosition.x == 0.32){
					
					Move_Member_Image_Home(atree, "Atree Text", 0.42, 0.145, 0.1);
				
				}
				
				if(tushar.transform.localPosition.x == 0.32){
					
					Move_Member_Image_Home(tushar, "Tushar Text", 0, 0.145, 0.1);
				
				}
				
				if(sahil.transform.localPosition.x == 0.32){
					
					Move_Member_Image_Home(sahil, "Sahil Text", -0.42, 0.145, 0.1);
				
				}
				
				if(tanish.transform.localPosition.x == 0.32){
					
					Move_Member_Image_Home(tanish, "Tanish Text", 0.21, -0.14, 0.1);
				
				}
				
				if(kabir.transform.localPosition.x == 0.32){
					
					Move_Member_Image_Home(kabir, "Kabir Text", -0.21, -0.14, 0.1);
				
				}
			
			}
			
		}
	
	}
	
	if(move_camera_main_menu){

		main_camera.transform.Translate(Vector3.back * 0.05); //This is affected by yield WaitForSeconds but iTween isn't so the boolean variable can be falsified after this translation process
		Falsify_Camera_Movement_Var();
		
		if(main_camera.transform.position.z <= -30.25){
	
			iTween.MoveTo(main_camera, Vector3(0, 1.25, -50), 1.5);
	
		}		
	
	}
	
	if(move_camera_play_options){
		
		main_camera.transform.Translate(Vector3.back * 0.05); //This is affected by yield WaitForSeconds but iTween isn't so the boolean variable can be falsified after this translation process
		Falsify_Camera_Movement_Var();
		
		if(main_camera.transform.position.z <= -10.25){
	
			iTween.MoveTo(main_camera, Vector3(0, 1.25, -29.75), 1.5);
	
		}		
	
	}
		
}



function Falsify_Camera_Movement_Var(){

	yield WaitForSeconds(0.5);
	move_camera_main_menu = false;
	move_camera_play_options = false;

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