#pragma strict
public static var rotation : float;
public static var time1 : float;
time1 = 1000;
public static var time2 : float;
time2 = 1;
public static var z_rotation : float;
public static var tilt_sensitivity : float;
tilt_sensitivity = PlayerPrefs.GetFloat("tilt sensitivity", 0.3);

function Start () {

}

function Update () {

//Input.gyro.enabled = true;

//this.transform.rotation = Input.gyro.attitude;

if(Play.play || Tutorial.main_platform_instruction || Tutorial.play_trial){

/*z_rotation += -Input.acceleration.x * 5;
z_rotation = Mathf.Clamp(z_rotation, -20, 20);
this.transform.rotation = Quaternion.Euler(0, 0, z_rotation);*/

this.transform.rotation.z = -Input.acceleration.x * tilt_sensitivity;

if((this.transform.eulerAngles.z > 20) && (this.transform.eulerAngles.z < 180)){

//this.transform.rotation.z = -Input.acceleration.x * 0.5;
this.transform.rotation = Quaternion.Euler(0, 0, 19.9);

}

if((this.transform.eulerAngles.z > 270) && (this.transform.eulerAngles.z < 340)){

//this.transform.rotation.z = -Input.acceleration.x * 0.5;
this.transform.rotation = Quaternion.Euler(0, 0, -19.9);

}



if(this.transform.rotation == Quaternion.Euler(0, 0, 19.9)){

time1 = Time.time;

}

if(this.transform.rotation == Quaternion.Euler(0, 0, -19.9)){

time2 = Time.time;

}

if(this.transform.rotation == Quaternion.Euler(0, 0, 19.9)){

if(((time1 - time2) < 0.2) && ((time1 - time2) > 0)){

Play.big_cuboid_moving_fast_1 = true;

}else{

Play.big_cuboid_moving_fast_1 = false;

}

}

if(this.transform.rotation == Quaternion.Euler(0, 0, -19.9)){

if(((time2 - time1) < 0.2) && ((time2 - time1) > 0)){

Play.big_cuboid_moving_fast_2 = true;

}else{

Play.big_cuboid_moving_fast_2 = false;

}

}


}

}
