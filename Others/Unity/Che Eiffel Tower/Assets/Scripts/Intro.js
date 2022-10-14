#pragma strict

static var blue_sphere_right_left : GameObject;
static var green_sphere_right_left : GameObject;
static var purple_sparkly_left : GameObject;
static var big_sparkly_rocket_left : GameObject;
static var blue_sphere_left_left : GameObject;
static var red_sphere_left_left : GameObject;
static var green_sphere_left_left : GameObject;
static var golden_shower_left : GameObject;
static var red_sphere_right_left : GameObject;

static var blue_sphere_right_right : GameObject;
static var green_sphere_right_right : GameObject;
static var purple_sparkly_right : GameObject;
static var big_sparkly_rocket_right : GameObject;
static var blue_sphere_left_right : GameObject;
static var red_sphere_left_right : GameObject;
static var green_sphere_left_right : GameObject;
static var golden_shower_right : GameObject;
static var red_sphere_right_right : GameObject;

function Start () {

	AudioListener.volume = 1;

	blue_sphere_right_left = GameObject.Find("BlueSphereRight Left");
	green_sphere_right_left = GameObject.Find("GreenSphereRight Left");
	purple_sparkly_left = GameObject.Find("PurpleSparkly Left");
	big_sparkly_rocket_left = GameObject.Find("BigSparklyRocket Left");
	blue_sphere_left_left = GameObject.Find("BlueSphereLeft Left");
	red_sphere_left_left = GameObject.Find("RedSphereLeft Left");
	green_sphere_left_left = GameObject.Find("GreenSphereLeft Left");
	golden_shower_left = GameObject.Find("GoldenShower Left");
	red_sphere_right_left = GameObject.Find("RedSphereRight Left");

	blue_sphere_right_right = GameObject.Find("BlueSphereRight Right");
	green_sphere_right_right = GameObject.Find("GreenSphereRight Right");
	purple_sparkly_right = GameObject.Find("PurpleSparkly Right");
	big_sparkly_rocket_right = GameObject.Find("BigSparklyRocket Right");
	blue_sphere_left_right = GameObject.Find("BlueSphereLeft Right");
	red_sphere_left_right = GameObject.Find("RedSphereLeft Right");
	green_sphere_left_right = GameObject.Find("GreenSphereLeft Right");
	golden_shower_right = GameObject.Find("GoldenShower Right");
	red_sphere_right_right = GameObject.Find("RedSphereRight Right");

	PlayerPrefs.SetInt("fireworks volume", 0);
	Deactivate_Fireworks();

	iTween.MoveTo(GameObject.Find("Che Eiffel Tower"), iTween.Hash("position", Vector3(2500, 5000, -200), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("For you Esha, <3"), iTween.Hash("position", Vector3(-2500, -5000, 300), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Bottom Mirror"), iTween.Hash("position", Vector3(0, -500, 0), "islocal", true, "time", 1));
	Intro();

}

function Update () {

}

public static function Intro(){

	if(Application.platform == RuntimePlatform.Android){

		yield WaitForSeconds(1.5);

	}else{

		yield WaitForSeconds(1.25);

	}

	GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Intro");
	
	yield WaitForSeconds(7.5);
	GameObject.Find("Bottom Mirror").transform.position.y = -500;
	iTween.MoveTo(GameObject.Find("Bottom Mirror"), iTween.Hash("position", Vector3(0, 0, 0), "islocal", true, "time", 1));
	
	yield WaitForSeconds(20);

	Activate_Fireworks();

	yield WaitForSeconds(1.5);
	GameObject.Find("Che Eiffel Tower").transform.position.y = 650;
	GameObject.Find("For you Esha, <3").transform.position.y = 300;
	GameObject.Find("Che Eiffel Tower").transform.localScale = Vector3(4.5, 4.5, 4.5);
	GameObject.Find("For you Esha, <3").transform.localScale = Vector3(2.4, 2.4, 2.4);
	iTween.MoveTo(GameObject.Find("Che Eiffel Tower"), iTween.Hash("position", Vector3(0, 650, 200), "islocal", true, "time", 0.75));
	iTween.MoveTo(GameObject.Find("For you Esha, <3"), iTween.Hash("position", Vector3(0, 300, 300), "islocal", true, "time", 0.75));

	PlayerPrefs.SetInt("fireworks volume", 1);
	
	yield WaitForSeconds(1);
	GameObject.Find("<3").GetComponent(Animation).GetComponent.<Animation>().Play("Heart Beat");

}

public static function Deactivate_Fireworks(){

	blue_sphere_right_left.SetActive(false);
	green_sphere_right_left.SetActive(false);
	purple_sparkly_left.SetActive(false);
	big_sparkly_rocket_left.SetActive(false);
	blue_sphere_left_left.SetActive(false);
	red_sphere_left_left.SetActive(false);
	green_sphere_left_left.SetActive(false);
	golden_shower_left.SetActive(false);
	red_sphere_right_left.SetActive(false);

	blue_sphere_right_right.SetActive(false);
	green_sphere_right_right.SetActive(false);
	purple_sparkly_right.SetActive(false);
	big_sparkly_rocket_right.SetActive(false);
	blue_sphere_left_right.SetActive(false);
	red_sphere_left_right.SetActive(false);
	green_sphere_left_right.SetActive(false);
	golden_shower_right.SetActive(false);
	red_sphere_right_right.SetActive(false);

}

public static function Activate_Fireworks(){

	blue_sphere_right_left.SetActive(true);
	green_sphere_right_left.SetActive(true);
	purple_sparkly_left.SetActive(true);
	//big_sparkly_rocket_left.SetActive(true);
	//blue_sphere_left_left.SetActive(true);
	//red_sphere_left_left.SetActive(true);
	//green_sphere_left_left.SetActive(true);
	golden_shower_left.SetActive(true);
	red_sphere_right_left.SetActive(true);

	//blue_sphere_right_right.SetActive(true);
	//green_sphere_right_right.SetActive(true);
	purple_sparkly_right.SetActive(true);
	big_sparkly_rocket_right.SetActive(true);
	blue_sphere_left_right.SetActive(true);
	red_sphere_left_right.SetActive(true);
	green_sphere_left_right.SetActive(true);
	//golden_shower_right.SetActive(true);
	//red_sphere_right_right.SetActive(true);

}