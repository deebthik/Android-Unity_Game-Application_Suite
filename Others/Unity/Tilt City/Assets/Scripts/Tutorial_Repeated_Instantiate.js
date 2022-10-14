#pragma strict

function Start () {

}

function Update () {

if(Tutorial.repeated_instantiate){

if(Tutorial.red_ball_tutorial){

Tutorial.clone = Instantiate(GameObject.Find("Red Ball"), Vector3(25, 10, 11), transform.rotation);
Tutorial.clone.name = "Red Ball(Clone)";

if(GameObject.Find("Red Ball(Clone)")){

Tutorial.repeated_instantiate = false;
PlayerPrefs.SetInt("repeated instantiate", 0);

}

}

}


if(Tutorial.repeated_instantiate){

if(Tutorial.green_ball_tutorial){

Tutorial.clone = Instantiate(GameObject.Find("Green Ball"), Vector3(25, 10, 11), transform.rotation);
Tutorial.clone.name = "Green Ball(Clone)";

if(GameObject.Find("Green Ball(Clone)")){

Tutorial.repeated_instantiate = false;
PlayerPrefs.SetInt("repeated instantiate", 0);

}

}

}


if(Tutorial.repeated_instantiate){

if(Tutorial.blue_ball_tutorial){

Tutorial.clone = Instantiate(GameObject.Find("Blue Ball"), Vector3(25, 10, 11), transform.rotation);
Tutorial.clone.name = "Blue Ball(Clone)";

if(GameObject.Find("Blue Ball(Clone)")){

Tutorial.repeated_instantiate = false;
PlayerPrefs.SetInt("repeated instantiate", 0);

}

}

}


if(Tutorial.repeated_instantiate){

if(Tutorial.yellow_ball_tutorial){

Tutorial.clone = Instantiate(GameObject.Find("Yellow Ball"), Vector3(25, 10, 11), transform.rotation);
Tutorial.clone.name = "Yellow Ball(Clone)";

if(GameObject.Find("Yellow Ball(Clone)")){

Tutorial.repeated_instantiate = false;
PlayerPrefs.SetInt("repeated instantiate", 0);

}

}

}


}