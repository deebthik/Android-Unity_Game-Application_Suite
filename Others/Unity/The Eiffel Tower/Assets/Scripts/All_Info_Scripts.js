#pragma strict

	public static var main_camera_rotate : boolean = false;
	public static var main_camera_rotation : boolean = false;

function Start () {

}

function Update () {

	if(main_camera_rotate){

		Main_Camera_Rotation();

	}

	if(main_camera_rotation){

		GameObject.Find("Main Camera Parent").transform.Rotate(Vector3.up * 0.5);

	}

	if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(0, 0, -10)){
		
		if(Input.GetKeyDown(KeyCode.Alpha1)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Basic Info In");

		}

		if(Input.GetKeyDown(KeyCode.Alpha2)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("History 1 In");

		}

		if(Input.GetKeyDown(KeyCode.Alpha3)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Design 1 In");

		}

	}

	if(Input.GetKeyDown(KeyCode.RightArrow)){

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(0, -163, 1070)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("History 2 In");

		}

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(0, -886, -327)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Design 2 In");

		}

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(-337, -880, 5)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Design 3 In");

		}

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(0, -885, 337)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Design 4 In");

		}

	}



	if(Input.GetKeyDown(KeyCode.Backspace)){

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(0, -387, 1040)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Basic Info Out");

		}

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(-0.1, -163, -1070)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("History 2 Out");

		}

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(332, -885, 5)){

			GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Design 4 Out");
			main_camera_rotate = true;

		}

	}

}

function Main_Camera_Rotation(){

	yield WaitForSeconds(3.5);
	main_camera_rotation = true;
	main_camera_rotate = false;

}