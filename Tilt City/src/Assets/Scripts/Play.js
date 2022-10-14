#pragma strict

var red_cylinder : GameObject;
red_cylinder = GameObject.Find("Red Cylinder");
var green_cylinder : GameObject;
green_cylinder = GameObject.Find("Green Cylinder");
var blue_cylinder : GameObject;
blue_cylinder = GameObject.Find("Blue Cylinder");
var yellow_cylinder : GameObject;
yellow_cylinder = GameObject.Find("Yellow Cylinder");
var crane : GameObject;
crane = GameObject.Find("Crane");
var big_cuboid : GameObject;
big_cuboid = GameObject.Find("Big Cuboid");
var small_cuboid_1 : GameObject;
small_cuboid_1 = GameObject.Find("Small Cuboid 1");
var small_cuboid_2 : GameObject;
small_cuboid_2 = GameObject.Find("Small Cuboid 2");
public static var red_ball : GameObject;
red_ball = GameObject.Find("Red Ball");
public static var glowing_red_ball : GameObject;
glowing_red_ball = GameObject.Find("Glowing Red Ball");
public static var green_ball : GameObject;
green_ball = GameObject.Find("Green Ball");
public static var glowing_green_ball : GameObject;
glowing_green_ball = GameObject.Find("Glowing Green Ball");
public static var blue_ball : GameObject;
blue_ball = GameObject.Find("Blue Ball");
public static var glowing_blue_ball : GameObject;
glowing_blue_ball = GameObject.Find("Glowing Blue Ball");
public static var yellow_ball : GameObject;
yellow_ball = GameObject.Find("Yellow Ball");
public static var glowing_yellow_ball : GameObject;
glowing_yellow_ball = GameObject.Find("Glowing Yellow Ball");
var red_ball_clone : GameObject;
var green_ball_clone : GameObject;
var blue_ball_clone : GameObject;
var yellow_ball_clone : GameObject;
public static var score : TextMesh;
public static var score_int : int = 0;
score = GameObject.Find("Score").GetComponent(TextMesh);
public static var balls : Array;
balls = [red_ball, green_ball, blue_ball, yellow_ball, glowing_red_ball, glowing_green_ball, glowing_blue_ball, glowing_yellow_ball]; 
public static var clone : GameObject;
public static var red_cylinder_fallen : boolean;
red_cylinder_fallen = false;
public static var green_cylinder_fallen : boolean;
green_cylinder_fallen = false;
public static var blue_cylinder_fallen : boolean;
blue_cylinder_fallen = false;
public static var yellow_cylinder_fallen : boolean;
yellow_cylinder_fallen = false;
public static var two_cylinders : boolean;
two_cylinders = false;
public static var three_cylinders : boolean;
three_cylinders = false;
public static var time_start : float;
var time_finish : float;
var time : float;
public static var i : float;
public static var t : float;
public static var play : boolean = false;
var highscore : int;
highscore = PlayerPrefs.GetInt("highscore");
var red_cylinder_halo : GameObject;
red_cylinder_halo = GameObject.Find("Red Cylinder Halo");
var green_cylinder_halo : GameObject;
green_cylinder_halo = GameObject.Find("Green Cylinder Halo");
var blue_cylinder_halo : GameObject;
blue_cylinder_halo = GameObject.Find("Blue Cylinder Halo");
var yellow_cylinder_halo : GameObject;
yellow_cylinder_halo = GameObject.Find("Yellow Cylinder Halo");
var score_text : GameObject;
score_text = GameObject.Find("Score Text");
public static var first_formation : boolean;
first_formation = true;
public static var second_formation : boolean;
second_formation = false;
public static var third_formation : boolean;
third_formation = false;
public static var fourth_formation : boolean;
fourth_formation = false;
public static var fifth_formation : boolean;
fifth_formation = false;
public static var destroy_balls : boolean;
destroy_balls = false; 
public static var background_music_time : float;
public static var mute_sound_effects : boolean;
mute_sound_effects = false;
public static var mute_background_music : boolean;
mute_background_music = false;
var green_button : GameObject;
green_button = GameObject.Find("Green Button");
var blue_button : GameObject;
blue_button = GameObject.Find("Blue Button");
var music_on : GameObject;
music_on = GameObject.Find("Music On");
var music_off : GameObject;
music_off = GameObject.Find("Music Off");
var mute : GameObject;
mute = GameObject.Find("Mute");
var unmute : GameObject;
unmute = GameObject.Find("Unmute");
var slash : GameObject;
slash = GameObject.Find("Slash");
public static var pause_button_clicked : boolean;
pause_button_clicked = false;
public static var big_cuboid_moving_fast_1 : boolean;
big_cuboid_moving_fast_1 = false;
public static var big_cuboid_moving_fast_2 : boolean;
big_cuboid_moving_fast_2 = false;
public static var total_time_played : boolean;
total_time_played = true;
public static var calculate_time_elapsed : boolean;
calculate_time_elapsed = true;
public static var difficulty_time : float;


function Awake () {


if(PlayerPrefs.GetInt("is the application restarting from options?") == 0 && PlayerPrefs.GetInt("is the application restarting from play?") == 0 && PlayerPrefs.GetInt("is the application restarting from statistics?") == 0){

PlayerPrefs.SetInt("sign in", 1);

if(PlayerPrefs.GetInt("difficulty easy") == 1){

PlayerPrefs.SetInt("total games easy", PlayerPrefs.GetInt("total games easy", 0) + 1);

}

if(PlayerPrefs.GetInt("difficulty medium", 1) == 1){

PlayerPrefs.SetInt("total games medium", PlayerPrefs.GetInt("total games medium", 0) + 1);

}

if(PlayerPrefs.GetInt("difficulty hard") == 1){

PlayerPrefs.SetInt("total games hard", PlayerPrefs.GetInt("total games hard", 0) + 1);

}

}

Background_Music_Fade_In();

}

function Start () {

AudioListener.pause = false;

if(Difficulty_Easy.easy){

difficulty_time = 2;

}

if(Difficulty_Medium.medium){

difficulty_time = 1;

}

if(Difficulty_Hard.hard){

difficulty_time = 0;

}

PlayerPrefs.SetInt("is the game paused from tutorial?", 0);

if(Music_Volume.background_music_time != 0){

if(PlayerPrefs.GetInt("is the application restarting from options?") == 1){

GameObject.Find("Background Music").audio.time = Music_Volume.background_music_time;
PlayerPrefs.SetInt("is the application restarting from options?", 0);

}

}

if(Buttons_Clicking.background_music_time != 0){

if(PlayerPrefs.GetInt("is the application restarting from play?") == 1){

GameObject.Find("Background Music").audio.time = Buttons_Clicking.background_music_time;
PlayerPrefs.SetInt("is the application restarting from play?", 0);

}

}

if(Statistics.background_music_time != 0){

if(PlayerPrefs.GetInt("is the application restarting from statistics?") == 1){

GameObject.Find("Background Music").audio.time = Statistics.background_music_time;
PlayerPrefs.SetInt("is the application restarting from statistics?", 0);

}

}

Rotation(GameObject.Find("Small Cuboid 1").transform, Vector3(0, 0, 0), 0.1);
Rotation(GameObject.Find("Small Cuboid 2").transform, Vector3(0, 0, 0), 0.1);

Instantiate(GameObject.Find("Game Over Plane"));
Instantiate(GameObject.Find("Game Over"));
Instantiate(GameObject.Find("Game Over Score"));
Instantiate(GameObject.Find("Game Over Exit Button"));
Instantiate(GameObject.Find("Time Elapsed"));
Instantiate(GameObject.Find("New High Score"));
Instantiate(GameObject.Find("Play Again Button"));

Instantiate(GameObject.Find("1"));
Instantiate(GameObject.Find("2"));
Instantiate(GameObject.Find("3"));

time_start = Time.timeSinceLevelLoad;
Screen.sleepTimeout = SleepTimeout.NeverSleep;

while(true){


if(!two_cylinders || !three_cylinders/*red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12*/){
if(score_int <= 10){

if(GameObject.Find("Pause Menu(Clone)")){
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 3);
 
 }else{
  
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 3);
 
 }
 
 
}
 
if(score_int > 10 && score_int <= 30){

if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 2);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 2);
 
 }
 
}

if(score_int > 30 && score_int <= 50){

if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1.5);
 
 }
 
}

if(score_int > 50){

if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1);
 
 }

}
}




if(first_formation){

if ((red_cylinder_fallen && blue_cylinder_fallen) || (red_cylinder_fallen && yellow_cylinder_fallen) || (green_cylinder_fallen && blue_cylinder_fallen) || (green_cylinder_fallen && yellow_cylinder_fallen)/*(red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)*/){
 two_cylinders = true;
 if(two_cylinders && score_int <= 20/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int <= 50*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1);
 
 }

}

 if(two_cylinders && score_int > 20 && score_int <= 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 50 && score_int <= 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1.75);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1.75);
 
 }
 

}

 if(two_cylinders && score_int > 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }

}

}

}


if(second_formation){

if ((red_cylinder_fallen && green_cylinder_fallen) || (red_cylinder_fallen && yellow_cylinder_fallen) || (blue_cylinder_fallen && green_cylinder_fallen) || (blue_cylinder_fallen && yellow_cylinder_fallen)/*(red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)*/){
 two_cylinders = true;
 if(two_cylinders && score_int <= 20/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int <= 50*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1);
 
 }

}

 if(two_cylinders && score_int > 20 && score_int <= 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 50 && score_int <= 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }
 

}

 if(two_cylinders && score_int > 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }

}

}

}


if(third_formation){

if ((yellow_cylinder_fallen && blue_cylinder_fallen) || (yellow_cylinder_fallen && red_cylinder_fallen) || (green_cylinder_fallen && blue_cylinder_fallen) || (green_cylinder_fallen && red_cylinder_fallen)/*(red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)*/){
 two_cylinders = true;
 if(two_cylinders && score_int <= 20/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int <= 50*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1);
 
 }

}

 if(two_cylinders && score_int > 20 && score_int <= 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 50 && score_int <= 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }
 

}

 if(two_cylinders && score_int > 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }

}

}

}


if(fourth_formation){

if ((blue_cylinder_fallen && red_cylinder_fallen) || (blue_cylinder_fallen && yellow_cylinder_fallen) || (green_cylinder_fallen && red_cylinder_fallen) || (green_cylinder_fallen && yellow_cylinder_fallen)/*(red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)*/){
 two_cylinders = true;
 if(two_cylinders && score_int <= 20/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int <= 50*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1);
 
 }

}

 if(two_cylinders && score_int > 20 && score_int <= 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 50 && score_int <= 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }
 

}

 if(two_cylinders && score_int > 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }

}

}

}


if(fifth_formation){

if ((red_cylinder_fallen && blue_cylinder_fallen) || (red_cylinder_fallen && green_cylinder_fallen) || (yellow_cylinder_fallen && blue_cylinder_fallen) || (yellow_cylinder_fallen && green_cylinder_fallen)/*(red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)*/){
 two_cylinders = true;
 if(two_cylinders && score_int <= 20/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int <= 50*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1);
 
 }

}

 if(two_cylinders && score_int > 20 && score_int <= 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 50 && score_int <= 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.75);
 
 }
 

}

 if(two_cylinders && score_int > 50/*((red_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (red_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -20) || (green_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -20)) && score_int > 80*/){
 
 if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 0.5);
 
 }

}

}

}


if((red_cylinder_fallen && !green_cylinder_fallen && !blue_cylinder_fallen && !yellow_cylinder_fallen) || (!red_cylinder_fallen && green_cylinder_fallen && !blue_cylinder_fallen && !yellow_cylinder_fallen) || (!red_cylinder_fallen && !green_cylinder_fallen && blue_cylinder_fallen && !yellow_cylinder_fallen) || (!red_cylinder_fallen && !green_cylinder_fallen && !blue_cylinder_fallen && yellow_cylinder_fallen)/*(red_cylinder.transform.position.y == -20 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -20)*/){

three_cylinders = true;

if(three_cylinders && score_int <= 10/*(red_cylinder.transform.position.y == -20 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -20) && score_int <= 30*/){

if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 3);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 3);
 
 }

}

if(three_cylinders && score_int > 10 && score_int <= 30/*(red_cylinder.transform.position.y == -20 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -20)) && score_int > 30 && score_int <= 50*/){

if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 2);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 2);
 
 }

}

if(three_cylinders && score_int >= 30/*(red_cylinder.transform.position.y == -20 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -20 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -20 && yellow_cylinder.transform.position.y == -12) || (red_cylinder.transform.position.y == -12 && green_cylinder.transform.position.y == -12 && blue_cylinder.transform.position.y == -12 && yellow_cylinder.transform.position.y == -20)) && score_int > 50*/){

if(GameObject.Find("Pause Menu(Clone)")){

 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 Destroy(clone);
 yield WaitForSeconds(difficulty_time + 1.5);
 
 }else{
 
 clone = Instantiate(balls[Random.Range(0, balls.length)], Vector3(25, 10, 11), transform.rotation);
 yield WaitForSeconds(difficulty_time + 1.5);
 
 }

}


}


if(red_cylinder.transform.position.x == -12 && green_cylinder.transform.position.x == -5 && blue_cylinder.transform.position.x == 5 && yellow_cylinder.transform.position.x == 12){

first_formation = true;
second_formation = false;
third_formation = false;
fourth_formation = false;
fifth_formation = false;

}

if(red_cylinder.transform.position.x == -12 && blue_cylinder.transform.position.x == -5 && green_cylinder.transform.position.x == 5 && yellow_cylinder.transform.position.x == 12){

first_formation = false;
second_formation = true;
third_formation = false;
fourth_formation = false;
fifth_formation = false;

}

if(yellow_cylinder.transform.position.x == -12 && green_cylinder.transform.position.x == -5 && blue_cylinder.transform.position.x == 5 && red_cylinder.transform.position.x == 12){

first_formation = false;
second_formation = false;
third_formation = true;
fourth_formation = false;
fifth_formation = false;

}

if(blue_cylinder.transform.position.x == -12 && green_cylinder.transform.position.x == -5 && red_cylinder.transform.position.x == 5 && yellow_cylinder.transform.position.x == 12){

first_formation = false;
second_formation = false;
third_formation = false;
fourth_formation = true;
fifth_formation = false;

}

if(red_cylinder.transform.position.x == -12 && yellow_cylinder.transform.position.x == -5 && blue_cylinder.transform.position.x == 5 && green_cylinder.transform.position.x == 12){

first_formation = false;
second_formation = false;
third_formation = false;
fourth_formation = false;
fifth_formation = true;

}

}

}






function Update () {


/*if(mute_background_music){

GameObject.Find("Background Music").audio.volume = 0;

}*/

//if(!mute_background_music && !Menu.options){

//GameObject.Find("Background Music").audio.volume = Music_Volume.music_volume_slider_value;

//}

/*if(mute_sound_effects){

GameObject.Find("Score Music").audio.volume = 0;
GameObject.Find("Score Music 2").audio.volume = 0;
GameObject.Find("Countdown Beep").audio.volume = 0;
GameObject.Find("Countdown Finish Beep").audio.volume = 0;

}*/

//if(!mute_sound_effects && !Menu.options){

GameObject.Find("Countdown Beep").audio.volume = Sound_Volume.sound_volume_slider_value;
GameObject.Find("Countdown Finish Beep").audio.volume = Sound_Volume.sound_volume_slider_value;
GameObject.Find("Score Music").audio.volume = Sound_Volume.sound_volume_slider_value/2;
GameObject.Find("Score Music 2").audio.volume = Sound_Volume.sound_volume_slider_value/2;

//}

if(destroy_balls){

Destroy_Balls();

}

if(!play){

Destroy(clone);

}


if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0 && !GameObject.Find("Pause Menu(Clone)") && GameObject.Find("Game Over Plane(Clone)").transform.position.y == 20 && GameObject.Find("Game Over Plane").transform.position.y != 0 && GameObject.Find("Menu Play Button").transform.position.x != 0 && !GameObject.Find("3(Clone)") && !GameObject.Find("2(Clone)") && !GameObject.Find("1(Clone)")){

if(Input.GetKeyDown(KeyCode.Escape) || pause_button_clicked || GameObject.Find("Pause Menu(Clone)")){

AudioListener.pause = true;

GameObject.Find("Transparent Plane").transform.position.x = 0;

/*Instantiate(green_button, Vector3(-13, green_button.transform.position.y, green_button.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(blue_button, Vector3(-10, blue_button.transform.position.y, blue_button.transform.position.z), Quaternion.Euler(90, 180, 0));

if(!mute_background_music){

Instantiate(music_on, Vector3(-9.83, music_on.transform.position.y, music_on.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(music_off, Vector3(-20, music_off.transform.position.y, music_off.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(slash, Vector3(-20, slash.transform.position.y, slash.transform.position.z), Quaternion.Euler(90, 180, 0));

}else{

Instantiate(music_on, Vector3(-20, music_on.transform.position.y, music_on.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(music_off, Vector3(-9.83, music_off.transform.position.y, music_off.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(slash, Vector3(-9.8, slash.transform.position.y, slash.transform.position.z), Quaternion.Euler(90, 180, 0));

}

if(!mute_sound_effects){

Instantiate(mute, Vector3(-20, mute.transform.position.y, mute.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(unmute, Vector3(-13, unmute.transform.position.y, unmute.transform.position.z), Quaternion.Euler(90, 180, 0));

}else{

Instantiate(mute, Vector3(-13, mute.transform.position.y, mute.transform.position.z), Quaternion.Euler(90, 180, 0));
Instantiate(unmute, Vector3(-20, unmute.transform.position.y, unmute.transform.position.z), Quaternion.Euler(90, 180, 0));

}*/

Instantiate(GameObject.Find("Pause Menu"), Vector3(0, 0, 5), Quaternion.Euler(270, 0, 0));
Instantiate(GameObject.Find("Play Button"), Vector3(0, 2.5, 1), Quaternion.Euler(90, 180, 0));
Instantiate(GameObject.Find("Restart Button"), Vector3(0, 0.9, 1), Quaternion.Euler(90, 180, 0));
Instantiate(GameObject.Find("Options Button"), Vector3(0, -0.7, 1), Quaternion.Euler(90, 180, 0));
Instantiate(GameObject.Find("Exit Button"), Vector3(0, -2.3, 1), Quaternion.Euler(90, 180, 0));

}

}

if(!GameObject.Find("1(Clone)") || Tutorial.secondary_platform_instruction || Tutorial.play_trial){

if (Input.touchCount == 2)
{
    var touch1 = Input.touches[0];
    var touch2 = Input.touches[1];
    if ((touch1.position.x < Screen.width/2 && touch2.position.x > Screen.width/2) || (touch1.position.x > Screen.width/2 && touch2.position.x < Screen.width/2))
    {
    	/*if ((touch1.phase == TouchPhase.Began && touch2.phase == TouchPhase.Began) || (touch1.phase == TouchPhase.Stationary && touch2.phase == TouchPhase.Began) || (touch1.phase == TouchPhase.Began && touch2.phase == TouchPhase.Stationary) || (touch1.phase == TouchPhase.Canceled && touch2.phase == TouchPhase.Canceled)){
        Rotation(small_cuboid_1.transform, Vector3(0, 0, 0), 0.1);
        Rotation(small_cuboid_2.transform, Vector3(0, 0, 0), 0.1);
        }
        
        if((touch1.phase == TouchPhase.Stationary && touch2.phase == TouchPhase.Ended)){
        Rotation(small_cuboid_1.transform, Vector3(0, 0, 25), 0.1);
        Rotation(small_cuboid_2.transform, Vector3(0, 0, 25), 0.1);
        }
        
        if(touch1.phase == TouchPhase.Ended && touch2.phase == TouchPhase.Stationary){
        Rotation(small_cuboid_1.transform, Vector3(0, 0, -25), 0.1);
        Rotation(small_cuboid_2.transform, Vector3(0, 0, -25), 0.1);
        }*/

        if(touch1.phase == TouchPhase.Stationary && touch2.phase == TouchPhase.Began){
        Rotation(small_cuboid_1.transform, Vector3(0, 0, 25), 0.1);
        Rotation(small_cuboid_2.transform, Vector3(0, 0, 25), 0.1);
        }
		
        if(touch2.phase == TouchPhase.Stationary && touch1.phase == TouchPhase.Began){
        Rotation(small_cuboid_1.transform, Vector3(0, 0, -25), 0.1);
        Rotation(small_cuboid_2.transform, Vector3(0, 0, -25), 0.1);
        }
        
    }
    

}

if (Input.touchCount == 1){

var touch = Input.touches[0];

if (touch.position.x < Screen.width/2){

if(touch.phase == TouchPhase.Began){
Rotation(small_cuboid_1.transform, Vector3(0, 0, 25), 0.1);
Rotation(small_cuboid_2.transform, Vector3(0, 0, 25), 0.1);
}

if(touch.phase == TouchPhase.Ended){
Rotation(small_cuboid_1.transform, Vector3(0, 0, 0), 0.1);
Rotation(small_cuboid_2.transform, Vector3(0, 0, 0), 0.1);
}

}

if(touch.position.x > Screen.width/2){

if(touch.phase == TouchPhase.Began){
Rotation(small_cuboid_1.transform, Vector3(0, 0, -25), 0.1);
Rotation(small_cuboid_2.transform, Vector3(0, 0, -25), 0.1);
}

if(touch.phase == TouchPhase.Ended){
Rotation(small_cuboid_1.transform, Vector3(0, 0, 0), 0.1);
Rotation(small_cuboid_2.transform, Vector3(0, 0, 0), 0.1);
}

}

}

}




if(Input.GetKeyDown(KeyCode.Escape)){

if(GameObject.Find("Tilt City").transform.position.x == 0){

Application.Quit();

}

}



if(GameObject.Find("Game Over Plane(Clone)").transform.position.y < 20){

Destroy(clone);

}

if(play){

if(red_cylinder_fallen/*red_cylinder.transform.position.y == -20*/){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
balls.Remove(red_ball);
balls.Remove(glowing_red_ball);

}

if(green_cylinder_fallen/*green_cylinder.transform.position.y == -20*/){

Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
balls.Remove(green_ball);
balls.Remove(glowing_green_ball);

}

if(blue_cylinder_fallen/*blue_cylinder.transform.position.y == -20*/){

Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
balls.Remove(blue_ball);
balls.Remove(glowing_blue_ball);

}

if(yellow_cylinder_fallen/*yellow_cylinder.transform.position.y == -20*/){

Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));
balls.Remove(yellow_ball);
balls.Remove(glowing_yellow_ball);

}

}

if(first_formation){
if(red_cylinder_fallen && green_cylinder_fallen){

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 1 && GameObject.Find("Big Cuboid").transform.position.y == 1){

RedandGreen_Cylinders_Movement();

}

}

if(blue_cylinder_fallen && yellow_cylinder_fallen){

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 0){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

if(Tutorial_Toggle_Slider.tutorial_toggle_slider_value == 1 && GameObject.Find("Big Cuboid").transform.position.y == 1){

BlueandYellow_Cylinders_Movement();

}

}

}

if(second_formation){
if(red_cylinder_fallen && blue_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

if(green_cylinder_fallen && yellow_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

}

if(third_formation){
if(yellow_cylinder_fallen && green_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

if(blue_cylinder_fallen && red_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

}

if(fourth_formation){
if(blue_cylinder_fallen && green_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

if(red_cylinder_fallen && yellow_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

}

if(fifth_formation){
if(red_cylinder_fallen && yellow_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

if(blue_cylinder_fallen && green_cylinder_fallen){

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));

time_finish = Time.timeSinceLevelLoad;

GameOver();

}

}

}


function Rotation (thisTransform : Transform, degrees : Vector3, time : float) {
	var startRotation = thisTransform.rotation;
	var endRotation = Quaternion.Euler(degrees);
	var rate = 1.0/time;
	var t = 0.0;
	while (t < 1.0) {
		t += Time.deltaTime * rate;
		thisTransform.rotation = Quaternion.Slerp(startRotation, endRotation, t);
		yield;
	}
	
	}
	
/*function Movement (thisTransform : Transform, vector : Vector3, speed : float){

	var t = 0.0;
	while (t < 1.0){
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	yield;
	}
}*/


function DisplayScore () {

if(((blue_cylinder_fallen && yellow_cylinder_fallen) || (red_cylinder_fallen && green_cylinder_fallen)) && score_int == -1){

Wait_For_1_Second();

}

if(score_int > 0){

yield WaitForSeconds(0.5);

while(i <= score_int){

GameObject.Find("Game Over Score(Clone)").GetComponent(TextMesh).text = "Score : " + i.ToString();
i++;
Time.timeScale = 0;
yield;

}

GameObject.Find("Game Over Score(Clone)").GetComponent(TextMesh).text = "Score : " + score_int.ToString();

}

if(score_int < 0){

yield WaitForSeconds(0.5);

while(i >= score_int){

GameObject.Find("Game Over Score(Clone)").GetComponent(TextMesh).text = "Score : " + i.ToString();
i--;
Time.timeScale = 0;
yield;

}

GameObject.Find("Game Over Score(Clone)").GetComponent(TextMesh).text = "Score : " + score_int.ToString();

}

if(score_int == 0){

GameObject.Find("Game Over Score(Clone)").GetComponent(TextMesh).text = "Score : " + score_int.ToString();

}

}


function DisplayTimeElapsed(){

if(calculate_time_elapsed){

time = time_finish - time_start;
calculate_time_elapsed = false;

}

if(total_time_played){

if(Difficulty_Easy.easy){

PlayerPrefs.SetFloat("total time played easy", PlayerPrefs.GetFloat("total time played easy", 0) + time);

}

if(Difficulty_Medium.medium){

PlayerPrefs.SetFloat("total time played medium", PlayerPrefs.GetFloat("total time played medium", 0) + time);

}

if(Difficulty_Hard.hard){

PlayerPrefs.SetFloat("total time played hard", PlayerPrefs.GetFloat("total time played hard", 0) + time);

}

total_time_played = false;

}

if(Difficulty_Easy.easy){

if(time > PlayerPrefs.GetFloat("longest time played easy", 0)){

PlayerPrefs.SetFloat("longest time played easy", time);

}

}

if(Difficulty_Medium.medium){

if(time > PlayerPrefs.GetFloat("longest time played medium", 0)){

PlayerPrefs.SetFloat("longest time played medium", time);

}

}

if(Difficulty_Hard.hard){

if(time > PlayerPrefs.GetFloat("longest time played hard", 0)){

PlayerPrefs.SetFloat("longest time played hard", time);

}

}

yield WaitForSeconds(0.5);

while(t <= time){

GameObject.Find("Time Elapsed(Clone)").GetComponent(TextMesh).text = "Time Elapsed : " + (Mathf.Round(t * 100)/100).ToString();
t += 5;
Time.timeScale = 0;
yield;

}

if(time <= 60){

GameObject.Find("Time Elapsed(Clone)").GetComponent(TextMesh).text = "Time Elapsed : " + (Mathf.Round(time * 100)/100).ToString() + " " + "s";

}

if(time > 60){

GameObject.Find("Time Elapsed(Clone)").GetComponent(TextMesh).text = "Time Elapsed : " + Mathf.Round(time/60) + " " + "min." + " " + (Mathf.Round((time%60) * 100)/100).ToString() + " " + "s";

}

}


function GameOver(){

Destroy(GameObject.Find("Pause Menu(Clone)"));
Destroy(GameObject.Find("Play Button(Clone)"));
Destroy(GameObject.Find("Restart Button(Clone)"));
Destroy(GameObject.Find("Options Button(Clone)"));
Destroy(GameObject.Find("Exit Button(Clone)"));

GameObject.Find("Transparent Plane").transform.position.x = -100;

yield WaitForSeconds(1.5);
Movement(GameObject.Find("Game Over Plane(Clone)"), Vector3(0, 0, 5), 0.5);
Movement(GameObject.Find("Game Over(Clone)"), Vector3(0, 3.5, 1), 0.5);
Movement(GameObject.Find("Game Over Score(Clone)"), Vector3(-8, 2.3, 1), 0.5);
Movement(GameObject.Find("Time Elapsed(Clone)"), Vector3(-8, 0.9, 1), 0.5);
Movement(GameObject.Find("Game Over Exit Button(Clone)"), Vector3(-5, -2.3, 1), 0.5);
Movement(GameObject.Find("Play Again Button(Clone)"), Vector3(3.5, -2.3, 1), 0.5);

if(score_int > highscore){

Movement(GameObject.Find("New High Score(Clone)"), Vector3(-7, -22.5, 0), 0.5);
highscore = score_int;
PlayerPrefs.SetInt("send highscore", 1);

if(Difficulty_Easy.easy){

PlayerPrefs.SetInt("highscore easy", highscore);

}

if(Difficulty_Medium.medium){

PlayerPrefs.SetInt("highscore medium", highscore);

}

if(Difficulty_Hard.hard){

PlayerPrefs.SetInt("highscore hard", highscore);

}

DisplayScore();
DisplayTimeElapsed();

}

if(GameObject.Find("Game Over Plane(Clone)").transform.position.y == 0){

DisplayScore();
DisplayTimeElapsed();

}

}


function Play_Movement (thisTransform : Transform, vector : Vector3, speed : float){

	yield WaitForSeconds(1);
	var t = 0.0;
	while (t < 1.0){
	thisTransform.position = Vector3.MoveTowards(thisTransform.position, vector, speed);
	yield;
	
	}
}

function Destroy_Balls(){

Destroy(clone);

Rotation(small_cuboid_1.transform, Vector3(0, 0, 0), 0.1);
Rotation(small_cuboid_2.transform, Vector3(0, 0, 0), 0.1);

Destroy(GameObject.Find("Red Ball(Clone)"));
Destroy(GameObject.Find("Green Ball(Clone)"));
Destroy(GameObject.Find("Blue Ball(Clone)"));
Destroy(GameObject.Find("Yellow Ball(Clone)"));
Destroy(GameObject.Find("Glowing Red Ball(Clone)"));
Destroy(GameObject.Find("Glowing Green Ball(Clone)"));
Destroy(GameObject.Find("Glowing Blue Ball(Clone)"));
Destroy(GameObject.Find("Glowing Yellow Ball(Clone)"));
yield WaitForSeconds(1);
destroy_balls = false;

}


function Movement (gameobject : GameObject, vector : Vector3, time : float){

	iTween.MoveTo(gameobject, vector, time);
}



function Background_Music_Fade_In(){

	var t = 0.0;
    while (t <= PlayerPrefs.GetFloat("music volume", 0.75)) {
        t += Time.deltaTime;
        GameObject.Find("Background Music").audio.volume  = t;
        yield;
    }

}

function Wait_For_1_Second(){

yield WaitForSeconds(0.5);
GameObject.Find("Game Over Score(Clone)").GetComponent(TextMesh).text = "Score : " + score_int.ToString();

}


function RedandGreen_Cylinders_Movement(){

yield WaitForSeconds(1.5);
red_cylinder.animation.Stop();
green_cylinder.animation.Stop();

Movement(red_cylinder, Vector3(red_cylinder.transform.position.x, -12, red_cylinder.transform.position.z), 1);
Movement(red_cylinder_halo, Vector3(red_cylinder_halo.transform.position.x, -10, red_cylinder_halo.transform.position.z), 1);
Movement(green_cylinder, Vector3(green_cylinder.transform.position.x, -12, green_cylinder.transform.position.z), 1);
Movement(green_cylinder_halo, Vector3(green_cylinder_halo.transform.position.x, -10, green_cylinder_halo.transform.position.z), 1);

red_cylinder_fallen = false;
green_cylinder_fallen = false;

}


function BlueandYellow_Cylinders_Movement(){

yield WaitForSeconds(1.5);

blue_cylinder.animation.Stop();
yellow_cylinder.animation.Stop();

Movement(blue_cylinder, Vector3(blue_cylinder.transform.position.x, -12, blue_cylinder.transform.position.z), 1);
Movement(blue_cylinder_halo, Vector3(blue_cylinder_halo.transform.position.x, -10, blue_cylinder_halo.transform.position.z), 1);
Movement(yellow_cylinder, Vector3(yellow_cylinder.transform.position.x, -12, yellow_cylinder.transform.position.z), 1);
Movement(yellow_cylinder_halo, Vector3(yellow_cylinder_halo.transform.position.x, -10, yellow_cylinder_halo.transform.position.z), 1);

blue_cylinder_fallen = false;
yellow_cylinder_fallen = false;

}

