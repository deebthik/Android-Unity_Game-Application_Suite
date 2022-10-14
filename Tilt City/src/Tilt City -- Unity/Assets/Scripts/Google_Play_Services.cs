using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class Google_Play_Services : MonoBehaviour {


	void Awake(){

		PlayGamesPlatform.Activate();

		Social.ReportScore(PlayerPrefs.GetInt("highscore easy"), "CgkIpYi00PkYEAIQAA", (bool success) => {
			// handle success or failure
			
		});
		
		Social.ReportScore(PlayerPrefs.GetInt("highscore medium"), "CgkIpYi00PkYEAIQBw", (bool success) => {
			// handle success or failure
			
		});
		
		Social.ReportScore(PlayerPrefs.GetInt("highscore hard"), "CgkIpYi00PkYEAIQCA", (bool success) => {
			// handle success or failure
			
		});
		
		//yield return new WaitForSeconds (0.5f);
		
		//Social.localUser.Authenticate((bool success) => {
			// handle success or failure
			
		//});

	}

	// Use this for initialization
	/*IEnumerator Start () {

		PlayGamesPlatform.Activate();

		yield return new WaitForSeconds (0.5f);

		Social.localUser.Authenticate((bool success) => {
			// handle success or failure

		});




	
	}*/
	
	// Update is called once per frame
	void Update () {

		if(PlayerPrefs.GetInt("send highscore") == 1){

		Social.ReportScore(PlayerPrefs.GetInt("highscore easy"), "CgkIpYi00PkYEAIQAA", (bool success) => {
			// handle success or failure
			
		});

		Social.ReportScore(PlayerPrefs.GetInt("highscore medium"), "CgkIpYi00PkYEAIQBw", (bool success) => {
			// handle success or failure
				
		});

		Social.ReportScore(PlayerPrefs.GetInt("highscore hard"), "CgkIpYi00PkYEAIQCA", (bool success) => {
			// handle success or failure
				
		});
		
		}


		if(PlayerPrefs.GetInt("show leaderboard") == 1){

			Social.ShowLeaderboardUI();
			PlayerPrefs.SetInt("show leaderboard", 0);

		}

		if(PlayerPrefs.GetInt("sign in") == 1){

			Social.localUser.Authenticate((bool success) => {
				// handle success or failure
				
			});

			PlayerPrefs.SetInt("sign in", 0);

		}
	
	}
}
