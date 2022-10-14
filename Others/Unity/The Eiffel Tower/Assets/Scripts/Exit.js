#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.T)){

		Exit();

	}

	if(Input.GetKeyDown(KeyCode.E)){

		Application.Quit();

	}

}

function Exit(){

	GameObject.Find("All Info").transform.localPosition.x = 10000;
	GameObject.Find("Background Black Plane").transform.localPosition.x = 10000;
	iTween.MoveTo(GameObject.Find("Main Camera Parent"), iTween.Hash("islocal", true, "time", 1, "position", Vector3(0, 0, -10)));
	All_Info_Scripts.main_camera_rotation = false;
	All_Info_Scripts.main_camera_rotate = false;
	GameObject.Find("Main Camera Parent").transform.localPosition = Vector3(0, 0, -10);
	GameObject.Find("Main Camera Parent").transform.localRotation = Quaternion.Euler(0, 0, 0);
	GameObject.Find("Peace Hand Symbol").transform.localPosition.x = 29;

	yield WaitForSeconds(1);

	iTween.RotateTo(GameObject.Find("Final Eiffel Tower Parent"), iTween.Hash("islocal", true, "time", 5, "rotation", Vector3(0, 1080, 0)));
	iTween.MoveTo(GameObject.Find("Final Eiffel Tower Parent"), iTween.Hash("islocal", true, "time", 5, "position", Vector3(0, 1500, 0)));
	iTween.MoveTo(GameObject.Find("Peace Hand Symbol"), iTween.Hash("islocal", true, "time", 5, "position", Vector3(29, 450, 384)));

}