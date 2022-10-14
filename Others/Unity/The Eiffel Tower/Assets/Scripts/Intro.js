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

static var spotlight : GameObject;
static var main_camera : GameObject;
static var main_camera_parent : GameObject;

function Start () {

	AudioListener.volume = 1;

	/*blue_sphere_right_left = GameObject.Find("BlueSphereRight Left");
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
	Deactivate_Fireworks();*/

	spotlight = GameObject.Find("Spotlight");
	main_camera = GameObject.Find("Main Camera");
	main_camera_parent = GameObject.Find("Main Camera Parent");

	iTween.MoveTo(GameObject.Find("The Eiffel Tower"), iTween.Hash("position", Vector3(0, 2500, 200), "islocal", true, "time", 1));

}

function Update () {

	if(Input.GetKeyDown(KeyCode.RightArrow)){

		if(GameObject.Find("Main Camera Parent").transform.localPosition == Vector3(0, 1200, -435)){

			Intro();

		}

		if(GameObject.Find("The Eiffel Tower").transform.localPosition == Vector3(0, 400, 200)){

			iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(0, 1500, 200), "islocal", true, "time", 2));
			/*iTween.MoveTo(GameObject.Find("Harish"), iTween.Hash("position", Vector3(1500, 900, 200), "islocal", true, "time", 1));
			iTween.MoveTo(GameObject.Find("Vijay"), iTween.Hash("position", Vector3(-1500, 900, 200), "islocal", true, "time", 1));
			iTween.MoveTo(GameObject.Find("Raahul"), iTween.Hash("position", Vector3(1500, 700, 200), "islocal", true, "time", 1));
			iTween.MoveTo(GameObject.Find("Hari"), iTween.Hash("position", Vector3(-1500, 700, 200), "islocal", true, "time", 1));*/
			iTween.MoveTo(GameObject.Find("The Eiffel Tower"), iTween.Hash("position", Vector3(0, -500, 200), "islocal", true, "time", 1));

			Spotlight();

		}

	}

}

public static function Intro(){

	yield WaitForSeconds(1);

	spotlight.GetComponent(Animation).Play("Spotlight Intensity");
	//iTween.FadeTo(GameObject.Find("DEs HaRaViHa"), iTween.Hash("alpha", 0, "time", 3));
	//iTween.FadeTo(GameObject.Find("Presents..."), iTween.Hash("alpha", 0, "time", 3));
	iTween.FadeTo(GameObject.Find("Background Black Plane"), iTween.Hash("alpha", 0, "time", 3));

	GameObject.Find("Wunderbar Studios Theme").GetComponent(AudioSource).Play();

	yield WaitForSeconds(1);

	GameObject.Find("Main Camera Parent").GetComponent(Animation).GetComponent.<Animation>().Play("Intro");

	yield WaitForSeconds(1);
	//spotlight.SetActive(false);

	yield WaitForSeconds(6.5);

	yield WaitForSeconds(4);

	//Activate_Fireworks();

	yield WaitForSeconds(5.5);

	GameObject.Find("The Eiffel Tower").transform.localScale = Vector3(6, 6, 6);
	iTween.MoveTo(GameObject.Find("The Eiffel Tower"), iTween.Hash("position", Vector3(0, 400, 200), "islocal", true, "time", 1));

	yield WaitForSeconds(1);

	GameObject.Find("Deebthik").transform.localScale = Vector3(2.5, 2.5, 2.5);
	/*GameObject.Find("Harish").transform.localScale = Vector3(2.5, 2.5, 2.5);
	GameObject.Find("Vijay").transform.localScale = Vector3(2.5, 2.5, 2.5);
	GameObject.Find("Raahul").transform.localScale = Vector3(2.5, 2.5, 2.5);
	GameObject.Find("Hari").transform.localScale = Vector3(2.5, 2.5, 2.5);*/
	iTween.MoveTo(GameObject.Find("Deebthik"), iTween.Hash("position", Vector3(0, 1000, 200), "islocal", true, "time", 2));
	/*iTween.MoveTo(GameObject.Find("Harish"), iTween.Hash("position", Vector3(800, 900, 200), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Vijay"), iTween.Hash("position", Vector3(-800, 900, 200), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Raahul"), iTween.Hash("position", Vector3(800, 700, 200), "islocal", true, "time", 1));
	iTween.MoveTo(GameObject.Find("Hari"), iTween.Hash("position", Vector3(-800, 700, 200), "islocal", true, "time", 1));*/

	PlayerPrefs.SetInt("fireworks volume", 1);

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

static function Spotlight(){

	iTween.MoveTo(GameObject.Find("Main Camera Parent"), iTween.Hash("position", Vector3(0, 0, -10), "islocal", true, "time", 3));

	yield WaitForSeconds(2);
	GameObject.Find("Spotlight Sound").GetComponent(AudioSource).Play();
	spotlight.GetComponent(Light).intensity = 8;

	yield WaitForSeconds(1);
	//main_camera_parent.GetComponent(MouseOrbit).enabled = true;

	GameObject.Find("Deebthik").transform.localScale = Vector3(0, 0, 0);
	//GameObject.Find("Harish").transform.localScale = Vector3(0, 0, 0);
	//GameObject.Find("Vijay").transform.localScale = Vector3(0, 0, 0);
	//GameObject.Find("Raahul").transform.localScale = Vector3(0, 0, 0);
	//GameObject.Find("Hari").transform.localScale = Vector3(0, 0, 0);
	GameObject.Find("The Eiffel Tower").transform.localScale = Vector3(0, 0, 0);

	GameObject.Find("All Info").transform.localPosition.x = 0;

}