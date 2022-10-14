#pragma strict

function Start () {

}

function Update () {

	GameObject.Find("Best Reaction Time Text").GetComponent(TextMesh).text = "Best Reaction Time : " + PlayerPrefs.GetFloat("best_reaction_time").ToString("F6");
	GameObject.Find("Reaction Tests Taken Text 2").GetComponent(TextMesh).text = "Tests Taken : " + PlayerPrefs.GetInt("reaction_tests_taken");

}