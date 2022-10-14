#pragma strict

var big_gear_1_clockwise : boolean = false;
var big_gear_2_clockwise : boolean = false;
var big_gear_3_clockwise : boolean = false;
var big_gear_4_clockwise : boolean = false;
var big_gear_5_clockwise : boolean = false;
var big_gear_6_clockwise : boolean = false;

var introduction : boolean;
var definitions: boolean;
var procedure : boolean;
var significance : boolean;
var conclusion : boolean;
var high_note : boolean;

function Start () {

    introduction = true;
    definitions = false;
    procedure = false;
    significance = false;
    conclusion = false;
    high_note = false;

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){

		Application.Quit();

	}



    GameObject.Find("Small_Gear_1").transform.Rotate(Vector3.up * 1);
    if(!big_gear_1_clockwise){
        GameObject.Find("Big_Gear_1").transform.Rotate(Vector3.down * 1);
    }else{
        GameObject.Find("Big_Gear_1").transform.Rotate(Vector3.up * 1);
    }

    GameObject.Find("Small_Gear_2").transform.Rotate(Vector3.down * 1);
    if(!big_gear_2_clockwise){
        GameObject.Find("Big_Gear_2").transform.Rotate(Vector3.up * 1);
    }else{
        GameObject.Find("Big_Gear_2").transform.Rotate(Vector3.down * 1);
    }

    GameObject.Find("Small_Gear_3").transform.Rotate(Vector3.up * 1);
    if(!big_gear_3_clockwise){
        GameObject.Find("Big_Gear_3").transform.Rotate(Vector3.down * 1);
    }else{
        GameObject.Find("Big_Gear_3").transform.Rotate(Vector3.up * 1);
    }

    GameObject.Find("Small_Gear_4").transform.Rotate(Vector3.down * 1);
    if(!big_gear_4_clockwise){
        GameObject.Find("Big_Gear_4").transform.Rotate(Vector3.up * 1);
    }else{
        GameObject.Find("Big_Gear_4").transform.Rotate(Vector3.down * 1);
    }

    GameObject.Find("Small_Gear_5").transform.Rotate(Vector3.up * 1);
    if(!big_gear_5_clockwise){
        GameObject.Find("Big_Gear_5").transform.Rotate(Vector3.down * 1);
    }else{
        GameObject.Find("Big_Gear_5").transform.Rotate(Vector3.up * 1);
    }

    GameObject.Find("Small_Gear_6").transform.Rotate(Vector3.down * 1);
    if(!big_gear_6_clockwise){
        GameObject.Find("Big_Gear_6").transform.Rotate(Vector3.up * 1);
    }else{
        GameObject.Find("Big_Gear_6").transform.Rotate(Vector3.down * 1);
    }



    if(Input.GetMouseButtonDown(0) || Input.GetKey(KeyCode.RightArrow)){

        if(GameObject.Find("Camera").transform.position.z > 7 
            && GameObject.Find("Introduction").transform.localPosition.x < -15 
            && GameObject.Find("Definitions").transform.localPosition.x > 20 
            && GameObject.Find("Procedure").transform.localPosition.x < -15 
            && GameObject.Find("Significance").transform.localPosition.x > 20 
            && GameObject.Find("Conclusion").transform.localPosition.x < -15 
            && GameObject.Find("High_Note").transform.localPosition.y > 10){

            Menu_Move_In();

        }

        if(GameObject.Find("High_Note").transform.localPosition.y == -2 && GameObject.Find("High_Note").transform.localPosition.x == 3){

            if(introduction){

                Introduction_In();

            }

            if(definitions){

                Definitions_In();

            }

            if(procedure){

                Procedure_In();

            }

            if(significance){

                Significance_In();

            }

        }

        if(GameObject.Find("Conclusion_Info_Whole").transform.localPosition == Vector3(0, -1.25, 14)){

			Conclusion_Bulb();

		}

		if(GameObject.Find("High_Note").transform.localPosition.y == 2){

			iTween.ScaleTo(GameObject.Find("Keep Calm and Think Critically"), iTween.Hash("scale", Vector3(0.72, 0.9, 0.72), "islocal", true, "time", 2));

		}

    }


    if(GameObject.Find("High_Note").transform.localPosition.y == -2 && GameObject.Find("High_Note").transform.localPosition.x == 3){

        if(Input.GetKey(KeyCode.Alpha1) || Input.GetKey(KeyCode.Keypad1)){

            Introduction_In();

        }

        if(Input.GetKey(KeyCode.Alpha2) || Input.GetKey(KeyCode.Keypad2)){

            Definitions_In();

        }

        if(Input.GetKey(KeyCode.Alpha3) || Input.GetKey(KeyCode.Keypad3)){

            Procedure_In();

        }

        if(Input.GetKey(KeyCode.Alpha4) || Input.GetKey(KeyCode.Keypad4)){

            Significance_In();

        }

        if(Input.GetKey(KeyCode.Alpha5) || Input.GetKey(KeyCode.Keypad5)){

            Conclusion_In();

        }

        if(Input.GetKey(KeyCode.Alpha6) || Input.GetKey(KeyCode.Keypad6)){

            High_Note_In();

        }

    }


    if(Input.GetMouseButtonDown(1) || Input.GetKey(KeyCode.LeftArrow)){

        if(GameObject.Find("High_Note").transform.localPosition.y < 0 && GameObject.Find("High_Note").transform.localPosition.x == 3){

            Menu_Move_Out();

        }

        if(GameObject.Find("Camera").transform.position.z > 7 
            && GameObject.Find("Introduction").transform.localPosition.x == -20
            && GameObject.Find("Definitions").transform.localPosition.x == 25
            && GameObject.Find("Procedure").transform.localPosition.x == -20
            && GameObject.Find("Significance").transform.localPosition.x == 25
            && GameObject.Find("Conclusion").transform.localPosition.x == -20
            && GameObject.Find("High_Note").transform.localPosition.y == 15){

            iTween.FadeTo(GameObject.Find("Grey_Plane"), iTween.Hash("alpha", 1.0f, "time", 0.5));
            iTween.ScaleTo(GameObject.Find("Center_Bulb"), iTween.Hash("scale", Vector3(0.263, 1, 0.263), "islocal", true, "time", 6));
            iTween.MoveTo(GameObject.Find("Camera"), Vector3(0, 0, 0), 3);
            GameObject.Find("Center_Bulb_Halo").GetComponent(Animation).Play("Bulb_Halo_Loop");

        }

        if(GameObject.Find("Introduction_Info_Whole").transform.localScale.x == 0.8){

            Introduction_Out();

        }

        if(GameObject.Find("Definitions_Info_Whole").transform.localScale.x == 0.8){

            Definitions_Out();

        }

        if(GameObject.Find("Procedure_Info_Whole").transform.localScale.x == 0.8){

            Procedure_Out();

        }

        if(GameObject.Find("Significance_Info_Whole").transform.localScale.x == 0.8){

            Significance_Out();

        }

        if(GameObject.Find("Conclusion_Info_Whole").transform.localScale.x == 0.8){

            Conclusion_Out();

        }

    }

}

function Menu_Move_In(){

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.5);
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, -1.03, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.5);
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, -2.58, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.5);
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, -4.12, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.5);
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, -5.66, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.5);
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, -2, 1.425), "islocal", true, "time", 1));

}

function Menu_Move_Out(){

    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, 15, 1.425), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.25);
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(-20, -5.66, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.25);
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(25, -4.12, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.25);
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(-20, -2.58, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.25);
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(25, -1.03, 0), "islocal", true, "time", 1));

    yield WaitForSeconds(0.25);
    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(-20, 0.5, 0), "islocal", true, "time", 1));

}

function Introduction_In(){

    big_gear_1_clockwise = true;

    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(-20, -1.03, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(-20, -2.58, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(-20, -4.12, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(-20, -5.66, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(20, -2, 1.425), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    iTween.MoveTo(GameObject.Find("Big_Gear_1"), iTween.Hash("position", Vector3(5.9, 2.64, 15), "islocal", true, "time", 3));
    GameObject.Find("Big_Gear_1").GetComponent(Animation).Play("Big_Gear_Halo");

    GameObject.Find("Introduction_Info_Whole").transform.localPosition.x = 15;
    iTween.RotateTo(GameObject.Find("Introduction_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, 1080), "islocal", true, "time", 2.5));
    iTween.MoveTo(GameObject.Find("Introduction_Info_Whole"), iTween.Hash("position", Vector3(0, -1.25, 14), "islocal", true, "time", 2.5));

    yield WaitForSeconds(2.5);

    iTween.MoveTo(GameObject.Find("Introduction_Info_Parent"), iTween.Hash("position", Vector3(0, 1.4, -14), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Introduction_Info_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Info_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, -3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Info_Gear_1_Parent"), iTween.Hash("scale", Vector3(10, 10, 10), "islocal", true, "time", 4));
    iTween.FadeTo(GameObject.Find("Info_Gear_1"), iTween.Hash("alpha", 0, "time", 2));

    yield WaitForSeconds(1);

    iTween.ScaleTo(GameObject.Find("Introduction_Info_Whole"), iTween.Hash("scale", Vector3(0.8, 0.8, 0.8), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.5);

    GameObject.Find("Red_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain");

}

function Introduction_Out(){

    big_gear_1_clockwise = false;

    GameObject.Find("Red_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain_Reset");

    iTween.ScaleTo(GameObject.Find("Introduction_Info_Whole"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Introduction_Info_Parent"), iTween.Hash("position", Vector3(0, 0.5, -14), "islocal", true, "time", 1));
    iTween.ScaleTo(GameObject.Find("Introduction_Info_Parent"), iTween.Hash("scale", Vector3(0.25, 0.25, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Info_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, 3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Info_Gear_1_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.FadeTo(GameObject.Find("Info_Gear_1"), iTween.Hash("alpha", 1.0f, "time", 2));

    yield WaitForSeconds(2);

    iTween.MoveTo(GameObject.Find("Big_Gear_1"), iTween.Hash("position", Vector3(-4.95, 2.64, 15), "islocal", true, "time", 2));
    GameObject.Find("Big_Gear_1").GetComponent(Animation).Play("Big_Gear_Halo_Reset");

    iTween.RotateTo(GameObject.Find("Introduction_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, -1080), "islocal", true, "time", 5));
    iTween.MoveTo(GameObject.Find("Introduction_Info_Whole"), iTween.Hash("position", Vector3(40, -1.25, 14), "islocal", true, "time", 10));

    yield WaitForSeconds(1.5);

    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, -1.03, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, -2.58, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, -4.12, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, -5.66, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, -2, 1.425), "islocal", true, "time", 1));

    introduction = false;
    definitions = true;

}

function Definitions_In(){

    big_gear_2_clockwise = true;

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(-20, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(-20, -2.58, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(-20, -4.12, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(-20, -5.66, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(20, -2, 1.425), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Definitions_Text"), iTween.Hash("position", Vector3(-0.1, 2.15, 14), "islocal", true, "time", 1));

    iTween.MoveTo(GameObject.Find("Big_Gear_2"), iTween.Hash("position", Vector3(5.9, 2.64, 15), "islocal", true, "time", 3));
    GameObject.Find("Big_Gear_2").GetComponent(Animation).Play("Big_Gear_Halo");

    GameObject.Find("Definitions_Info_Whole").transform.localPosition.x = 15;
    iTween.RotateTo(GameObject.Find("Definitions_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, 1080), "islocal", true, "time", 2.5));
    iTween.MoveTo(GameObject.Find("Definitions_Info_Whole"), iTween.Hash("position", Vector3(0, -1.25, 14), "islocal", true, "time", 2.5));

    yield WaitForSeconds(2.5);

    iTween.MoveTo(GameObject.Find("Definitions_Info_Parent"), iTween.Hash("position", Vector3(0, 1.4, -14), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Definitions_Info_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Definitions_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, -3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Definitions_Gear_1_Parent"), iTween.Hash("scale", Vector3(10, 10, 10), "islocal", true, "time", 4));
    iTween.FadeTo(GameObject.Find("Definitions_Gear_1"), iTween.Hash("alpha", 0, "time", 2));

    yield WaitForSeconds(1);

    iTween.ScaleTo(GameObject.Find("Definitions_Info_Whole"), iTween.Hash("scale", Vector3(0.8, 0.8, 0.8), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.5);

    GameObject.Find("Blue_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain");

}

function Definitions_Out(){

    big_gear_2_clockwise = false;

    GameObject.Find("Blue_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain_Reset");

    iTween.ScaleTo(GameObject.Find("Definitions_Info_Whole"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Definitions_Info_Parent"), iTween.Hash("position", Vector3(0, 0.5, -14), "islocal", true, "time", 1));
    iTween.ScaleTo(GameObject.Find("Definitions_Info_Parent"), iTween.Hash("scale", Vector3(0.25, 0.25, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Definitions_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, 3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Definitions_Gear_1_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.FadeTo(GameObject.Find("Definitions_Gear_1"), iTween.Hash("alpha", 1.0f, "time", 2));

    yield WaitForSeconds(2);

    iTween.MoveTo(GameObject.Find("Big_Gear_2"), iTween.Hash("position", Vector3(-4.95, 2.64, 15), "islocal", true, "time", 2));
    GameObject.Find("Big_Gear_2").GetComponent(Animation).Play("Big_Gear_Halo_Reset");

    iTween.RotateTo(GameObject.Find("Definitions_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, -1080), "islocal", true, "time", 5));
    iTween.MoveTo(GameObject.Find("Definitions_Info_Whole"), iTween.Hash("position", Vector3(40, -1.25, 14), "islocal", true, "time", 10));

    yield WaitForSeconds(1.5);

    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, -1.03, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Definitions_Text"), iTween.Hash("position", Vector3(-0.1, 2.38, 14), "islocal", true, "time", 1));

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, -2.58, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, -4.12, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, -5.66, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, -2, 1.425), "islocal", true, "time", 1));

    definitions = false;
    procedure = true;

}

function Procedure_In(){

    big_gear_3_clockwise = true;

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(-20, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(-20, -1.03, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(-20, -4.12, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(-20, -5.66, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(20, -2, 1.425), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1.5));
    iTween.MoveTo(GameObject.Find("Procedure_Text"), iTween.Hash("position", Vector3(-0.1, 2.22, 14), "islocal", true, "time", 1.5));

    iTween.MoveTo(GameObject.Find("Big_Gear_3"), iTween.Hash("position", Vector3(5.9, 2.64, 15), "islocal", true, "time", 3));
    GameObject.Find("Big_Gear_3").GetComponent(Animation).Play("Big_Gear_Halo");

    GameObject.Find("Procedure_Info_Whole").transform.localPosition.x = 15;
    iTween.RotateTo(GameObject.Find("Procedure_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, 1080), "islocal", true, "time", 2.5));
    iTween.MoveTo(GameObject.Find("Procedure_Info_Whole"), iTween.Hash("position", Vector3(0, -1.25, 14), "islocal", true, "time", 2.5));

    yield WaitForSeconds(2.5);

    iTween.MoveTo(GameObject.Find("Procedure_Info_Parent"), iTween.Hash("position", Vector3(0, 1.4, -14), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Procedure_Info_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Procedure_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, -3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Procedure_Gear_1_Parent"), iTween.Hash("scale", Vector3(10, 10, 10), "islocal", true, "time", 4));
    iTween.FadeTo(GameObject.Find("Procedure_Gear_1"), iTween.Hash("alpha", 0, "time", 2));

    yield WaitForSeconds(1);

    iTween.ScaleTo(GameObject.Find("Procedure_Info_Whole"), iTween.Hash("scale", Vector3(0.8, 0.8, 0.8), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.5);

    GameObject.Find("Green_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain");

}

function Procedure_Out(){

    big_gear_3_clockwise = false;

    GameObject.Find("Green_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain_Reset");

    iTween.ScaleTo(GameObject.Find("Procedure_Info_Whole"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Procedure_Info_Parent"), iTween.Hash("position", Vector3(0, 0.5, -14), "islocal", true, "time", 1));
    iTween.ScaleTo(GameObject.Find("Procedure_Info_Parent"), iTween.Hash("scale", Vector3(0.25, 0.25, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Procedure_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, 3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Procedure_Gear_1_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.FadeTo(GameObject.Find("Procedure_Gear_1"), iTween.Hash("alpha", 1.0f, "time", 2));

    yield WaitForSeconds(2);

    iTween.MoveTo(GameObject.Find("Big_Gear_3"), iTween.Hash("position", Vector3(-4.95, 2.64, 15), "islocal", true, "time", 2));
    GameObject.Find("Big_Gear_3").GetComponent(Animation).Play("Big_Gear_Halo_Reset");

    iTween.RotateTo(GameObject.Find("Procedure_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, -1080), "islocal", true, "time", 5));
    iTween.MoveTo(GameObject.Find("Procedure_Info_Whole"), iTween.Hash("position", Vector3(40, -1.25, 14), "islocal", true, "time", 10));

    yield WaitForSeconds(1.5);

    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, -2.58, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Procedure_Text"), iTween.Hash("position", Vector3(-0.1, 2.66, 14), "islocal", true, "time", 1));

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, -1.03, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, -4.12, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, -5.66, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, -2, 1.425), "islocal", true, "time", 1));

    procedure = false;
    significance = true;

}

function Significance_In(){

    big_gear_4_clockwise = true;

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(-20, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(-20, -1.03, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(-20, -2.58, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(-20, -5.66, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(20, -2, 1.425), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Significance_Text"), iTween.Hash("position", Vector3(-0.1, 2.16, 14), "islocal", true, "time", 2));

    iTween.MoveTo(GameObject.Find("Big_Gear_4"), iTween.Hash("position", Vector3(5.9, 2.64, 15), "islocal", true, "time", 3));
    GameObject.Find("Big_Gear_4").GetComponent(Animation).Play("Big_Gear_Halo");

    GameObject.Find("Significance_Info_Whole").transform.localPosition.x = 15;
    iTween.RotateTo(GameObject.Find("Significance_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, 1080), "islocal", true, "time", 2.5));
    iTween.MoveTo(GameObject.Find("Significance_Info_Whole"), iTween.Hash("position", Vector3(0, -1.25, 14), "islocal", true, "time", 2.5));

    yield WaitForSeconds(2.5);

    iTween.MoveTo(GameObject.Find("Significance_Info_Parent"), iTween.Hash("position", Vector3(0, 1.4, -14), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Significance_Info_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Significance_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, -3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Significance_Gear_1_Parent"), iTween.Hash("scale", Vector3(10, 10, 10), "islocal", true, "time", 4));
    iTween.FadeTo(GameObject.Find("Significance_Gear_1"), iTween.Hash("alpha", 0, "time", 2));

    yield WaitForSeconds(1);

    iTween.ScaleTo(GameObject.Find("Significance_Info_Whole"), iTween.Hash("scale", Vector3(0.8, 0.8, 0.8), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.5);

    GameObject.Find("Orange_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain");
    iTween.ScaleTo(GameObject.Find("Significance_Head_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));

    yield WaitForSeconds(1);
    GameObject.Find("Left_Half").GetComponent(Animation).Play("Left_Half");
    GameObject.Find("Right_Half").GetComponent(Animation).Play("Right_Half");

}

function Significance_Out(){

    big_gear_4_clockwise = false;

    GameObject.Find("Orange_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain_Reset");
    iTween.ScaleTo(GameObject.Find("Significance_Head_Parent"), iTween.Hash("scale", Vector3(0.0001, 0.0001, 0.0001), "islocal", true, "time", 1));

    iTween.ScaleTo(GameObject.Find("Significance_Info_Whole"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Significance_Info_Parent"), iTween.Hash("position", Vector3(0, 0.5, -14), "islocal", true, "time", 1));
    iTween.ScaleTo(GameObject.Find("Significance_Info_Parent"), iTween.Hash("scale", Vector3(0.25, 0.25, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Significance_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, 3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Significance_Gear_1_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.FadeTo(GameObject.Find("Significance_Gear_1"), iTween.Hash("alpha", 1.0f, "time", 2));

    yield WaitForSeconds(2);

    iTween.MoveTo(GameObject.Find("Big_Gear_4"), iTween.Hash("position", Vector3(-4.95, 2.64, 15), "islocal", true, "time", 2));
    GameObject.Find("Big_Gear_4").GetComponent(Animation).Play("Big_Gear_Halo_Reset");

    iTween.RotateTo(GameObject.Find("Significance_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, -1080), "islocal", true, "time", 5));
    iTween.MoveTo(GameObject.Find("Significance_Info_Whole"), iTween.Hash("position", Vector3(40, -1.25, 14), "islocal", true, "time", 10));

    yield WaitForSeconds(1.5);

    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, -4.12, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Significance_Text"), iTween.Hash("position", Vector3(-0.1, 2.8, 14), "islocal", true, "time", 1));

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, -1.03, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, -2.58, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, -5.66, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, -2, 1.425), "islocal", true, "time", 1));

    significance = false;
    conclusion = true;

}

function Conclusion_In(){

    big_gear_5_clockwise = true;

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(-20, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(-20, -1.03, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(-20, -2.58, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(-20, -4.12, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(20, -2, 1.425), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Conclusion_Text"), iTween.Hash("position", Vector3(-0.1, 2.16, 14), "islocal", true, "time", 2));

    iTween.MoveTo(GameObject.Find("Big_Gear_5"), iTween.Hash("position", Vector3(5.9, 2.64, 15), "islocal", true, "time", 3));
    GameObject.Find("Big_Gear_5").GetComponent(Animation).Play("Big_Gear_Halo");

    GameObject.Find("Conclusion_Info_Whole").transform.localPosition.x = 15;
    iTween.RotateTo(GameObject.Find("Conclusion_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, 1080), "islocal", true, "time", 2.5));
    iTween.MoveTo(GameObject.Find("Conclusion_Info_Whole"), iTween.Hash("position", Vector3(0, -1.25, 14), "islocal", true, "time", 2.5));

    yield WaitForSeconds(2.5);

    iTween.MoveTo(GameObject.Find("Conclusion_Info_Parent"), iTween.Hash("position", Vector3(0, 1.4, -14), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Conclusion_Info_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Conclusion_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, -3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Conclusion_Gear_1_Parent"), iTween.Hash("scale", Vector3(10, 10, 10), "islocal", true, "time", 4));
    iTween.FadeTo(GameObject.Find("Conclusion_Gear_1"), iTween.Hash("alpha", 0, "time", 2));

    yield WaitForSeconds(1);

    iTween.ScaleTo(GameObject.Find("Conclusion_Info_Whole"), iTween.Hash("scale", Vector3(0.8, 0.8, 0.8), "islocal", true, "time", 1));
    
    yield WaitForSeconds(0.5);

    GameObject.Find("Violet_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain");

}

function Conclusion_Out(){

	GameObject.Find("Conclusion_Bulb_Halo").GetComponent(Animation).Play("Bulb_Halo_Reset");
    big_gear_5_clockwise = false;

    GameObject.Find("Violet_Border_Brain_Parent").GetComponent(Animation).Play("Border_Brain_Reset");

    iTween.ScaleTo(GameObject.Find("Conclusion_Info_Whole"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Conclusion_Info_Parent"), iTween.Hash("position", Vector3(0, 0.5, -14), "islocal", true, "time", 1));
    iTween.ScaleTo(GameObject.Find("Conclusion_Info_Parent"), iTween.Hash("scale", Vector3(0.25, 0.25, 1), "islocal", true, "time", 2));
    iTween.RotateTo(GameObject.Find("Conclusion_Gear_1_Parent"), iTween.Hash("rotation", Vector3(0, 0, 3600), "islocal", true, "time", 2));
    iTween.ScaleTo(GameObject.Find("Conclusion_Gear_1_Parent"), iTween.Hash("scale", Vector3(1, 1, 1), "islocal", true, "time", 2));
    iTween.FadeTo(GameObject.Find("Conclusion_Gear_1"), iTween.Hash("alpha", 1.0f, "time", 2));

    yield WaitForSeconds(2);

    iTween.MoveTo(GameObject.Find("Big_Gear_5"), iTween.Hash("position", Vector3(-4.95, 2.64, 15), "islocal", true, "time", 2));
    GameObject.Find("Big_Gear_5").GetComponent(Animation).Play("Big_Gear_Halo_Reset");

    iTween.RotateTo(GameObject.Find("Conclusion_Info_Whole"), iTween.Hash("rotation", Vector3(0, 0, -1080), "islocal", true, "time", 5));
    iTween.MoveTo(GameObject.Find("Conclusion_Info_Whole"), iTween.Hash("position", Vector3(40, -1.25, 14), "islocal", true, "time", 10));

    yield WaitForSeconds(1.5);

    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(0, -5.66, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Conclusion_Text"), iTween.Hash("position", Vector3(-0.1, 2.98, 14), "islocal", true, "time", 1));

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(0, 0.5, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(0, -1.03, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(0, -2.58, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(0, -4.12, 0), "islocal", true, "time", 1));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(3, -2, 1.425), "islocal", true, "time", 1));

    conclusion = false;
    high_note = true;

}

function Conclusion_Bulb(){
	
	iTween.ScaleTo(GameObject.Find("Conclusion_Bulb"), iTween.Hash("scale", Vector3(0.75, 1, 0.575), "islocal", true, "time", 1));

	yield WaitForSeconds(1);
	GameObject.Find("Conclusion_Bulb_Halo").GetComponent(Animation).Play("Bulb_Halo_Loop");

}

function High_Note_In(){

    big_gear_6_clockwise = true;

    iTween.MoveTo(GameObject.Find("Introduction"), iTween.Hash("position", Vector3(-20, 0.5, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Definitions"), iTween.Hash("position", Vector3(-20, -1.03, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Procedure"), iTween.Hash("position", Vector3(-20, -2.58, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Significance"), iTween.Hash("position", Vector3(-20, -4.12, 0), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("Conclusion"), iTween.Hash("position", Vector3(-20, -5.66, 0), "islocal", true, "time", 2));

    yield WaitForSeconds(0.5);

    iTween.RotateTo(GameObject.Find("High_Note"), iTween.Hash("rotation", Vector3(0, 0, 90), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note"), iTween.Hash("position", Vector3(-2.55, 2, 1.425), "islocal", true, "time", 2));
    iTween.MoveTo(GameObject.Find("High_Note_Text"), iTween.Hash("position", Vector3(-1.17, 1.9, 14), "islocal", true, "time", 2));

    GameObject.Find("Big_Gear_6").GetComponent(Animation).Play("Big_Gear_Halo");
  	
}