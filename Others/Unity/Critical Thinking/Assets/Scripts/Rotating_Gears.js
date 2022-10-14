#pragma strict

function Start () {

}

function Update () {

    GameObject.Find("Left_Gear_1").transform.Rotate(Vector3.up * 1);
    GameObject.Find("Left_Gear_2").transform.Rotate(Vector3.down * 1);
    GameObject.Find("Left_Gear_3").transform.Rotate(Vector3.up * 1);

    GameObject.Find("Right_Gear_1").transform.Rotate(Vector3.down * 1);
    GameObject.Find("Right_Gear_2").transform.Rotate(Vector3.up * 1);
    GameObject.Find("Right_Gear_3").transform.Rotate(Vector3.down * 1);

}