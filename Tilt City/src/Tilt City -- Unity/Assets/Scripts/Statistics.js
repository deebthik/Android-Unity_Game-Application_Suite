#pragma strict

var gui_skin : GUISkin;
public static var background_music_time : float;
var white_line_vertical : Texture;
var white_line_horizontal : Texture;

function Start () {

}

function Update () {

}


function OnGUI(){

if(Menu.statistics){


if(Input.GetKeyDown(KeyCode.Escape)){

Menu.statistics = false;

background_music_time = GameObject.Find("Background Music").audio.time;
PlayerPrefs.SetInt("is the application restarting from statistics?", 1);

Application.LoadLevel("Play Scene");

}

GUI.skin = gui_skin;

gui_skin.label.fixedWidth = Screen.width/2;
gui_skin.label.fixedHeight = Screen.height/6;
gui_skin.label.fontSize = Screen.height/8;
gui_skin.label.fontStyle = FontStyle.BoldAndItalic;
GUI.Label(Rect(Screen.width/80, Screen.height/10, 1000, 500), "STATS");
GUI.Label(Rect(Screen.width/80, Screen.height/10, 1000, 500), "______");

GUI.DrawTexture(Rect(Screen.width/1.55, 0, Screen.width/200, Screen.height), white_line_vertical, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/3.4, 0, Screen.width/200, Screen.height/1.58), white_line_vertical, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/2.45, Screen.height/5.5, Screen.width/300, Screen.height/2.25), white_line_vertical, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/1.85, Screen.height/5.5, Screen.width/300, Screen.height/2.25), white_line_vertical, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/1.31, Screen.height/1.85, Screen.width/300, Screen.height), white_line_vertical, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/1.12, Screen.height/1.85, Screen.width/300, Screen.height), white_line_vertical, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/2.45, Screen.height/1.6, Screen.width/200, Screen.height), white_line_vertical, ScaleMode.StretchToFill);

GUI.DrawTexture(Rect(Screen.width/3.4, Screen.height/5.5, Screen.width/2.85, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(0, Screen.height/3.3, Screen.width/1.55, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(0, Screen.height/2.3, Screen.width/1.55, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(0, Screen.height/1.6, Screen.width/1.55, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/1.55, Screen.height/2.5, Screen.width/2, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/1.55, Screen.height/1.85, Screen.width/2, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/1.55, Screen.height/1.6, Screen.width/2, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);
GUI.DrawTexture(Rect(Screen.width/2.45, Screen.height/1.3, Screen.width/1.55, Screen.height/120), white_line_horizontal, ScaleMode.StretchToFill);

gui_skin.label.fixedWidth = Screen.width/3;
gui_skin.label.fixedHeight = Screen.height/6;
gui_skin.label.fontSize = Screen.height/18;
gui_skin.label.fontStyle = FontStyle.Normal;
GUI.Label(Rect(Screen.width/3.2, Screen.height/4.7, 1000, 500), "Easy");
GUI.Label(Rect(Screen.width/2.425, Screen.height/4.7, 1000, 500), "Medium");
GUI.Label(Rect(Screen.width/1.805, Screen.height/4.7, 1000, 500), "Hard");

GUI.Label(Rect(Screen.width/1.5, Screen.height/1.84, 1000, 500), "Easy");
GUI.Label(Rect(Screen.width/1.305, Screen.height/1.84, 1000, 500), "Medium");
GUI.Label(Rect(Screen.width/1.1, Screen.height/1.84, 1000, 500), "Hard");

gui_skin.label.fixedWidth = Screen.width/3;
gui_skin.label.fixedHeight = Screen.height/6;
gui_skin.label.fontSize = Screen.height/12;
gui_skin.label.fontStyle = FontStyle.Bold;
GUI.Label(Rect(Screen.width/2.9, Screen.height/20, 1000, 500), "Single Play");
GUI.Label(Rect(Screen.width/1.35, Screen.height/2.375, 1000, 500), "Lifetime");


gui_skin.label.fixedWidth = Screen.width/2;
gui_skin.label.fixedHeight = Screen.height/9;
gui_skin.label.fontSize = Screen.height/15;
gui_skin.label.fontStyle = FontStyle.Bold;
GUI.Label(Rect(Screen.width/60, Screen.height/3, 1000, 500), "Highest Score");

gui_skin.label.fontSize = Screen.height/19;
gui_skin.label.fontStyle = FontStyle.Normal;
GUI.Label(Rect(Screen.width/3.3, Screen.height/3, 1000, 500), "" + PlayerPrefs.GetInt("highscore easy"));

gui_skin.label.fontSize = Screen.height/19;
gui_skin.label.fontStyle = FontStyle.Normal;
GUI.Label(Rect(Screen.width/2.4, Screen.height/3, 1000, 500), "" + PlayerPrefs.GetInt("highscore medium"));

gui_skin.label.fontSize = Screen.height/19;
gui_skin.label.fontStyle = FontStyle.Normal;
GUI.Label(Rect(Screen.width/1.83, Screen.height/3, 1000, 500), "" + PlayerPrefs.GetInt("highscore high"));

gui_skin.label.fixedWidth = Screen.width/1;
gui_skin.label.fixedHeight = Screen.height/9;
gui_skin.label.fontSize = Screen.height/15;
gui_skin.label.fontStyle = FontStyle.Bold;
GUI.Label(Rect(Screen.width/50, Screen.height/2.2, 1000, 500), "Longest Time");
GUI.Label(Rect(Screen.width/13, Screen.height/1.9, 1000, 500), "Played");

gui_skin.label.fontSize = Screen.height/19;
gui_skin.label.fixedHeight = Screen.height/7;
gui_skin.label.fontStyle = FontStyle.Normal;

if(PlayerPrefs.GetFloat("longest time played easy") <= 60){

GUI.Label(Rect(Screen.width/3.3, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played easy") * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("longest time played easy") > 60){

GUI.Label(Rect(Screen.width/3.3, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played easy")/60)) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played easy")%60) * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("longest time played easy") > 3600){

GUI.Label(Rect(Screen.width/3.3, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played easy")/3600)) + " " + "hrs." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played easy")%60) * 100)/100) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played easy")%3600) * 100)/100) + " " + "s");

}



if(PlayerPrefs.GetFloat("longest time played medium") <= 60){

GUI.Label(Rect(Screen.width/2.4, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played medium") * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("longest time played medium") > 60){

GUI.Label(Rect(Screen.width/2.4, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played medium")/60)) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played medium")%60) * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("longest time played medium") > 3600){

GUI.Label(Rect(Screen.width/2.4, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played medium")/3600)) + " " + "hrs." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played medium")%60) * 100)/100) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played medium")%3600) * 100)/100) + " " + "s");

}



if(PlayerPrefs.GetFloat("longest time played hard") <= 60){

GUI.Label(Rect(Screen.width/1.83, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played hard") * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("longest time played hard") > 60){

GUI.Label(Rect(Screen.width/1.83, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played hard")/60)) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played hard")%60) * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("longest time played hard") > 3600){

GUI.Label(Rect(Screen.width/1.83, Screen.height/2.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("longest time played hard")/3600)) + " " + "hrs." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played hard")%60) * 100)/100) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("longest time played hard")%3600) * 100)/100) + " " + "s");

}



gui_skin.label.fixedWidth = Screen.width/2;
gui_skin.label.fixedHeight = Screen.height/9;
gui_skin.label.fontSize = Screen.height/15.5;
gui_skin.label.fontStyle = FontStyle.Bold;
GUI.Label(Rect(Screen.width/2.4125, Screen.height/1.525, 1000, 500), "Total Games");

gui_skin.label.fontSize = Screen.height/19;
gui_skin.label.fontStyle = FontStyle.Normal;

GUI.Label(Rect(Screen.width/1.53, Screen.height/1.5125, 1000, 500), "" + PlayerPrefs.GetInt("total games easy"));

GUI.Label(Rect(Screen.width/1.3, Screen.height/1.5125, 1000, 500), "" + PlayerPrefs.GetInt("total games medium"));

GUI.Label(Rect(Screen.width/1.115, Screen.height/1.5125, 1000, 500), "" + PlayerPrefs.GetInt("total games hard"));

gui_skin.label.fixedWidth = Screen.width/1;
gui_skin.label.fixedHeight = Screen.height/9;
gui_skin.label.fontSize = Screen.height/15;
gui_skin.label.fontStyle = FontStyle.Bold;
GUI.Label(Rect(Screen.width/2.325, Screen.height/1.25, 1000, 500), "Total Time");
GUI.Label(Rect(Screen.width/2.15, Screen.height/1.15, 1000, 500), "Played");

gui_skin.label.fontSize = Screen.height/19;
gui_skin.label.fixedHeight = Screen.height/7;
gui_skin.label.fontStyle = FontStyle.Normal;

if(PlayerPrefs.GetFloat("total time played easy") <= 60){

GUI.Label(Rect(Screen.width/1.5375, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played easy") * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("total time played easy") > 60){

GUI.Label(Rect(Screen.width/1.5375, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played easy")/60)) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played easy")%60) * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("total time played easy") > 3600){

GUI.Label(Rect(Screen.width/1.5375, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played easy")/3600)) + " " + "hrs." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played easy")%60) * 100)/100) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played easy")%3600) * 100)/100) + " " + "s");

}



if(PlayerPrefs.GetFloat("total time played medium") <= 60){

GUI.Label(Rect(Screen.width/1.3, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played medium") * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("total time played medium") > 60){

GUI.Label(Rect(Screen.width/1.3, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played medium")/60)) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played medium")%60) * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("total time played medium") > 3600){

GUI.Label(Rect(Screen.width/1.3, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played medium")/3600)) + " " + "hrs." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played medium")%60) * 100)/100) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played medium")%3600) * 100)/100) + " " + "s");

}



if(PlayerPrefs.GetFloat("total time played hard") <= 60){

GUI.Label(Rect(Screen.width/1.115, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played hard") * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("total time played hard") > 60){

GUI.Label(Rect(Screen.width/1.115, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played hard")/60)) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played hard")%60) * 100)/100) + " " + "s");

}

if(PlayerPrefs.GetFloat("total time played hard") > 3600){

GUI.Label(Rect(Screen.width/1.115, Screen.height/1.3, 1000, 500), "" + (Mathf.Round(PlayerPrefs.GetFloat("total time played hard")/3600)) + " " + "hrs." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played hard")%60) * 100)/100) + " " + "min." + "\n" + (Mathf.Round((PlayerPrefs.GetFloat("total time played hard")%3600) * 100)/100) + " " + "s");

}

}

}