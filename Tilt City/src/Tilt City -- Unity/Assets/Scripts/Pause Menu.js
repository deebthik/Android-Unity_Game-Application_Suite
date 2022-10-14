#pragma strict



function Start () {

}

function Update () {


if(Input.GetKeyDown(KeyCode.Escape)){

Destroy(GameObject.Find("Pause Menu(Clone)"));
Destroy(GameObject.Find("Play Button(Clone)"));
Destroy(GameObject.Find("Options Button(Clone)"));
Destroy(GameObject.Find("How to play button(Clone)"));
Destroy(GameObject.Find("Exit Button(Clone)"));


}
	

}