#pragma strict

var skin : GUISkin;

	// Draws a vertical slider control that goes from  10 (top) to 0 (bottom)
	var vSliderValue : float = 0.0;
	function OnGUI () {
	
		GUI.skin = skin;
		vSliderValue = GUI.VerticalSlider (Rect (Screen.width /2, Screen.height/2, 500, 300), vSliderValue, 10.0, 0.0);
		
		
	}