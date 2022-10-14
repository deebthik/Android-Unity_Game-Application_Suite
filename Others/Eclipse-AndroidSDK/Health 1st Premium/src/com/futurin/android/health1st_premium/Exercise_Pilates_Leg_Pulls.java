package com.futurin.android.health1st_premium;

import android.app.Activity;
import android.graphics.Paint;
import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.VideoView;

public class Exercise_Pilates_Leg_Pulls extends Activity{

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.exercise_pilates_leg_pulls);
		
		ScrollView pilates_leg_pulls_scrollview = (ScrollView) findViewById(R.id.pilates_leg_pulls_scrollview);
		pilates_leg_pulls_scrollview.smoothScrollTo(0, 0);
		
		
		VideoView pilates_leg_pulls_video = (VideoView) findViewById(R.id.pilates_leg_pulls_video);
		MediaController pilates_leg_pulls_mediacontroller = new MediaController(this);
		
		pilates_leg_pulls_video.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.pilates_leg_pulls));
		pilates_leg_pulls_video.setMediaController(pilates_leg_pulls_mediacontroller);
		
		
		
		
		
		TextView pilates_leg_pulls_instructions = (TextView) findViewById(R.id.pilates_leg_pulls_instructions);
		pilates_leg_pulls_instructions.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
		TextView pilates_leg_pulls_purpose = (TextView) findViewById(R.id.pilates_leg_pulls_purpose);
		pilates_leg_pulls_purpose.setPaintFlags(Paint.UNDERLINE_TEXT_FLAG);
		
	}
}
