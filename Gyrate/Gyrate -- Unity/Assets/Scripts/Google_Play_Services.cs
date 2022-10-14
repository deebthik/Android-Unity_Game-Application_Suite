using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class Google_Play_Services : MonoBehaviour {

	// Use this for initialization
	void Start () {

		PlayGamesPlatform.DebugLogEnabled = true;
		// Activate the Google Play Games platform
		PlayGamesPlatform.Activate();

		Social.localUser.Authenticate((bool success) => {
			// handle success or failure
			
		});
	
	}
	
	// Update is called once per frame
	void Update () {

		if(PlayerPrefs.GetInt("show achievements") == 1){

			Social.ShowAchievementsUI();
			PlayerPrefs.SetInt("show achievements", 0);

		}

		if(PlayerPrefs.GetInt("show leaderboard") == 1){
			
			PlayGamesPlatform.Instance.ShowLeaderboardUI("CgkI6d24h9MLEAIQBw");
			PlayerPrefs.SetInt("show leaderboard", 0);
			
		}

		if(PlayerPrefs.GetInt("sign in") == 1){

			Social.localUser.Authenticate((bool success) => {
				// handle success or failure
				if(success){

					PlayerPrefs.SetInt("was signed in", 1);
					if(PlayerPrefs.GetInt("sign in show leaderboard", 1) == 1){
						
						PlayerPrefs.SetInt("show leaderboard", 1);
						
					}
					PlayerPrefs.SetInt("sign in show leaderboard", 0);

				}

			});

			PlayerPrefs.SetInt("sign in", 0);

		}

		if(PlayerPrefs.GetInt("sign in achievements") == 1){
			
			Social.localUser.Authenticate((bool success) => {
				// handle success or failure
				if(success){
					
					PlayerPrefs.SetInt("was signed in achievements", 1);
					if(PlayerPrefs.GetInt("sign in show achievements", 1) == 1){
						
						PlayerPrefs.SetInt("show achievements", 1);
						
					}
					PlayerPrefs.SetInt("sign in show achievements", 0);
					
				}
				
			});
			
			PlayerPrefs.SetInt("sign in achievements", 0);
			
		}

		if(PlayerPrefs.GetInt("allow was signed in") == 1){

			if(PlayerPrefs.GetInt("was signed in") == 1){

				if(!PlayGamesPlatform.Instance.IsAuthenticated()){

					//PlayerPrefs.SetInt("rotate leaderboard", 1);
					PlayerPrefs.SetInt("was signed in", 0);
					PlayerPrefs.SetInt("sign in show leaderboard", 1);
						
				}

			}

		}

		if(PlayerPrefs.GetInt("allow was signed in achievements") == 1){
			
			if(PlayerPrefs.GetInt("was signed in achievements") == 1){
				
				if(!PlayGamesPlatform.Instance.IsAuthenticated()){
					
					//PlayerPrefs.SetInt("rotate achievements", 1);
					PlayerPrefs.SetInt("was signed in achievements", 0);
					PlayerPrefs.SetInt("sign in show achievements", 1);
					
				}
				
			}
			
		}


		if(Social.localUser.authenticated){

			Social.ReportScore(PlayerPrefs.GetInt("high score"), "CgkI6d24h9MLEAIQBw", (bool success) => {
				// handle success or failure

			});

		}

		if(GameObject.Find("Restart Symbol").transform.position.x == 0 || GameObject.Find("Game Over").transform.position.x == 0){

			if(PlayerPrefs.GetInt("high score") >= 50 && PlayerPrefs.GetInt("crossed 50", 1) == 1){

				// unlock achievement (achievement ID "Cfjewijawiu_QA")
				Social.ReportProgress("CgkI6d24h9MLEAIQAg", 100.0f, (bool success) => {
					// handle success or failure
				});

				// show achievements UI
				Social.ShowAchievementsUI();
				PlayerPrefs.SetInt("show achievements", 0);

				PlayerPrefs.SetInt("crossed 50", 0);

			}

			if(PlayerPrefs.GetInt("high score") >= 100 && PlayerPrefs.GetInt("crossed 100", 1) == 1){
				
				// unlock achievement (achievement ID "Cfjewijawiu_QA")
				Social.ReportProgress("CgkI6d24h9MLEAIQAw", 100.0f, (bool success) => {
					// handle success or failure
				});

				// show achievements UI
				Social.ShowAchievementsUI();
				PlayerPrefs.SetInt("show achievements", 0);
				
				PlayerPrefs.SetInt("crossed 100", 0);
				
			}

			if(PlayerPrefs.GetInt("high score") >= 150 && PlayerPrefs.GetInt("crossed 150", 1) == 1){
				
				// unlock achievement (achievement ID "Cfjewijawiu_QA")
				Social.ReportProgress("CgkI6d24h9MLEAIQBA", 100.0f, (bool success) => {
					// handle success or failure
				});

				// show achievements UI
				Social.ShowAchievementsUI();
				PlayerPrefs.SetInt("show achievements", 0);
				
				PlayerPrefs.SetInt("crossed 150", 0);
				
			}

			if(PlayerPrefs.GetInt("high score") >= 200 && PlayerPrefs.GetInt("crossed 200", 1) == 1){
				
				// unlock achievement (achievement ID "Cfjewijawiu_QA")
				Social.ReportProgress("CgkI6d24h9MLEAIQBQ", 100.0f, (bool success) => {
					// handle success or failure
				});

				// show achievements UI
				Social.ShowAchievementsUI();
				PlayerPrefs.SetInt("show achievements", 0);
				
				PlayerPrefs.SetInt("crossed 200", 0);
				
			}

			if(PlayerPrefs.GetInt("high score") >= 250 && PlayerPrefs.GetInt("crossed 250", 1) == 1){
				
				// unlock achievement (achievement ID "Cfjewijawiu_QA")
				Social.ReportProgress("CgkI6d24h9MLEAIQBg", 100.0f, (bool success) => {
					// handle success or failure
				});

				// show achievements UI
				Social.ShowAchievementsUI();
				PlayerPrefs.SetInt("show achievements", 0);
				
				PlayerPrefs.SetInt("crossed 250", 0);
				
			}

		}
	}
}
