#pragma strict

function Start () {

}

function Update () {

    if((Input.GetMouseButtonDown(0) || Input.GetKey(KeyCode.RightArrow)) && GameObject.Find("Camera").transform.localPosition.z == 0){

        if(Check_Pos(GameObject.Find("Left_Head"), 4.35, -1)){

            iTween.MoveTo(GameObject.Find("Left_Head"), iTween.Hash("position", Vector3(-3.06, -1.3, 5), "islocal", true, "time", 1));

        }

        if(Check_Pos(GameObject.Find("Left_Head"), -4.35, 1)){

            iTween.MoveTo(GameObject.Find("Right_Head"), iTween.Hash("position", Vector3(3.06, -1.3, 5), "islocal", true, "time", 1));

        }

        if(Check_Pos(GameObject.Find("Right_Head"), -4.35, 1)){

            iTween.MoveTo(GameObject.Find("Left_Stuff_Group"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 1.5));

        }

        if(Check_Pos(GameObject.Find("Left_Stuff_Group"), -5, 1)){

            iTween.MoveTo(GameObject.Find("Right_Stuff_Group"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 1.5));

        }

        if(Check_Pos(GameObject.Find("Right_Stuff_Group"), -5, 1)){

            iTween.ScaleTo(GameObject.Find("Center_Maze_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1.5));

            if(GameObject.Find("Center_Maze_Parent").transform.localScale.x != 1){
                
                iTween.RotateTo(GameObject.Find("Center_Maze_Parent"), iTween.Hash("rotation", Vector3(0, 0, 1080), "islocal", true, "time", 1.5));
                Bulb();

            }
        }


        if(GameObject.Find("Thinking").transform.localPosition.x == 1.13){

            GameObject.Find("Center_Bulb_Halo").GetComponent(Animation).Play("Bulb_Halo_Reset");
            iTween.MoveTo(GameObject.Find("Camera"), Vector3(0, 0, 8), 3);
            iTween.ScaleTo(GameObject.Find("Center_Bulb"), iTween.Hash("scale", Vector3(0.002, 1, 0.002), "islocal", true, "time", 1));
            iTween.FadeTo(GameObject.Find("Grey_Plane"), iTween.Hash("alpha", 0, "time", 5));
            Adjust_Camera();

        }


    }

    if(Input.GetMouseButtonDown(1)  || Input.GetKey(KeyCode.LeftArrow)){

        if(GameObject.Find("Center_Bulb").transform.localScale.x == 0.263){

            Bulb_Out();

        }

        if(GameObject.Find("Center_Maze_Parent").transform.localScale.x < 0.05){

            iTween.MoveTo(GameObject.Find("Right_Stuff_Group"), iTween.Hash("position", Vector3(0, -10, 0), "islocal", true, "time", 1.5));

        }

        if(Check_Pos(GameObject.Find("Right_Stuff_Group"), 5, -1)){

            iTween.MoveTo(GameObject.Find("Left_Stuff_Group"), iTween.Hash("position", Vector3(0, -10, 0), "islocal", true, "time", 1.5));

        }

        if(Check_Pos(GameObject.Find("Left_Stuff_Group"), 5, -1)){

            iTween.MoveTo(GameObject.Find("Right_Head"), iTween.Hash("position", Vector3(3.06, -10, 5), "islocal", true, "time", 1));

        }

        if(Check_Pos(GameObject.Find("Right_Head"), 4.35, -1)){

            iTween.MoveTo(GameObject.Find("Left_Head"), iTween.Hash("position", Vector3(-3.06, -10, 5), "islocal", true, "time", 1));

        }

    }

}

function Check_Pos(game_object : GameObject, y : float, sign : int){

    if(game_object.transform.localPosition.y*sign > y){

        return true;

    }else{

        return false;

    }

}

function Bulb(){

    yield WaitForSeconds(1);
    iTween.ScaleTo(GameObject.Find("Center_Bulb"), iTween.Hash("scale", Vector3(0.263, 1, 0.263), "islocal", true, "time", 1));
    yield WaitForSeconds(1);

    iTween.MoveTo(GameObject.Find("By"), iTween.Hash("position", Vector3(0, -0.73, 2), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Deebthik Ravi"), iTween.Hash("position", Vector3(0, -0.95, 2), "islocal", true, "time", 1));

    iTween.MoveTo(GameObject.Find("Critical"), iTween.Hash("position", Vector3(-1.13, 1, 2), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Thinking"), iTween.Hash("position", Vector3(1.13, 1, 2), "islocal", true, "time", 1));

    GameObject.Find("Center_Bulb_Halo").GetComponent(Animation).Play("Bulb_Halo_Loop");

}

function Bulb_Out(){

    iTween.MoveTo(GameObject.Find("By"), iTween.Hash("position", Vector3(-10, -0.73, 2), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Deebthik Ravi"), iTween.Hash("position", Vector3(10, -0.95, 2), "islocal", true, "time", 2));

    iTween.MoveTo(GameObject.Find("Critical"), iTween.Hash("position", Vector3(-10, 1, 2), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Thinking"), iTween.Hash("position", Vector3(10, 1, 2), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    GameObject.Find("Center_Bulb_Halo").GetComponent(Animation).Play("Bulb_Halo_Reset");
    iTween.ScaleTo(GameObject.Find("Center_Bulb"), iTween.Hash("scale", Vector3(0.002, 1, 0.002), "islocal", true, "time", 1));

    yield WaitForSeconds(0.5);

    iTween.ScaleTo(GameObject.Find("Center_Maze_Parent"), iTween.Hash("scale", Vector3(0.001, 0.001, 1), "islocal", true, "time", 1.5));
    iTween.RotateTo(GameObject.Find("Center_Maze_Parent"), iTween.Hash("rotation", Vector3(0, 0, -1080), "islocal", true, "time", 1.5));

}

function Adjust_Camera(){

	yield WaitForSeconds(3.1);
	GameObject.Find("Main Camera Parent").transform.localPosition.z = -0.5;

}
